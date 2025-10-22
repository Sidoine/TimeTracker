import { RestCrudService, configureOpenApi } from "./generated-api/index";
import dayjs from "dayjs";
import readline from "node:readline/promises";
import { readFileSync } from "fs";

// Chargement de la configuration depuis config.json
const config: { repoPath: string; baseUrl: string; accessToken: string } =
  JSON.parse(readFileSync("config.json", "utf-8"));

async function showActivityTypes() {
  const res = await RestCrudService.restActivityTypes();
  if (
    res.data &&
    Array.isArray(res.data.activityTypes) &&
    res.data.activityTypes.length > 0
  ) {
    console.log("Liste des activityType disponibles :");
    res.data.activityTypes.forEach((type: any) => {
      console.log(`- ${type.name} (${type.id})`);
    });
  } else {
    console.log("Aucun activityType trouvé.");
  }
}

async function getGitUserEmail(): Promise<string | undefined> {
  const { exec } = await import("child_process");
  const util = await import("util");
  const execAsync = util.promisify(exec);
  try {
    const { stdout } = await execAsync("git config user.email", {
      cwd: config.repoPath,
    });
    return stdout.trim() || undefined;
  } catch {
    return undefined;
  }
}

async function logWorkIn7pace(dateStr: string) {
  // Construction du body pour l'API
  const worklog = {
    timeStamp: `${dateStr}T09:00:00`, // 9h du matin
    length: 8 * 3600, // 8 heures en secondes
    workItemId: 1789010,
    activityTypeId: "c30c3a6d-aacd-46b2-833d-acd3d33d830d",
  };
  try {
    const res = await RestCrudService.restWorkLogPost(worklog);
    if (res.data) {
      console.log(`Worklog de 8h ajouté dans 7pace pour le ${dateStr}`);
    } else {
      console.log(
        "Erreur : la création du worklog n'a pas retourné de données."
      );
    }
  } catch (e) {
    console.error("Erreur lors de la création du worklog dans 7pace :", e);
  }
}

async function logTimeOffIn7pace(dateStr: string) {
  const worklog = {
    timeStamp: `${dateStr}T09:00:00`,
    length: 8 * 3600,
    workItemId: 1789010,
    activityTypeId: "61e63283-5eec-4853-9a1a-a15550da0d46",
    comment: "Congé",
  };
  try {
    const res = await RestCrudService.restWorkLogPost(worklog);
    if (res.data) {
      console.log(
        `Worklog "time off" de 8h ajouté dans 7pace pour le ${dateStr}`
      );
    } else {
      console.log(
        "Erreur : la création du worklog 'time off' n'a pas retourné de données."
      );
    }
  } catch (e) {
    console.error(
      "Erreur lors de la création du worklog 'time off' dans 7pace :",
      e
    );
  }
}

async function checkGitCommitForDate(dateStr: string) {
  const { exec } = await import("child_process");
  const util = await import("util");
  const execAsync = util.promisify(exec);
  // Récupérer l'email git de l'utilisateur courant
  const userEmail = await getGitUserEmail();
  if (!userEmail) {
    console.log(
      "Impossible de déterminer l'email Git de l'utilisateur courant."
    );
    return false;
  }
  // Format attendu par git log : YYYY-MM-DD
  const since = `${dateStr}T00:00:00`;
  const until = `${dateStr}T23:59:59`;
  try {
    const { stdout } = await execAsync(
      `git log --since="${since}" --until="${until}" --author="${userEmail}" --pretty=oneline`,
      { cwd: config.repoPath }
    );
    if (stdout && stdout.trim().length > 0) {
      console.log(
        `Commit(s) Git trouvé(s) pour le ${dateStr} dans ${config.repoPath} par ${userEmail} :`
      );
      console.log(stdout);
      await logWorkIn7pace(dateStr);
      return true;
    } else {
      console.log(
        `Aucun commit Git trouvé pour le ${dateStr} dans ${config.repoPath} pour l'utilisateur ${userEmail}.`
      );
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      const answer = await rl.question(
        `Étiez-vous en congé le ${dateStr} ? (o/N) : `
      );
      if (answer.trim().toLowerCase() === "o") {
        console.log(`Jour ${dateStr} marqué comme potentiellement en congé.`);
        await logTimeOffIn7pace(dateStr);
      } else {
        await logWorkIn7pace(dateStr);
      }
      rl.close();

      return false;
    }
  } catch (e) {
    console.error("Erreur lors de la vérification des commits Git :", e);
    return false;
  }
}

async function findMissingWorklogDays(
  maxDays: number = 300
): Promise<string[]> {
  let date = dayjs().subtract(1, "day");
  let minDate = date.subtract(maxDays, "day");
  const logs = await RestCrudService.restWorklogs(
    false,
    undefined,
    undefined,
    undefined,
    minDate.format("YYYY-MM-DD"),
    date.format("YYYY-MM-DD")
  );
  if (!logs.data || logs.data.length === 0) {
    console.log(
      "Aucun worklog trouvé pour la période demandée. Vérifiez que vous avez des worklogs dans 7pace."
    );
    return [];
  }

  const missingDays = [];
  for (let i = 1; i < maxDays; i++) {
    date = dayjs().subtract(i, "day");
    if (date.day() === 0 || date.day() === 6) {
      continue;
    }
    const currentDate = date.format("YYYY-MM-DD");
    const hasWorklog = logs.data.some(
      (log) => dayjs(log.timestamp).format("YYYY-MM-DD") === currentDate
    );
    if (!hasWorklog) {
      missingDays.push(currentDate);
    }
  }
  return missingDays;
}

async function checkPreviousWorkdays() {
  // Chercher le plus ancien jour ouvré sans worklog (sur 30 jours)
  const missingDays = await findMissingWorklogDays();
  if (!missingDays) {
    console.log(
      "Aucun jour ouvré sans worklog trouvé sur les 300 derniers jours."
    );
    return true;
  }
  for (const missingDay of missingDays) {
    await checkGitCommitForDate(missingDay);
  }
  return false;
}

async function main() {
  configureOpenApi(config.baseUrl, config.accessToken);
  await showActivityTypes();
  await checkPreviousWorkdays();
}

main();

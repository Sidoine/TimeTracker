/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from "../models/account";
import type { activityType } from "../models/activityType";
import type { sendApprovalWeekModel } from "../models/sendApprovalWeekModel";
import type { timeApproval } from "../models/timeApproval";
import type { user } from "../models/user";
import type { usersWithRolePost } from "../models/usersWithRolePost";
import type { userWithRole } from "../models/userWithRole";
import type { workLog } from "../models/workLog";
import type { workLogBatchCreationModel } from "../models/workLogBatchCreationModel";
import type { workLogCreationModel } from "../models/workLogCreationModel";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class RestCrudService {
  /**
   * Get information about yourself
   * Get information about yourself
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restMe(expand?: string): CancelablePromise<{
    data?: {
      user?: user;
      account?: account;
      defaultActivityType?: activityType;
      /**
       * Timezone shift in minutes relative to UTC (+ or -)
       */
      timezone?: number;
    };
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/me",
      query: {
        $expand: expand,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Get list of system users
   * Get list of system users
   *
   * @param count Number of items to take. Maximum value: 500
   *
   * @param skip Number of items to skip
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restUsers(
    count?: number,
    skip?: number,
    expand?: string
  ): CancelablePromise<{
    data?: Array<user>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/users",
      query: {
        $count: count,
        $skip: skip,
        $expand: expand,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Get list of Timetracker licensed users with roles / permissions
   * Get list of Timetracker licensed users with roles / permissions
   *
   * @param includeNoneRoles Include users with the "None" role / permissions
   * @param count Number of items to take. Maximum value: 500
   *
   * @param skip Number of items to skip
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restUsersRoles(
    includeNoneRoles?: boolean,
    count?: number,
    skip?: number,
    expand?: string
  ): CancelablePromise<{
    data?: Array<userWithRole>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/users/roles",
      query: {
        includeNoneRoles: includeNoneRoles,
        $count: count,
        $skip: skip,
        $expand: expand,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Set roles / permissions for the list of Timetracker licensed users
   * Set roles / permissions for the list of Timetracker licensed users
   *
   * @param requestBody JSON body to set multiple users roles / permissions <br /> <b>User</b> can be specified by id, vstsId or email (only one field at a time) <br /> <b>Role</b> can be specified by id or name (only one field at a time)
   * @returns any OK
   * @throws ApiError
   */
  public static restUsersRolesPost(
    requestBody: usersWithRolePost
  ): CancelablePromise<{
    data?: {
      /**
       * Number of successfully assigned users
       */
      succeeded?: number;
      /**
       * Number of failed assigments
       */
      failed?: number;
      failedEntries?: Array<{
        /**
         * Input User with Role entity which has failed a validation
         */
        entity?: userWithRole;
        error?: {
          /**
           * Validation error message why User with Role has failed a validation
           */
          message?: string;
        };
      }>;
    };
  }> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/rest/users/roles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Get information about requested user
   * Get information about requested user
   *
   * @param id User Id
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restUserId(
    id: string,
    expand?: string
  ): CancelablePromise<{
    data?: user;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/users/{id}",
      path: {
        id: id,
      },
      query: {
        $expand: expand,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        404: `Not found`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Get information about activity type state in system
   * Get information about activity type state in system
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restActivityTypes(): CancelablePromise<{
    data?: {
      enabled?: boolean;
      systemDefaultActivityTypeId?: string;
      activityTypes?: Array<activityType>;
    };
  }> {
    return __request(OpenAPI, {
      query: {
        "api-version": OpenAPI.VERSION,
      },
      method: "GET",
      url: "/api/rest/activityTypes",
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Gets information about requested activity type
   * Gets information about requested activity type
   *
   * @param id Activity type Id
   * @returns any OK
   * @throws ApiError
   */
  public static restActivityTypesId(id: string): CancelablePromise<{
    data?: activityType;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/activityTypes/{id}",
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        404: `Not found`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Gets list of worklogs for current user
   * Gets list of worklogs for current user
   *
   * @param includeEditable Computes for each worklog in a list if could be edited and deleted by current user
   * @param count Number of items to take. Maximum value: 500
   *
   * @param skip Number of items to skip
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @param fromTimestamp Return worklogs with timestamp greater than value
   * @param toTimestamp Return worklogs with timestamp less than value
   * @param fromCreatedTimestamp Return worklogs with created timestamp greater than value
   * @param toCreatedTimestamp Return worklogs with created timestamp less than value
   * @param workItemIds Filter worklogs by Work Item Ids. Comma separated array, no more than 100 at once
   * @returns any OK
   * @throws ApiError
   */
  public static restWorklogs(
    includeEditable: boolean,
    count?: number,
    skip?: number,
    expand?: string,
    fromTimestamp?: string,
    toTimestamp?: string,
    fromCreatedTimestamp?: string,
    toCreatedTimestamp?: string,
    workItemIds?: number
  ): CancelablePromise<{
    data?: Array<workLog>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/workLogs",
      path: {
        $includeEditable: includeEditable,
      },
      query: {
        $count: count,
        $skip: skip,
        $expand: expand,
        $fromTimestamp: fromTimestamp,
        $toTimestamp: toTimestamp,
        $fromCreatedTimestamp: fromCreatedTimestamp,
        $toCreatedTimestamp: toCreatedTimestamp,
        $workItemIds: workItemIds,
        "api-version": OpenAPI.VERSION,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Creates new worklog
   * Creates new worklog
   * @param requestBody JSON body to create worklog
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restWorkLogPost(
    requestBody: workLogCreationModel,
    expand?: string
  ): CancelablePromise<{
    data?: workLog;
  }> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/rest/workLogs",
      query: {
        $expand: expand,
        "api-version": OpenAPI.VERSION,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Get information about requested worklog
   * Get information about requested worklog
   *
   * @param id Worklog Id
   * @param includeEditable Computes for each worklog in a list if could be edited and deleted by current user
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restWorkLogGetById(
    id: string,
    includeEditable: boolean,
    expand?: string
  ): CancelablePromise<{
    data?: workLog;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/workLogs/{id}",
      path: {
        id: id,
        $includeEditable: includeEditable,
      },
      query: {
        $expand: expand,
        "api-version": OpenAPI.VERSION,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        404: `Not found`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Updates worklog
   * Updates worklog. If field is not specified in a body, old value will remain.
   * @param id Worklog Id
   * @param requestBody JSON body to update worklog.
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restWorkLogPatch(
    id: string,
    requestBody: workLogCreationModel,
    expand?: string
  ): CancelablePromise<{
    data?: workLog;
  }> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/rest/workLogs/{id}",
      path: {
        id: id,
      },
      query: {
        $expand: expand,
        "api-version": OpenAPI.VERSION,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Deletes worklog from system
   * Deletes worklog from system
   * @param id Worklog Id
   * @returns any OK
   * @throws ApiError
   */
  public static restWorklogDelete(id: string): CancelablePromise<{
    data?: any;
  }> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/rest/workLogs/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Gets list of worklogs for whole system
   * Gets list of worklogs for whole system. Requires user rights with roles "Product", "Budget" or "Administrator". [Learn more.](https://www.7pace.com/redir/user-management-overview)
   *
   * @param includeEditable Computes for each worklog in a list if could be edited and deleted by current user
   * @param count Number of items to take. Maximum value: 500
   *
   * @param skip Number of items to skip
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @param fromTimestamp Return worklogs with timestamp greater than value
   * @param toTimestamp Return worklogs with timestamp less than value
   * @param fromCreatedTimestamp Return worklogs with created timestamp greater than value
   * @param toCreatedTimestamp Return worklogs with created timestamp less than value
   * @param workItemIds Filter worklogs by Work Item Ids. Comma separated array, no more than 100 at once
   * @returns any OK
   * @throws ApiError
   */
  public static restWorklogsAll(
    includeEditable: boolean,
    count?: number,
    skip?: number,
    expand?: string,
    fromTimestamp?: string,
    toTimestamp?: string,
    fromCreatedTimestamp?: string,
    toCreatedTimestamp?: string,
    workItemIds?: number
  ): CancelablePromise<{
    data?: Array<workLog>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/workLogs/all",
      path: {
        $includeEditable: includeEditable,
      },
      query: {
        $count: count,
        $skip: skip,
        $expand: expand,
        $fromTimestamp: fromTimestamp,
        $toTimestamp: toTimestamp,
        $fromCreatedTimestamp: fromCreatedTimestamp,
        $toCreatedTimestamp: toCreatedTimestamp,
        $workItemIds: workItemIds,
        "api-version": OpenAPI.VERSION,
      },
      errors: {
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Creates batch of new worklogs
   * Creates batch of new worklogs
   * @param requestBody JSON body to create batch of worklogs
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @param validateOnly Validate worklog batch without creating any real worklog
   *
   * @returns workLog OK
   * @throws ApiError
   */
  public static restWorkLogsBatchPost(
    requestBody: workLogBatchCreationModel,
    expand?: string,
    validateOnly?: boolean
  ): CancelablePromise<Array<workLog>> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/rest/workLogs/batch",
      query: {
        $expand: expand,
        $validateOnly: validateOnly,
        "api-version": OpenAPI.VERSION,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        413: `Requested too large. Request can not contains more than 500 items.`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Send week for approval
   * Send week for approval. Requires "Team" user rights
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static restTimeApprovalWeekPost(
    requestBody?: sendApprovalWeekModel
  ): CancelablePromise<{
    data?: boolean;
  }> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/rest/timeApproval/week",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Revoke approval week
   * Revoke approval week. Requires "Team" user rights.
   * @param weekStart Start of a week to revoke
   * @returns any OK
   * @throws ApiError
   */
  public static restTimeApprovalWeekDelete(
    weekStart: string
  ): CancelablePromise<{
    data?: boolean;
  }> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/rest/timeApproval/week",
      query: {
        weekStart: weekStart,
        "api-version": OpenAPI.VERSION,
      },
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
  /**
   * Gets list of time approval for entire system
   * You can find all approval information from this endpoint. TimeApproval has an approval state of the specific weeks and has a date range of [weekStartDate - weekEndDate], while the Worklog record has one exact date (createdTimestamp). By matching "createdTimestamp" from the Worklogs for which you are looking to the specific TimeApproval weeks with the corresponding date range [weekStartDate - weekEndDate], you can find the approval state of these Worklogs. If there are no results, all available approval weeks in the system are in an "unsubmitted" state. Requires "Approval Manager" rights
   * @param count Number of items to take. Maximum value: 500
   *
   * @param skip Number of items to skip
   *
   * @param expand The expand parameters for model attributes. Possible options are { user.displayName }
   *
   * @param fromTimestamp Return time approval with week date that includes current week or greater than value
   *
   * @param toTimestamp Return time approval with week date that includes current week or less than value
   *
   * @returns any OK
   * @throws ApiError
   */
  public static restTimeApprovalAllGet(
    count?: number,
    skip?: number,
    expand?: string,
    fromTimestamp?: string,
    toTimestamp?: string
  ): CancelablePromise<{
    data?: Array<timeApproval>;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/rest/timeApproval/all",
      query: {
        $count: count,
        $skip: skip,
        $expand: expand,
        $fromTimestamp: fromTimestamp,
        $toTimestamp: toTimestamp,
        "api-version": OpenAPI.VERSION,
      },
      errors: {
        400: `Requested information is incomplete or malformed`,
        401: `Unauthorized`,
        403: `Access denied. Not enough rights`,
        409: `Data conflict`,
        422: `Validation error`,
        429: `Quota exceeded. (10 per second, 100 per minute)`,
        500: `Unexpected error`,
      },
    });
  }
}

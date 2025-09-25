"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCrudService = exports.userRole = exports.trackSettings = exports.track = exports.timeApproval = exports.pinStatus = exports.BudgetAssignmentType = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
exports.configureOpenApi = configureOpenApi;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var BudgetAssignmentType_1 = require("./models/BudgetAssignmentType");
Object.defineProperty(exports, "BudgetAssignmentType", { enumerable: true, get: function () { return BudgetAssignmentType_1.BudgetAssignmentType; } });
var pinStatus_1 = require("./models/pinStatus");
Object.defineProperty(exports, "pinStatus", { enumerable: true, get: function () { return pinStatus_1.pinStatus; } });
var timeApproval_1 = require("./models/timeApproval");
Object.defineProperty(exports, "timeApproval", { enumerable: true, get: function () { return timeApproval_1.timeApproval; } });
var track_1 = require("./models/track");
Object.defineProperty(exports, "track", { enumerable: true, get: function () { return track_1.track; } });
var trackSettings_1 = require("./models/trackSettings");
Object.defineProperty(exports, "trackSettings", { enumerable: true, get: function () { return trackSettings_1.trackSettings; } });
var userRole_1 = require("./models/userRole");
Object.defineProperty(exports, "userRole", { enumerable: true, get: function () { return userRole_1.userRole; } });
var RestCrudService_1 = require("./services/RestCrudService");
Object.defineProperty(exports, "RestCrudService", { enumerable: true, get: function () { return RestCrudService_1.RestCrudService; } });
const OpenAPI_2 = require("./core/OpenAPI");
function configureOpenApi(baseUrl, token) {
    OpenAPI_2.OpenAPI.BASE = baseUrl;
    OpenAPI_2.OpenAPI.TOKEN = token;
}

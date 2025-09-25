/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Each response with "trackingStateModel" contains this object where status is kept. In case of "Warning" or "Error" message is set to "responseMessage". This message should be displayed to the user
 */
export type trackSettings = {
    isTrackingStartAllowed?: boolean;
    responseState?: trackSettings.responseState;
    responseMessage?: string;
};
export namespace trackSettings {
    export enum responseState {
        OK = 'OK',
        WARNING = 'Warning',
        ERROR = 'Error',
        AUTH_ERROR = 'AuthError',
    }
}


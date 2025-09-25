/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type error = {
    /**
     * Http status code for response. Same as actual status code of request result
     */
    status?: number;
    /**
     * Timetracker internal code of error. See https://www.7pace.com/redir/error-codes for references
     */
    errorCode?: string;
    /**
     * Human readable description of error
     */
    errorDescription?: string;
    /**
     * List of validation fields or list of inner errors
     */
    fields?: Array<{
        name?: string;
        value?: string;
    }>;
};


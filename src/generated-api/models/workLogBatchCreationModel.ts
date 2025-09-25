/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * JSON body to create batch of worklogs
 */
export type workLogBatchCreationModel = Array<{
    /**
     * Start date and time of worklog in your local timezone. If not specified - DateTime.Now is used
     */
    timeStamp?: string;
    /**
     * Duration of worklog in seconds (3600 - one hour)
     */
    length?: number;
    /**
     * Billable duration of worklog in seconds (3600 - one hour). Only use it when billable lenght should be different from actual
     */
    billableLength?: number;
    /**
     * Work Item ID upon time was tracked. Must be set if "comment" null
     */
    workItemId?: string;
    /**
     * Comment for worklog. Must be set if "workItemId" null
     */
    comment?: string;
    /**
     * Id of user to whom worklog is created. If not specified - it will be created to current user
     */
    userId?: string;
    /**
     * Id of activity type to set to worklog. If not specified - default activity type for user of worklog will be used
     */
    activityTypeId?: string;
}>;

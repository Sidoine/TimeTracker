/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { activityType } from './activityType';
import type { user } from './user';
export type workLog = {
    id?: string;
    /**
     * Start date and time of worklog in your local timezone
     */
    timestamp?: string;
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
    workItemId?: number;
    /**
     * Comment for worklog. Must be set if "workItemId" null
     */
    comment?: string;
    user?: user;
    addedByUser?: user;
    editedByUser?: user;
    /**
     * Date and time local to user when worklog was first created
     */
    createdTimestamp?: string;
    /**
     * Date and time local to user when worklog was last edited
     */
    editedTimestamp?: string;
    activityType?: activityType;
    flags?: {
        isTracked?: boolean;
        IsManuallyEntered?: boolean;
        IsChanged?: boolean;
        IsTrackedExtended?: boolean;
        IsImported?: boolean;
        IsFromApi?: boolean;
        IsBillable?: boolean;
    };
    /**
     * Shows if WorkLog could be edited. Null if not calculated
     */
    isCanEdit?: boolean;
    /**
     * Shows if WorkLog could be deleted. Null if not calculated
     */
    isCanDelete?: boolean;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingActivityType } from './ReportingActivityType';
import type { ReportingBudget } from './ReportingBudget';
import type { ReportingDate } from './ReportingDate';
import type { ReportingUser } from './ReportingUser';
/**
 * Reporting Worklog without details about Work Item
 */
export type ReportingWorkLog = {
    /**
     * Unique ID of the WorkLog, never changes
     */
    Id?: string;
    UserId?: string;
    AddedByUserId?: string;
    BudgetId?: string;
    ActivityTypeId?: string;
    WorkItemId?: number;
    Timestamp?: string;
    /**
     * Length of the track in seconds
     */
    PeriodLength?: number;
    Comment?: string;
    ActivityType?: ReportingActivityType;
    EditedTimestamp?: string;
    CreatedTimestamp?: string;
    IsTracked?: boolean;
    IsManuallyEntered?: boolean;
    IsChanged?: boolean;
    IsTrackedExtended?: boolean;
    IsImported?: boolean;
    IsFromApi?: boolean;
    IsBillable?: boolean;
    /**
     * Billable length of the track. Can be not the same as PeriodLength
     */
    BillablePeriodLength?: number | null;
    User?: ReportingUser;
    AddedByUser?: ReportingUser;
    EditedByUser?: ReportingUser;
    Budget?: ReportingBudget;
    WorklogDate?: ReportingDate;
};


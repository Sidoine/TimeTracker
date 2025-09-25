/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from './user';
export type timeApproval = {
    id?: string;
    /**
     * The week start date in your local timezone
     */
    weekStartDate?: string;
    /**
     * The week end date in your local timezone
     */
    weekEndDate?: string;
    user?: user;
    approvalState?: timeApproval.approvalState;
    /**
     * Date of the latest time approval modification
     */
    modificationTimestamp?: string;
    /**
     * Date of the week submission for approval
     */
    submittedTimestamp?: string;
    /**
     * Date of the week approval
     */
    approvalTimestamp?: string;
    assignedManager?: user;
    approvedByManager?: user;
};
export namespace timeApproval {
    export enum approvalState {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_99' = 99,
    }
}


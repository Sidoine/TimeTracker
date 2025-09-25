/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemDefault } from './ReportingWorkItemDefault';
import type { ReportingWorkItemParentDefault } from './ReportingWorkItemParentDefault';
import type { ReportingWorkItemRootDefault } from './ReportingWorkItemRootDefault';
export type ReportingWorkItemFlat = (ReportingWorkItemDefault & {
    TrackedItself?: number;
    TrackedItselfBillable?: number;
    Parent?: ReportingWorkItemParentDefault;
    Root?: ReportingWorkItemRootDefault;
});


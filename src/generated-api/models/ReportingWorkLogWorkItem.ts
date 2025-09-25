/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemDefault } from './ReportingWorkItemDefault';
import type { ReportingWorkItemParentDefault } from './ReportingWorkItemParentDefault';
import type { ReportingWorkItemRootDefault } from './ReportingWorkItemRootDefault';
import type { ReportingWorkLog } from './ReportingWorkLog';
export type ReportingWorkLogWorkItem = (ReportingWorkLog & {
    WorkItem?: ReportingWorkItemDefault;
    Parent?: ReportingWorkItemParentDefault;
    Root?: ReportingWorkItemRootDefault;
});


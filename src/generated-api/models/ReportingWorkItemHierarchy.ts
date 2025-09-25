/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemDefault } from './ReportingWorkItemDefault';
import type { ReportingWorkItemParentDefault } from './ReportingWorkItemParentDefault';
import type { ReportingWorkItemRootDefault } from './ReportingWorkItemRootDefault';
export type ReportingWorkItemHierarchy = (ReportingWorkItemDefault & {
    TrackedItself?: number;
    TrackedItselfBillable?: number;
    Parent?: ReportingWorkItemParentDefault;
    Root?: ReportingWorkItemRootDefault;
    TrackedTotal?: number;
    HasChildren?: boolean;
    /**
     * Optional field allows you to make compute Roll-Up value of any double or integer field of work items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    RollupValue1?: number;
    /**
     * Optional field allows you to make compute Roll-Up value of any double or integer field of work items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    RollupValue2?: number;
    /**
     * Optional field allows you to make compute Roll-Up value of any double or integer field of work items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    RollupValue3?: number;
    /**
     * Optional field allows you to make compute Roll-Up value of any double or integer field of work items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    RollupValue4?: number;
    /**
     * Optional field allows you to make compute Roll-Up value of any double or integer field of work items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    RollupValue5?: number;
});


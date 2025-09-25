/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetAssignmentType } from './BudgetAssignmentType';
import type { ReportingBudget } from './ReportingBudget';
export type ReportingWorkItem = {
    System_Id?: number;
    Budget?: ReportingBudget;
    BudgetAssignmentType?: BudgetAssignmentType;
    System_AreaId?: number;
    System_AreaPath?: string;
    System_CreatedDate?: string;
    System_AssignedTo?: string;
    System_CreatedBy?: string;
    System_IterationId?: number;
    System_IterationPath?: string;
    System_NodeName?: string;
    System_Reason?: string;
    System_RevisedDate?: string;
    System_State?: string;
    System_TeamProject?: string;
    System_Title?: string;
    System_WorkItemType?: string;
    Microsoft_VSTS_Build_FoundIn?: string;
    Microsoft_VSTS_Build_IntegrationBuild?: string;
    Microsoft_VSTS_CMMI_Blocked?: string;
    Microsoft_VSTS_CMMI_Committed?: string;
    Microsoft_VSTS_CMMI_Escalate?: string;
    Microsoft_VSTS_CMMI_FoundInEnvironment?: string;
    Microsoft_VSTS_CMMI_HowFound?: string;
    Microsoft_VSTS_CMMI_MeetingType?: string;
    Microsoft_VSTS_CMMI_Probability?: string;
    Microsoft_VSTS_CMMI_RequirementType?: string;
    Microsoft_VSTS_CMMI_RequiresReview?: string;
    Microsoft_VSTS_CMMI_RequiresTest?: string;
    Microsoft_VSTS_CMMI_RootCause?: string;
    Microsoft_VSTS_CMMI_TargetResolveDate?: string;
    Microsoft_VSTS_CMMI_TaskType?: string;
    Microsoft_VSTS_CMMI_UserAcceptanceTest?: string;
    Microsoft_VSTS_Common_ActivatedBy?: string;
    Microsoft_VSTS_Common_ActivatedDate?: string;
    Microsoft_VSTS_Common_Activity?: string;
    Microsoft_VSTS_Common_BacklogPriority?: number;
    Microsoft_VSTS_Common_BusinessValue?: string;
    Microsoft_VSTS_Common_ClosedBy?: string;
    Microsoft_VSTS_Common_ClosedDate?: string;
    Microsoft_VSTS_Common_Discipline?: string;
    Microsoft_VSTS_Common_Issue?: string;
    Microsoft_VSTS_Common_Priority?: string;
    Microsoft_VSTS_Common_Rating?: string;
    Microsoft_VSTS_Common_ResolvedBy?: string;
    Microsoft_VSTS_Common_ResolvedDate?: string;
    Microsoft_VSTS_Common_ResolvedReason?: string;
    Microsoft_VSTS_Common_ReviewedBy?: string;
    Microsoft_VSTS_Common_Risk?: string;
    Microsoft_VSTS_Common_Severity?: string;
    Microsoft_VSTS_Common_StackRank?: string;
    Microsoft_VSTS_Common_StateChangeDate?: string;
    Microsoft_VSTS_Common_TimeCriticality?: string;
    Microsoft_VSTS_Common_Triage?: string;
    Microsoft_VSTS_Common_ValueArea?: string;
    Microsoft_VSTS_Feedback_ApplicationType?: string;
    Microsoft_VSTS_Scheduling_CompletedWork?: number;
    Microsoft_VSTS_Scheduling_DueDate?: string;
    Microsoft_VSTS_Scheduling_Effort?: string;
    Microsoft_VSTS_Scheduling_FinishDate?: string;
    Microsoft_VSTS_Scheduling_OriginalEstimate?: string;
    Microsoft_VSTS_Scheduling_RemainingWork?: number;
    Microsoft_VSTS_Scheduling_Size?: string;
    Microsoft_VSTS_Scheduling_StartDate?: string;
    Microsoft_VSTS_Scheduling_StoryPoints?: string;
    Microsoft_VSTS_Scheduling_TargetDate?: string;
    HierarchyPath?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomStringField1?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomStringField2?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomStringField3?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomStringField4?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomStringField5?: string;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomNumericField1?: number;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomNumericField2?: number;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomNumericField3?: number;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomNumericField4?: number;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomNumericField5?: number;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomBooleanField1?: boolean;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomBooleanField2?: boolean;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomBooleanField3?: boolean;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomBooleanField4?: boolean;
    /**
     * Optional field allows you customize data returned by API and include your own custom fields from Work Items, see details here [Custom And Rollup Fields](https://www.7pace.com/redir/odata-customfields)
     */
    CustomBooleanField5?: boolean;
};


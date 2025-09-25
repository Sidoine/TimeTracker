/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Presents budget to what budget this worklog or work item is assigned. Assignment has several options. When value is DirectlyAssigned, InheritedFromParent or InheritedFromIteration then BudgetId and Budget fieilds will have value. See details about Budgets and how it is computed here [Budgets](https://www.7pace.com/redir/odata-budgets)
 */
export enum BudgetAssignmentType {
    NOT_COMPUTED = 'NotComputed',
    NO_BUDGET = 'NoBudget',
    DIRECTLY_ASSIGNED = 'DirectlyAssigned',
    INHERITED_FROM_PARENT = 'InheritedFromParent',
    INHERITED_FROM_ITERATION = 'InheritedFromIteration',
}

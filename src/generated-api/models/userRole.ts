/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents Timetracker User role / permissions</br> Role ids:
 * - -1 - None
 * - 0 - Default
 * - 1 - Team
 * - 2 - Product
 * - 3 - Budget
 * - 4 - Administrator
 *
 */
export type userRole = {
    id?: userRole.id;
    name?: userRole.name;
};
export namespace userRole {
    export enum id {
        '_-1' = -1,
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
    export enum name {
        NONE = 'None',
        DEFAULT = 'Default',
        TEAM = 'Team',
        PRODUCT = 'Product',
        BUDGET = 'Budget',
        ADMINISTRATOR = 'Administrator',
    }
}


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userWithRolePost } from './userWithRolePost';
export type usersWithRolePost = {
    /**
     * Enables or disables processing of all posible assigments and skipping entries with errors
     */
    skipErrors?: boolean;
    users?: Array<userWithRolePost>;
};


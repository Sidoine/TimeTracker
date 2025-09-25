/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userRole } from './userRole';
export type userWithRolePost = {
    id?: string;
    /**
     * DevOps Server/Services global user ID
     */
    vstsId?: string;
    email?: string;
    role?: userRole;
};


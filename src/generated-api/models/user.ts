/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type user = {
    id?: string;
    name?: string;
    uniqueName?: string;
    displayName?: string;
    email?: string;
    /**
     * DevOps Server/Services global user ID
     */
    vstsId?: string;
    /**
     * DevOps Server collection user ID (for DevOps Services equals vstsId)
     */
    vstsCollectionId?: string;
    /**
     * DevOps Server user account ID (for DevOps Services could be equal to vstsId)
     */
    vstsCollectionId2?: string;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { settings } from './settings';
import type { track } from './track';
import type { trackSettings } from './trackSettings';
export type trackingStateModel = {
    track?: track;
    trackSettings?: trackSettings;
    settings?: settings;
    /**
     * If timestamp of new state is older then current, new state should be rejected
     */
    timestamp?: number;
};


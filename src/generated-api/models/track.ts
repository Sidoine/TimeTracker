/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { activityCheckState } from './activityCheckState';
import type { workItem } from './workItem';
export type track = {
    /**
     * nullable
     */
    tfsId?: number;
    remark?: string;
    activityTypeId?: string;
    workItem?: workItem;
    /**
     * state
     * * `tracking` (0) - currently tracking
     * * `idle` (1) - idle
     * * `idleCheck` (2) - checking if user is idle right now (not implemented)
     * * `activityCheck` (3) - checking if user still tracking
     * * `clientInputRequired` (4) - track was stopped by the server and user should react to it (use with "stoppedTrackType")
     *
     */
    trackingState?: track.trackingState;
    stoppedTrackType?: track.stoppedTrackType;
    activityCheck?: activityCheckState;
    /**
     * (nullable) Length of current track in seconds
     *
     */
    currentTrackLength?: number;
    /**
     * nullable
     */
    totalMeTodayLength?: number;
    /**
     * nullable
     */
    totalMeLength?: number;
    totalTeamLength?: number;
    /**
     * nullable
     */
    trackAdjustmentLength?: number;
    /**
     * nullable
     */
    currentTrackStartedDateTime?: string;
    trackStatusChangeDate?: string;
    /**
     * nullable
     */
    trackTimeZone?: number;
    workLogId?: string;
};
export namespace track {
    /**
     * state
     * * `tracking` (0) - currently tracking
     * * `idle` (1) - idle
     * * `idleCheck` (2) - checking if user is idle right now (not implemented)
     * * `activityCheck` (3) - checking if user still tracking
     * * `clientInputRequired` (4) - track was stopped by the server and user should react to it (use with "stoppedTrackType")
     *
     */
    export enum trackingState {
        TRACKING = 'tracking',
        IDLE = 'idle',
        IDLE_CHECK = 'idleCheck',
        ACTIVITY_CHECK = 'activityCheck',
        CLIENT_INPUT_REQUIRED = 'clientInputRequired',
    }
    export enum stoppedTrackType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }
}


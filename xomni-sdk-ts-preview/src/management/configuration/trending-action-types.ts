/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.TrendingActionTypes {
    export class TrendingActionTypesClient extends BaseClient {
        private uri: string = "/management/configuration/tenantactiontypes";

        updateTrendingActionTypeValues(actionTypes: TrendingActionTypeContainer[], success: (result: TrendingActionTypeContainer[]) => void, error: (error: any) => void) {
            this.httpProvider.put(this.uri, actionTypes, success, error);
        }
    }

    export interface TrendingActionTypeContainer {
        Id: number;
        Description: string;
        ImpactValue: number;
    }
}
/// <reference path="../../models/management/configuration/trending-action-type-value.ts" />
/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.TrendingActionTypes {
    export class TrendingActionTypesClient extends BaseClient {
        private uri: string = "/management/configuration/tenantactiontypes";

        updateTrendingActionTypeValues(actionTypes: Models.Management.Configuration.TrendingActionTypeValue[], success: (result: Models.Management.Configuration.TrendingActionTypeValue[]) => void, error: (error: any) => void) {
            this.httpProvider.put(this.uri, actionTypes, success, error);
        }

        getTrendingActionTypes(success: (result: Models.Management.Configuration.TrendingActionTypeValue[]) => void, error: (error: any) => void) {
            this.httpProvider.get(this.uri, success, error);
        }
    }
}
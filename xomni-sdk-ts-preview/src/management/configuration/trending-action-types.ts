/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.TrendingActionTypes {
    export class TrendingActionTypesClient extends BaseClient {
        private uri: string = "/management/configuration/trendingactiontypes";

        put(actionTypes: Models.Management.Configuration.TrendingActionTypeValue[], success: (result: Models.Management.Configuration.TrendingActionTypeValue[]) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.put(this.uri, actionTypes, success, error);
        }

        get(success: (result: Models.Management.Configuration.TrendingActionTypeValue[]) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, success, error);
        }
    }
}
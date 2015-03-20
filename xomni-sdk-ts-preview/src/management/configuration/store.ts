/// <reference path="../../models/management/configuration/store.ts" />
/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.Store {
    export class StoreClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/configuration/store/";

        get(storeId: number, success: (result: Models.Management.Configuration.Store) => void, error: (error: Models.ExceptionResult) => void) {
            this.ValidateStoreId(storeId);
            var uri: string = this.PrepareSingleOperationUrl(storeId);
            this.httpProvider.get(uri, success, error);
        }

        PrepareSingleOperationUrl(storeId: number): string {
            return this.singleOperationBaseUrl + storeId;
        }

        ValidateStoreId(storeId: number): void {
            if (storeId != 0 && !storeId) {
                throw new Error("storeId could not be null or empty.");
            }
            if (storeId < 0) {
                throw new Error("storeId could not be less than 0.");
            }
        }
    }
}
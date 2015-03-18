/// <reference path="../../models/paginatedcontainer.ts" />
/// <reference path="../../models/management/configuration/store.ts" />
/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.Store {
    export class StoreClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/configuration/store/";
        private listOperationBaseUrl: string = "/management/configuration/stores"

        get(storeId: number, success: (result: Models.Management.Configuration.Store) => void, error: (error: Models.ExceptionResult) => void) {
            this.ValidateStoreId(storeId);
            var uri: string = this.PrepareSingleOperationUrl(storeId);
            this.httpProvider.get(uri, success, error);
        }

        delete(storeId: number , error: (error: Models.ExceptionResult) => void) {
            this.ValidateStoreId(storeId);
            var uri = this.PrepareSingleOperationUrl(storeId);
            this.httpProvider.delete(uri, success=> { }, error);
        }

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Configuration.Store>) => void, error: (error: Models.ExceptionResult) => void) {
            this.ValidateSkipTake(skip, take);
            var uri = this.PrepareListOperationUrl(skip, take);
            this.httpProvider.get(uri, success, error);
        }

        PrepareSingleOperationUrl(storeId: number): string {
            return this.singleOperationBaseUrl + storeId;
        }

        PrepareListOperationUrl(skip: number, take: number): string {
            return this.listOperationBaseUrl + "?skip=" + skip + "&take=" + take;
        }

        ValidateStoreId(storeId: number): void {
            if (storeId != 0 && !storeId) {
                throw new Error("storeId could not be null or empty.");
            }
            if (storeId < 0) {
                throw new Error("storeId could not be less than 0.");
            }
        }

        ValidateSkipTake(skip: number, take: number): void {
            if (skip != 0 && !skip) {
                throw new Error("skip could not be null or empty.");
            }
            if (skip < 0) {
                throw new Error("skip could not be less than 0.");
            }
            if (take != 0 && !take) {
                throw new Error("take could not be null or empty.");
            }
            if (take < 1) {
                throw new Error("take could not be less than 1.");
            }
        }
    }
}
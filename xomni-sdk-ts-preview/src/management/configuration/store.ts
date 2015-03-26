/// <reference path="../../models/paginatedcontainer.ts" />
/// <reference path="../../models/management/configuration/store.ts" />
/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.Store {
    export class StoreClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/configuration/store/";
        private listOperationBaseUrl: string = "/management/configuration/stores"

        get(storeId: number, success: (result: Models.Management.Configuration.Store) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("storeId", storeId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(this.singleOperationBaseUrl, storeId.toString());
            this.httpProvider.get(uri, success, error);
        }

        delete(storeId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("storeId", storeId, 0);
            var uri = Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(this.singleOperationBaseUrl, storeId.toString());
            this.httpProvider.delete(uri, success, error);
        }

        post(store: Models.Management.Configuration.Store, success: (result: Models.Management.Configuration.Store) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("name", store.Name);
            this.httpProvider.post(this.singleOperationBaseUrl, store, success, error);
        }

        put(store: Models.Management.Configuration.Store, success: (result: Models.Management.Configuration.Store) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("id", store.Id, 0);
            Xomni.Utils.Validator.isDefined("name", store.Name);
            this.httpProvider.put(this.singleOperationBaseUrl, store, success, error);
        }

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Configuration.Store>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareListOperationUrl(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }
    }
}
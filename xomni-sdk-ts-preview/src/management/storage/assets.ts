/// <reference path="../../xomni.ts" />
module Xomni.Management.Storage.Assets{
    export class AssetClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/storage/asset";
        private listOperationBaseUrl: string = "/management/storage/assets";

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Storage.TenantAsset>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }
    }
}

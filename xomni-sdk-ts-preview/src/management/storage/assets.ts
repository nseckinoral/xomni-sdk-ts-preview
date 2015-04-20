/// <reference path="../../xomni.ts" />
module Xomni.Management.Storage.Assets {
    export class AssetClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/storage/asset";
        private listOperationBaseUrl: string = "/management/storage/assets";

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Storage.TenantAsset>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        get(assetId: number, success: (result: Models.Management.Storage.TenantAssetDetail) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("assetId", assetId, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.singleOperationBaseUrl, new Dictionary<string, string>([
                { key: "id", value: assetId.toString() }
            ]));
            this.httpProvider.get(uri, ((r: any) => {
                success(<Models.Management.Storage.TenantAssetDetail> {
                    Id: r.Id,
                    FileName: r.FileName,
                    MimeType: r.MimeType,
                    FileBody: this.StringToUint8Array(atob(r.FileBody))
                });
            }), error);
        }

        delete(assetId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("assetId", assetId, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.singleOperationBaseUrl, new Dictionary<string, string>([
                { key: "id", value: assetId.toString() }
            ]));
            this.httpProvider.delete(uri, success, error);
        }

        post(tenantAssetDetail: Models.Management.Storage.TenantAssetDetail, success: (result: Models.Management.Storage.TenantAsset) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("tenantAssetDetail", tenantAssetDetail);
            Xomni.Utils.Validator.isDefined("FileName", tenantAssetDetail.FileName);
            Xomni.Utils.Validator.isDefined("MimeType", tenantAssetDetail.MimeType);
            Xomni.Utils.Validator.isDefined("FileBody", tenantAssetDetail.FileBody);
            Xomni.Utils.Validator.isGreaterThanOrEqual("FileName length", tenantAssetDetail.FileName.length, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("Mimetype length", tenantAssetDetail.MimeType.length, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("File body", tenantAssetDetail.FileBody.length, 1);
            this.httpProvider.post(this.singleOperationBaseUrl, {
                FileName: tenantAssetDetail.FileName,
                FileBody: btoa(this.Uint8ArrayToString(tenantAssetDetail.FileBody)),
                MimeType: tenantAssetDetail.MimeType
            }, success, error);
        }

        put(tenantAssetDetail: Models.Management.Storage.TenantAssetDetail, success: (result: Models.Management.Storage.TenantAsset) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("tenantAssetDetail", tenantAssetDetail);
            Xomni.Utils.Validator.isDefined("Id", tenantAssetDetail.Id);
            Xomni.Utils.Validator.isDefined("FileName", tenantAssetDetail.FileName);
            Xomni.Utils.Validator.isDefined("MimeType", tenantAssetDetail.MimeType);
            Xomni.Utils.Validator.isDefined("FileBody", tenantAssetDetail.FileBody);
            Xomni.Utils.Validator.isGreaterThanOrEqual("Id", tenantAssetDetail.Id, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("FileName length", tenantAssetDetail.FileName.length, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("Mimetype length", tenantAssetDetail.MimeType.length, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("File body", tenantAssetDetail.FileBody.length, 1);
            this.httpProvider.put(this.singleOperationBaseUrl, {
                Id: tenantAssetDetail.Id,
                FileName: tenantAssetDetail.FileName,
                FileBody: btoa(this.Uint8ArrayToString(tenantAssetDetail.FileBody)),
                MimeType: tenantAssetDetail.MimeType
            }, success, error);
        }


        private StringToUint8Array(str: string): ArrayBuffer {
            var bufView = new Uint8Array(str.length);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return bufView;
        }

        private Uint8ArrayToString(arr: Uint8Array): string {
            var result = '';
            for (var i = 0; i < arr.length; i++) {
                result += String.fromCharCode(arr[i]);
            }
            return result;
        }
    }
}

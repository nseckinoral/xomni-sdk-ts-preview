/// <reference path="../../xomni.ts" />
module Xomni.Management.Security.License {
    export class LicenseClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/security/license/";

        get(licenseId: number, success: (result: Models.Management.Security.License) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenseId", licenseId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.singleOperationBaseUrl, licenseId.toString());
            this.httpProvider.get(uri, success, error);
        }
    }
}
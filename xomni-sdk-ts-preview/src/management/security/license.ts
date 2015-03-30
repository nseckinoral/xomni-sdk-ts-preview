/// <reference path="../../xomni.ts" />
module Xomni.Management.Security.License {
    export class LicenseClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/security/license/";
        private listOperationBaseUrl: string = "/management/security/licenses";

        get(licenseId: number, success: (result: Models.Management.Security.License) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenseId", licenseId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.singleOperationBaseUrl, licenseId.toString());
            this.httpProvider.get(uri, success, error);
        }

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Security.License>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        post(license: Models.Management.Security.License, success: (result: Models.Management.Security.License) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("license", license);
            Xomni.Utils.Validator.isDefined("username", license.Username);
            Xomni.Utils.Validator.isDefined("password", license.Password);
            this.httpProvider.post(this.singleOperationBaseUrl, license, success, error);
        }
    }
}
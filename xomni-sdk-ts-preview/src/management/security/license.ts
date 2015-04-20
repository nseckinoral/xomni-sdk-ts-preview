/// <reference path="../../xomni.ts" />
module Xomni.Management.Security.License {
    export class LicenseClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/security/license/";
        private listOperationBaseUrl: string = "/management/security/licenses";
        private auditBaseUrl: string = "/management/security/licenses/audits";

        get(licenseId: number, success: (result: Models.Management.Security.License) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenseId", licenseId, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.singleOperationBaseUrl, licenseId.toString());
            this.httpProvider.get(uri, success, error);
        }

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Security.License>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.listOperationBaseUrl, new Dictionary<string, string>([
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

        put(license: Models.Management.Security.License, success: (result: Models.Management.Security.License) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("license", license);
            Xomni.Utils.Validator.isGreaterThanOrEqual("id", license.Id,1);
            Xomni.Utils.Validator.isDefined("username", license.Username);
            Xomni.Utils.Validator.isDefined("password", license.Password);
            this.httpProvider.put(this.singleOperationBaseUrl, license, success, error);
        }

        delete(licenseId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenseId", licenseId, 1);
            this.httpProvider.delete(this.singleOperationBaseUrl, success, error);
        }

        getAuditLogs(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Security.LicenseAuditLogs>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.auditBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        getUnassignedLicenses(onlyUnassignedUsers: boolean, success: (result: Models.PaginatedContainer<Models.Management.Security.License>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("onlyUnassignedUsers", onlyUnassignedUsers);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "onlyUnassignedUsers", value: String(onlyUnassignedUsers) },
            ]));
            this.httpProvider.get(uri, success, error);
        }
    }
}
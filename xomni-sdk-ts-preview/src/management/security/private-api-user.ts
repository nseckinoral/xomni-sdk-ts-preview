﻿/// <reference path="../../xomni.ts" />
module Xomni.Management.Security.PrivateApiUser {
    export class PrivateApiUserClient extends BaseClient {
        private listOperationBaseUrl: string = "/management/security/privateapiusers";
        private singleOperationBaseUrl: string = "/management/security/privateapiuser/";

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Security.ApiUser>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareListOperationUrl(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        get(privateApiUserId: number, success: (result: Models.Management.Security.ApiUser) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("privateApiUserId", privateApiUserId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(this.singleOperationBaseUrl, privateApiUserId.toString());
            this.httpProvider.get(uri, success, error);
        }
    }
} 
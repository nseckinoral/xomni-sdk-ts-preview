/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.ImageSizeProfile {
    export class ImageSizeProfileClient extends BaseClient {
        private listOperationBaseUrl: string = "/management/configuration/imagesizeprofiles"

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Configuration.ImageSizeProfile>) => void, error: (error: Models.ExceptionResult) => void) {
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
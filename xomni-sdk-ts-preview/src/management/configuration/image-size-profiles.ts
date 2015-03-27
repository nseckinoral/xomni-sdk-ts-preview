/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.ImageSizeProfile {
    export class ImageSizeProfileClient extends BaseClient {
        private singleOperationBaseUrl: string = "/management/configuration/imagesizeprofile";
        private listOperationBaseUrl: string = "/management/configuration/imagesizeprofiles"

        getList(skip: number, take: number, success: (result: Models.PaginatedContainer<Models.Management.Configuration.ImageSizeProfile>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.listOperationBaseUrl, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        get(imageSizeProfileId: number, success: (result: Models.Management.Configuration.ImageSizeProfile) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("imageSizeProfileId", imageSizeProfileId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.singleOperationBaseUrl, new Dictionary<string, string>([
                { key: "id", value: imageSizeProfileId.toString() }
            ]));
            this.httpProvider.get(uri, success, error);
        }

        post(imageSizeProfile: Models.Management.Configuration.ImageSizeProfile, success: (result: Models.Management.Configuration.ImageSizeProfile) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("imageSizeProfile", imageSizeProfile);
            Xomni.Utils.Validator.isGreaterThanOrEqual("height", imageSizeProfile.Height, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("width", imageSizeProfile.Width, 1);
            this.httpProvider.post(this.singleOperationBaseUrl, imageSizeProfile, success, error);
        }

        delete(imageSizeProfileId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("imageSizeProfileId", imageSizeProfileId, 0);
            var uri: string = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.singleOperationBaseUrl, new Dictionary<string, string>([
                { key: "id", value: imageSizeProfileId.toString() }
            ]));
            this.httpProvider.delete(uri, success, error);
        }
    }
} 
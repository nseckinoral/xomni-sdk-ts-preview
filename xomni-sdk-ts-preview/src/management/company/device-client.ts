/// <reference path="../../xomni.ts" />
module Xomni.Management.Company.Device {
    export class DeviceClient extends BaseClient {
        private baseUri = "/management/company/devices";

        delete(deviceId: string, relatedLicenceId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            Xomni.Utils.Validator.isGreaterThanOrEqual("relatedLicenceId", relatedLicenceId, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.baseUri, deviceId);
            uri += Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(uri, new Dictionary<string, string>([
                { key: "relatedLicenceId", value: relatedLicenceId.toString() }
            ]));

            this.httpProvider.delete(uri, success, error);
        }
    }
}
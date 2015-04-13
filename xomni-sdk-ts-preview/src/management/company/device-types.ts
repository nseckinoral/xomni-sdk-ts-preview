/// <reference path="../../xomni.ts" />
module Xomni.Management.Company.DeviceTypes {
    export class DeviceTypesClient extends BaseClient {
        private baseUri: string = "/management/company/devicetypes";

        post(deviceType: Models.Management.Company.DeviceType, success: (result: Models.Management.Company.DeviceType) => void, error: (error: Models.ExceptionResult) => void) {
            this.validateDeviceType(deviceType);

            this.httpProvider.post(this.baseUri, deviceType, success, error);
        }

        put(deviceType: Models.Management.Company.DeviceType, success: (result: Models.Management.Company.DeviceType) => void, error: (error: Models.ExceptionResult) => void) {
            this.validateDeviceType(deviceType);
            Xomni.Utils.Validator.isGreaterThanOrEqual("id", deviceType.Id, 1);

            this.httpProvider.put(this.baseUri, deviceType, success, error);
        }

        delete(deviceTypeId: number, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("deviceTypeId", deviceTypeId, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.baseUri, deviceTypeId.toString());

            this.httpProvider.delete(uri, success, error);
        }

        get(deviceTypeId: number, success: (result: Models.Management.Company.DeviceType) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("deviceTypeId", deviceTypeId, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.baseUri, deviceTypeId.toString());

            this.httpProvider.get(uri, success, error);
        }

        getList(skip: number, take: number, succes: (result: Models.PaginatedContainer<Models.Management.Company.DeviceType>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(this.baseUri, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));

            this.httpProvider.get(uri, succes, error);
        }

        private validateDeviceType(deviceType: Models.Management.Company.DeviceType) {
            Xomni.Utils.Validator.isDefined("deviceType", deviceType);
            Xomni.Utils.Validator.isDefined("description", deviceType.Description);
            Xomni.Utils.Validator.isLessThan(deviceType.Description.length, "description length", 150);
        }

    }
} 
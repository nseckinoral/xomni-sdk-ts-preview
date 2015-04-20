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

        getList(skip: number, take: number, success: (success: Models.PaginatedContainer<Models.Management.Company.Device>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("skip", skip, 0);
            Xomni.Utils.Validator.isGreaterThanOrEqual("take", take, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(this.baseUri, new Dictionary<string, string>([
                { key: "skip", value: skip.toString() },
                { key: "take", value: take.toString() }
            ]));

            this.httpProvider.get(uri, (deviceListJson: any) => {
                var deviceList = this.convertToDeviceList(deviceListJson);
                success(deviceList);
            }, error);
        }

        get(deviceId: string, relatedLicenceId: number, success: (success: Models.Management.Company.Device) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            Xomni.Utils.Validator.isGreaterThanOrEqual("relatedLicenceId", relatedLicenceId, 1);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.baseUri, deviceId);
            uri += Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(uri, new Dictionary<string, string>([
                { key: "relatedLicenceId", value: relatedLicenceId.toString() }
            ]));

            this.httpProvider.get(uri, (deviceJson: any) => {
                var device = this.convertToDevice(deviceJson);
                success(device);
            }, error);
        }

        post(device: Models.Management.Company.Device, success: (result: Models.Management.Company.Device) => void, error: (error: Models.ExceptionResult) => void) {
            this.validateDevice(device);
            Xomni.Utils.Validator.isDefined("deviceId", device.DeviceId);
            this.httpProvider.post(this.baseUri, device, (deviceJson: any) => {
                var device = this.convertToDevice(deviceJson);
                success(device);
            }, error);
        }

        put(deviceId: string, device: Models.Management.Company.Device, success: (result: Models.Management.Company.Device) => void, error: (error: Models.ExceptionResult) => void) {
            this.validateDevice(device);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            var uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(this.baseUri, deviceId);

            this.httpProvider.put(uri, device, (deviceJson: any) => {
                var device = this.convertToDevice(deviceJson);
                success(device);
            }, error);
        }

        private validateDevice(device: Models.Management.Company.Device) {
            Xomni.Utils.Validator.isDefined("device", device);
            Xomni.Utils.Validator.isDefined("description", device.Description);
            Xomni.Utils.Validator.isGreaterThanOrEqual("relatedLicenceId", device.RelatedLicenceId, 1);
        }

        private convertToDevice(deviceJson: any) {
            var device: Models.Management.Company.Device = {
                Description: deviceJson.Description,
                DeviceId: deviceJson.DeviceId,
                DeviceTypeDescription: deviceJson.DeviceTypeDescription,
                DeviceTypeId: deviceJson.DeviceTypeId,
                ExpirationDate: deviceJson.ExpirationDate ? new Models.UTCDate(deviceJson.ExpirationDate) : null,
                RelatedLicenceId: deviceJson.RelatedLicenceId,
                RelatedLicenceName: deviceJson.RelatedLicenceName
            };
            return device;
        }

        private convertToDeviceList(list: any) {
            var device = <Models.Management.Company.Device>{};
            var deviceContainer: Models.PaginatedContainer<Models.Management.Company.Device> = {
                Results: [],
                TotalCount: 0
            };
            deviceContainer.TotalCount = list.TotalCount;
            for (var i = 0; i < list.Results.length; i++) {
                device = this.convertToDevice(list.Results[i]);
                deviceContainer.Results.push(device);
            }
            return deviceContainer;
        }
    }
}
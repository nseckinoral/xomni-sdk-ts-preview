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
                var deviceList = this.convertListToDate(deviceListJson);
                success(deviceList);
            }, error);
        }

        private convertListToDate(list: any) {
            var device = <Models.Management.Company.Device>{};
            var deviceContainer: Models.PaginatedContainer<Models.Management.Company.Device> = {
                Results: [],
                TotalCount: 0
            };
            deviceContainer.TotalCount = list.TotalCount;
            for (var i = 0; i < list.Results.length; i++) {
                device = {
                    Description: list.Results[i].Description,
                    DeviceId: list.Results[i].DeviceId,
                    DeviceTypeDescription: list.Results[i].DeviceTypeDescription,
                    DeviceTypeId: list.Results[i].DeviceTypeId,
                    ExpirationDate: list.Results[i].ExpirationDate ? new Date(list.Results[i].ExpirationDate) : null,
                    RelatedLicenceId: list.Results[i].RelatedLicenceId,
                    RelatedLicenceName: list.Results[i].RelatedLicenceName
                };
                deviceContainer.Results.push(device);
            }
            return deviceContainer;
        }
    }
}
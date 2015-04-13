/// <reference path="../../xomni.ts" />
module Xomni.Management.Company.DeviceTypes {
    export class DeviceTypesClient extends BaseClient {
        private baseUri: string = "/management/company/devicetypes";

        post(deviceType: Models.Management.Company.DeviceType, success: (result: Models.Management.Company.DeviceType) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("deviceType", deviceType);
            Xomni.Utils.Validator.isDefined("description", deviceType.Description);
            Xomni.Utils.Validator.isLessThan(deviceType.Description.length, "description length", 150);

            this.httpProvider.post(this.baseUri, deviceType, success, error);
        }
    }
} 
/// <reference path="../../xomni.ts" />
module Xomni.Management.Company.DeviceMetadata {
    export class DeviceMetadataClient extends BaseClient {
        private baseUri: string = "/management/company/licences/{licenceId}/devices/{deviceId}/metadata/";

        post(licenceId: number, deviceId: string, metadata: Models.Management.Company.Metadata, success: (result: Models.Management.Company.Metadata) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenceId", licenceId, 0);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            Xomni.Utils.Validator.isDefined("metadata", metadata);
            Xomni.Utils.Validator.isDefined("key", metadata.Key);
            Xomni.Utils.Validator.isDefined("value", metadata.Value);
            var uri = Xomni.Utils.UrlGenerator.ReplaceUri(this.baseUri, new Dictionary<string, string>([
                { key: "{licenceId}", value: licenceId.toString() },
                { key: "{deviceId}", value: deviceId },
            ]));

            this.httpProvider.post(uri, metadata, success, error);
        }

        put(licenceId: number, deviceId: string, metadata: Models.Management.Company.Metadata, success: (result: Models.Management.Company.Metadata) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenceId", licenceId, 0);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            Xomni.Utils.Validator.isDefined("metadata", metadata);
            Xomni.Utils.Validator.isDefined("key", metadata.Key);
            Xomni.Utils.Validator.isDefined("value", metadata.Value);
            var uri = Xomni.Utils.UrlGenerator.ReplaceUri(this.baseUri, new Dictionary<string, string>([
                { key: "{licenceId}", value: licenceId.toString() },
                { key: "{deviceId}", value: deviceId },
            ]));

            this.httpProvider.put(uri, metadata, success, error);
        }
    }
} 
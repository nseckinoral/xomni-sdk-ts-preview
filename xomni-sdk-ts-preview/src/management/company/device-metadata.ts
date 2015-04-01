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

        delete(licenceId: number, deviceId: string, metadataKey: string, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenceId", licenceId, 0);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            Xomni.Utils.Validator.isDefined("metadataKey", metadataKey);
            var uri = Xomni.Utils.UrlGenerator.ReplaceUri(this.baseUri, new Dictionary<string, string>([
                { key: "{licenceId}", value: licenceId.toString() },
                { key: "{deviceId}", value: deviceId },
            ]));
            uri = Xomni.Utils.UrlGenerator.PrepareOperationUrl(uri, metadataKey);

            this.httpProvider.delete(uri, success, error);
        }

        deleteAll(licenceId: number, deviceId: string, success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenceId", licenceId, 0);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            var uri = Xomni.Utils.UrlGenerator.ReplaceUri(this.baseUri, new Dictionary<string, string>([
                { key: "{licenceId}", value: licenceId.toString() },
                { key: "{deviceId}", value: deviceId },
            ]));

            this.httpProvider.delete(uri, success, error);
        }

        get(licenceId: number, deviceId: string, success: (result: Array<Models.Management.Company.Metadata>) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isGreaterThanOrEqual("licenceId", licenceId, 0);
            Xomni.Utils.Validator.isDefined("deviceId", deviceId);
            var uri = Xomni.Utils.UrlGenerator.ReplaceUri(this.baseUri, new Dictionary<string, string>([
                { key: "{licenceId}", value: licenceId.toString() },
                { key: "{deviceId}", value: deviceId },
            ]));

            this.httpProvider.get(uri, success, error);
        }
    }
} 
/// <reference path="../../models/management/configuration/settings.ts" />
/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.Settings {
    export class SettingsClient extends BaseClient {
        private uri: string = "/management/configuration/settings";

        put(settings: Models.Management.Configuration.Settings, success: (result: Models.Management.Configuration.Settings) => void, error: (error: Models.ExceptionResult) => void) {
            if (settings.PassbookCertificatePassword && settings.PassbookCertificatePassword.length > 250) {
                throw new Error("Length of PassbookCertificatePassword must be lower than or equal to 250 character.");
            }
            if (settings.PassbookTeamIdentifier && settings.PassbookTeamIdentifier.length > 250) {
                throw new Error("Length of PassbookTeamIdentifier must be lower than or equal to 250 character.");
            }
            if (settings.PassbookOrganizationName && settings.PassbookOrganizationName.length > 250) {
                throw new Error("Length of PassbookOrganizationName must be lower than or equal to 250 character.");
            }
            this.httpProvider.put(this.uri, settings, success, error);
        }
    }
}
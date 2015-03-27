/// <reference path="../../xomni.ts" />
module Xomni.Management.Configuration.Settings {
    export class SettingsClient extends BaseClient {
        private uri: string = "/management/configuration/settings";

        put(settings: Models.Management.Configuration.Settings, success: (result: Models.Management.Configuration.Settings) => void, error: (error: Models.ExceptionResult) => void) {
            if (settings.PassbookCertificatePassword){
                Xomni.Utils.Validator.isLessThan(settings.PassbookCertificatePassword.length, "PassbookCertificatePassword", 250);
            }
            if (settings.PassbookTeamIdentifier){
                Xomni.Utils.Validator.isLessThan(settings.PassbookTeamIdentifier.length, "PassbookTeamIdentifier", 250);
            }
            if (settings.PassbookOrganizationName) {
                Xomni.Utils.Validator.isLessThan(settings.PassbookOrganizationName.length, "PassbookOrganizationName", 250);
            }
            this.httpProvider.put(this.uri, settings, success, error);
        }

        get(success: (result: Models.Management.Configuration.Settings) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, success, error);
        }
    }
}
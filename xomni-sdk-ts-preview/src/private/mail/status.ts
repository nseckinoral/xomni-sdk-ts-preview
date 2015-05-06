/// <reference path="../../xomni.ts" />
module Xomni.Private.Mail.Status {
    export class StatusClient extends BaseClient {
        private mailSubscriptionStatusUri: string = '/private/mail/{email}/status';

        get(email : string, success: (result: Models.Private.Mail.MailSubscription) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("email", email);
            this.httpProvider.get(this.mailSubscriptionStatusUri.replace("{email}", email), success, error);
        }

        put(email : string, statusId : Models.Private.Mail.MailSubscriptionStatus,success: () => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("email", email);
            Xomni.Utils.Validator.isDefined("statusId", statusId);

            this.httpProvider.put(this.mailSubscriptionStatusUri.replace("{email}", email), { StatusId: statusId }, success, error);
        }
    }
}
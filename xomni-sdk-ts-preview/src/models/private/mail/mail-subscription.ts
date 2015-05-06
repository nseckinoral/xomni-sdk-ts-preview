module Models.Private.Mail{
    export interface MailSubscription {
        PIIName: string;
        StatusId: Models.Private.Mail.MailSubscriptionStatus;
        PurposeTypeId: Models.Private.Mail.MailSubscriptionPurposeType;
        IsSubscribable: boolean;
    }
};  
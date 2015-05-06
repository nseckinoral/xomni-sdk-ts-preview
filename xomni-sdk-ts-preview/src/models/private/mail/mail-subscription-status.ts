module Models.Private.Mail {
    export enum MailSubscriptionStatus {
        Subscribed = 1,
        Unsubscribed,
        UnsubscribedLimitReached,
        Bounced
    }
};  
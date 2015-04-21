module Models.Management.Integration {
    export interface MSGIntegration {
        Email: string;
        SsoUrl: string;
        SubscriptionKey: string;
        Endpoints: Array<string>;
    }
}
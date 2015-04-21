﻿module Models.Management.Integration {
    export interface MSGIntegrationResponse {
        Email: string;
        SsoUrl: string;
        Password: string;
        SubscriptionKey: string;
        Endpoints: Array<string>;
    }
} 
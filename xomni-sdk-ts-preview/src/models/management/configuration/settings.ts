module Models.Management.Configuration {
    export interface Settings {
        FacebookDisplayType: FacebookDisplayType;
        FacebookApplicationId: string;
        FacebookRedirectUri: string;
        FacebookApplicationSecretKey: string;
        IsCDNEnabled: boolean;
        CDNUrl: string;
        CacheExpirationTime: number;
        IsPassbookEnabled: boolean;
        PassbookPassTypeIdentifier: string;
        PassbookWWDRCACertificateTenantAssetId: number;
        PassbookCertificateTenantAssetId: number;
        PassbookCertificatePassword: string;
        PassbookTeamIdentifier: string;
        PassbookOrganizationName: string;
        PopularityTimeImpactValue: number;
        SearchIndexingEnabled: boolean;
        TwitterConsumerKey: string;
        TwitterConsumerKeySecret: string;
        TwitterRedirectUri: string;
        MailUnsubscribeRedirectionUri: string;
    }
}
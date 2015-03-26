module Models.Management.Integration {
    export interface EndpointCreateRequest {
        AdminMail: string;
        ServiceName: string;
        ServiceTier: ServiceTierType;
    }
}
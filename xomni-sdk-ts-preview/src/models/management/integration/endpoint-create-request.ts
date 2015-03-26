module Models.Management.Integration {
    export interface EndpointCreateRequest {
        AdminEmail: string;
        ServiceName: string;
        ServiceTier: ServiceTierType;
    }
}
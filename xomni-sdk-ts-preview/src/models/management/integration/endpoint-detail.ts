/// <reference path="endpoint-status-type.ts" />
module Models.Management.Integration {
    export interface EndpointDetail {
        ServiceName: string;
        ManagementPortalUrl: string;
        Status: EndpointStatusType;
    }
}
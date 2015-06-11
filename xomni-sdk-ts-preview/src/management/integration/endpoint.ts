/// <reference path="../../xomni.ts" />
/// <reference path="../../models/management/integration/endpoint-detail.ts" />
module Xomni.Management.Integration.Endpoint {
    export class EndpointClient extends BaseClient {
        private uri: string = "/management/integration/endpoint";

        get(success: (result: Models.Management.Integration.EndpointDetail) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri,(detailJson: any) => {
                success(this.convertToEndpointDetail(detailJson));
            }, error);
        }

        post(endpointCreateRequest: Models.Management.Integration.EndpointCreateRequest, success: () => void, error: (error: Models.ExceptionResult) => void) {

            if (!endpointCreateRequest.AdminMail) {
                throw new Error("AdminMail could not be null or empty.");
            }

            if (!endpointCreateRequest.ServiceName) {
                throw new Error("ServiceName could not be null or empty.");
            }

            this.httpProvider.post(this.uri, endpointCreateRequest,(t: any) => { success(); }, error);
        }

        delete(success: () => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.delete(this.uri, success, error);
        }

        private convertToEndpointDetail(detailJson: any): Models.Management.Integration.EndpointDetail {
            var endpointDetail: Models.Management.Integration.EndpointDetail = {
                ManagementPortalUrl: detailJson.ManagementPortalUrl,
                ServiceName: detailJson.ServiceName,
                Status: <Models.Management.Integration.EndpointStatusType>detailJson.Status,
                CreationDate: detailJson.CreationDate ? new Models.UTCDate(detailJson.CreationDate) : null,
            };
            return endpointDetail;
        }
    }
}

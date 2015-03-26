/// <reference path="../../xomni.ts" />
/// <reference path="../../models/management/integration/endpoint-detail.ts" />
module Xomni.Management.Integration.Endpoint {
    export class EndpointClient extends BaseClient {
        private uri: string = "/management/integration/endpoint";

        get(success: (result: Models.Management.Integration.EndpointDetail) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, success, error);
        }

        post(endpointCreateRequest: Models.Management.Integration.EndpointCreateRequest, success: () => void, error: (error: Models.ExceptionResult) => void) {

            if (!endpointCreateRequest.AdminMail) {
                throw new Error("AdminMail could not be null or empty.");
            }

            if (!endpointCreateRequest.ServiceName) {
                throw new Error("ServiceName could not be null or empty.");
            }

            this.httpProvider.post(this.uri, endpointCreateRequest, (t: any) => { success(); }, error);
        }

        delete(success: () => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.delete(this.uri, success, error);
        }
    }
}

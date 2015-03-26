/// <reference path="../../xomni.ts" />
/// <reference path="../../models/management/integration/endpoint-detail.ts" />
module Xomni.Management.Integration.Endpoint {
    export class EndpointClient extends BaseClient {
        private uri: string = "/management/integration/endpoint";

        get(success: (result: Models.Management.Integration.EndpointDetail) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, success, error);
        }
    }
}

/// <reference path="../../xomni.ts" />
module Xomni.Management.Integration.MSG {
    export class MSGClient extends BaseClient {
        private uri: string = "/management/integration/msg";

        get(success: (result: Models.Management.Integration.MSGIntegration) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, success, error);
        }

        post(createRequest: Models.Management.Integration.MSGIntegrationRequest, success: (result: Models.Management.Integration.MSGIntegrationResponse) => void, error: (error: Models.ExceptionResult) => void) {

            if (!createRequest.Email) {
                throw new Error("Email could not be null or empty.");
            }

            if (!createRequest.FirstName) {
                throw new Error("FirstName could not be null or empty.");
            }

            if (!createRequest.LastName) {
                throw new Error("LastName could not be null or empty.");
            }

            this.httpProvider.post(this.uri, createRequest, success, error);
        }

        delete(success: () => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.delete(this.uri, success, error);
        }
    }
}

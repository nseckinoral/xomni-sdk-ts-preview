module Xomni {
    export class HttpProvider {
        get<T>(uri: string, success: (result: T) => void, error: (error: any) => void) {
            var currentClientContext = this.getCurrentClientContext();
            var authorization: string = currentClientContext.username + ":" + currentClientContext.password;
            $.ajax({
                type: "Get",
                url: currentClientContext.serviceUri + uri,
                contentType: "application/json",
                headers: {
                    "Authorization": "Basic " + btoa(authorization),
                    "Accept": "application/vnd.xomni.api-v3_0, */*"
                },
                success: (d, t, s) => {
                    success(<T>d);
                },
                error: (r, t, e) => {
                    error(t);
                }
            });
        }

        getCurrentClientContext(): ClientContext {
            if (currentContext == null) {
                throw new Error("Client context could not be null.");
            }
            else {
                return currentContext;
            }
        }
    }

    export class BaseClient {
        httpProvider: HttpProvider = new HttpProvider();
    }
    export class ClientContext {
        constructor(public username: string, public password: string, public serviceUri: string) {
            if (!username) {
                throw new Error("username could not be null or empty.");
            }
            if (!password) {
                throw new Error("password could not be null or empty.");
            }
            if (!serviceUri) {
                throw new Error("serviceUri could not be null or empty.");
            }
        }
    }
    export var currentContext: ClientContext;
}
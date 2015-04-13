/// <reference path="../../xomni.ts" />
module Xomni.Private.Analytics.ClientCounters {
    export class ClientCounterClient extends BaseClient {
        private clientCounterUri: string = '/private/analytics/clientcounters';

        get(success: (result: Models.Private.Analytics.ClientCounterListContainer) => void, error: (error: Models.ExceptionResult) => void, continuationKey?: string) {
            var uri = this.clientCounterUri;
            if (continuationKey != undefined) {
                uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(uri, new Dictionary<string, string>([
                    { key: "continuationKey", value: continuationKey },
                ]));
            }
            this.httpProvider.get(uri, success, error);
        }
    }
}
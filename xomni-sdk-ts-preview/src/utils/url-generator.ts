module Xomni.Utils {
    export class UrlGenerator {
        static PrepareSingleOperationUrl(baseUrl: string, additionalQueryString: string): string {
            Xomni.Utils.Validator.isDefined("baseUrl", baseUrl);
            Xomni.Utils.Validator.isDefined("additionalQueryString", additionalQueryString);
            return baseUrl + additionalQueryString;
        }

        static PrepareListOperationUrl(baseUrl: string, additionalQueryString: Dictionary<string, string>): string {
            Xomni.Utils.Validator.isDefined("baseUrl", baseUrl);
            Xomni.Utils.Validator.isDefined("additionalQueryString", additionalQueryString);
            baseUrl += "?";
            for (var i = 0; i < additionalQueryString.keys().length; i++) {
                baseUrl += additionalQueryString.keys()[i] + "=" + additionalQueryString.values()[i];
                baseUrl += "&";
            }
            if (baseUrl.substring(baseUrl.length - 1) == "&") {
                baseUrl = baseUrl.substring(0, baseUrl.length - 1);
            }
            return baseUrl;
        }

        static ReplaceUri(baseUri: string, oldStringPattern: string, newStringPattern: string) {
            var uri = baseUri.replace(oldStringPattern, newStringPattern);
            return uri;
        }
    }
} 
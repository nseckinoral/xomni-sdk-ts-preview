module Xomni.Utils {
    export class UrlGenerator {
        static PrepareOperationUrl(baseUrl: string, additionalQueryString: string): string {
            Xomni.Utils.Validator.isDefined("baseUrl", baseUrl);
            Xomni.Utils.Validator.isDefined("additionalQueryString", additionalQueryString);
            return baseUrl + additionalQueryString;
        }

        static PrepareOperationUrlWithMultipleParameter(baseUrl: string, additionalQueryString: Dictionary<string, string>): string {
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

        static ReplaceUri(baseUrl: string, patterns: Dictionary<string, string>) {
            Xomni.Utils.Validator.isDefined("baseUrl", baseUrl);
            Xomni.Utils.Validator.isDefined("patterns", patterns);
            for (var i = 0; i < patterns.keys().length; i++) {
                baseUrl = baseUrl.replace(patterns.keys()[i], patterns.values()[i]);
            }
            return baseUrl;
        }
    }
} 
/// <reference path="../../xomni.ts" />
module Xomni.Management.Social.Facebook {
    export class FacebookClient extends BaseClient {
        private uri: string = "/management/social/facebookdisplaytypes";

        get(success: (result: Dictionary<string, string>) => void, error: (error: Models.ExceptionResult) => void) {
            this.httpProvider.get(this.uri, (types: any) => {
                var dict = this.convertToDictionary(types);
                success(dict);
            }, error);
        }

        private convertToDictionary(types: any) {
            var dict = new Xomni.Dictionary<string, string>();
            for (var key in types) {
                if (types.hasOwnProperty(key)) {
                    dict.add(key, types[key]);
                }
            }
            return dict;
        }
    }
}

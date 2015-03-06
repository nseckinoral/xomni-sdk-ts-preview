/// <reference path="../../xomni.ts" />
module Xomni.Management.Social.Facebook {
    export class FacebookClient extends BaseClient {
        private uri: string = "/management/social/facebookdisplaytypes";
        
        getFacebookDisplayTypes(success: (result: string) => void, error: (error: any) => void) {
            this.httpProvider.get(this.uri, success, error);
        }
    }
}
    
﻿TestHelpers.InitalizeTestContext();

describe('Facebook.FacebookClient.getClientCounterList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/social/facebookdisplaytypes");
        var testClient = new Xomni.Management.Social.Facebook.FacebookClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Social.Facebook.FacebookClient();
        testClient.get(suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Social.Facebook.FacebookClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "0": "Page",
            "1": "Popup",
            "2": "Touch"
        });

        var expectedSuccess = (types: Xomni.Dictionary<string,string>) => {
            expect(types.keys().length).toEqual(3);
            expect(types.values().length).toEqual(3);
            expect(types.values()[0]).toEqual("Page");
            expect(types.values()[1]).toEqual("Popup");
            expect(types.values()[2]).toEqual("Touch");
        };

        var testClient = new Xomni.Management.Social.Facebook.FacebookClient();
        testClient.get(expectedSuccess, err => { });
    });
});
var TestHelpers;
(function (TestHelpers) {
    function RequestUriTest($, expectedUrl) {
        spyOn($, "ajax").and.callFake(function (params) {
            expect(params.url).toContain(expectedUrl);
        });
    }
    TestHelpers.RequestUriTest = RequestUriTest;

    function RequestHttpMethodTest($, expectedMethod) {
        spyOn($, "ajax").and.callFake(function (params) {
            expect(params.type).toContain(expectedMethod);
        });
    }
    TestHelpers.RequestHttpMethodTest = RequestHttpMethodTest;

    function RequestHttpHeadersTest($, expectedHeaders) {
        if (typeof expectedHeaders === "undefined") { expectedHeaders = {
            "Authorization": "Basic " + btoa(Xomni.currentContext.username + ":" + Xomni.currentContext.password),
            "Accept": "application/vnd.xomni.api-v3_0, */*"
        }; }
        spyOn($, "ajax").and.callFake(function (params) {
            expect(params.headers).toEqual(expectedHeaders);
        });
    }
    TestHelpers.RequestHttpHeadersTest = RequestHttpHeadersTest;

    function InitalizeTestContext() {
        Xomni.currentContext = new Xomni.ClientContext("u", "p", "s");
    }
    TestHelpers.InitalizeTestContext = InitalizeTestContext;

    function ResponseParseTest($, expectedResponseJson) {
        spyOn($, "ajax").and.callFake(function (p) {
            p.success(expectedResponseJson, null, null);
        });
    }
    TestHelpers.ResponseParseTest = ResponseParseTest;
})(TestHelpers || (TestHelpers = {}));
//# sourceMappingURL=test-helpers.js.map

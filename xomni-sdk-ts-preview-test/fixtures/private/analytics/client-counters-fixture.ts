TestHelpers.InitalizeTestContext();

describe('ClientCounterClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "private/analytics/clientcounters");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.get(suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "ContinuationToken": "adqweqwlkasd12312dkslk",
            "CounterNames": [
                "categoryClicked",
                "itemClicked",
                "brandClicked"
            ]
        });

        var expectedSuccess = (counters: Models.Private.Analytics.ClientCounterListContainer) => {
            expect(counters.ContinuationToken).toEqual("adqweqwlkasd12312dkslk");
            expect(counters.CounterNames.length).toEqual(3);
            expect(counters.CounterNames[0]).toEqual("categoryClicked");
            expect(counters.CounterNames[1]).toEqual("itemClicked");
            expect(counters.CounterNames[2]).toEqual("brandClicked");
        };

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.get(expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($,404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.get(suc=> { }, expectedError);

    });
});
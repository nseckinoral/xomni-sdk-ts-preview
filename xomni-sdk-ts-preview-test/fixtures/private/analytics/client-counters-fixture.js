TestHelpers.InitalizeTestContext();

describe('ClientCounterClient.getClientCounterList', function () {
    it("Should hit correct url", function () {
        TestHelpers.RequestUriTest($, "private/analytics/clientcounters");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(function (suc) {
        }, function (err) {
        });
    });

    it("Should parse response successfully", function () {
        TestHelpers.ResponseParseTest($, {
            "ContinuationToken": "adqweqwlkasd12312dkslk",
            "CounterNames": [
                "categoryClicked",
                "itemClicked",
                "brandClicked"
            ]
        });

        var expectedSuccess = function (counters) {
            expect(counters.ContinuationToken).toEqual("adqweqwlkasd12312dkslk");
            expect(counters.CounterNames.length).toEqual(3);
            expect(counters.CounterNames[0]).toEqual("categoryClicked");
            expect(counters.CounterNames[1]).toEqual("itemClicked");
            expect(counters.CounterNames[2]).toEqual("brandClicked");
        };

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(expectedSuccess, function (err) {
        });
    });
});
//# sourceMappingURL=client-counters-fixture.js.map

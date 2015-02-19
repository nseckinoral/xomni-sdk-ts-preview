/// <chutzpah_reference path="../../src/client-counters.ts" />
/// <chutzpah_reference path="../../definitions/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../../definitions/jquery/jquery.d.ts" />
/// <chutzpah_reference path="../testhelpers.ts" />

TestHelpers.InitalizeTestContext();

describe('ClientCounterClient.getClientCounterList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "private/analytics/clientcounters");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($, {
            "Authorization": "Basic " + btoa("u:p"),
            "Accept": "application/vnd.xomni.api-v3_0, */*"
        });

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        spyOn($, "ajax")
            .and
            .callFake(p => {
                p.success({
                    "ContinuationToken": "adqweqwlkasd12312dkslk",
                    "CounterNames": [
                        "categoryClicked",
                        "itemClicked",
                        "brandClicked"
                    ]
                }, null, null);
            });
        
        var expectedSuccess = (counters: Xomni.Private.Analytics.ClientCounters.ClientCounterListContainer) => {
            expect(counters.ContinuationToken).toEqual("adqweqwlkasd12312dkslk");
            expect(counters.CounterNames.length).toEqual(3);
            expect(counters.CounterNames[0]).toEqual("categoryClicked");
            expect(counters.CounterNames[1]).toEqual("itemClicked");
            expect(counters.CounterNames[2]).toEqual("brandClicked");
        };

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(expectedSuccess, err => { });
    });
});
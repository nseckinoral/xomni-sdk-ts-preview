/// <reference path="../../src/client-counters.ts" />
/// <reference path="../../definitions/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../../definitions/jquery/jquery.d.ts" />

describe('client-counters-fixture', () => {
    it("Should username passed", () => {
        Xomni.currentContext = new Xomni.ClientContext("mahmut", "password", "serviceUri");
        expect(Xomni.currentContext.username).toEqual("mahmut");
    });

    it("Should hit correct url", () => {
        Xomni.currentContext = new Xomni.ClientContext("userName", "password", "serviceUri");
        spyOn($, "ajax")
            .and
            .callFake(params => {
                expect(params.url).toContain("private/analytics/clientcounters");
            });

        var testClient = new Xomni.Private.Analytics.ClientCounters.ClientCounterClient();
        testClient.getClientCounterList(suc => { }, err => { });
    });
});
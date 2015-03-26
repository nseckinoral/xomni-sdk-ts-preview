TestHelpers.InitalizeTestContext();

var validResponse = {
    "ServiceName": "test",
    "ManagementPortalUrl": "http://xomni.com"
};

describe('EndpointClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/integration/endpoint");

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validResponse);

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.get(
            (r: Models.Management.Integration.EndpointDetail) => {
                expect(r.ServiceName).toEqual("test");
                expect(r.ManagementPortalUrl).toEqual("http://xomni.com");
            },
            err => {
        });
    });
});

TestHelpers.InitalizeTestContext();

var validResponse = {
    "ServiceName": "test",
    "ManagementPortalUrl": "http://xomni.com"
};

var validRequestJson = {
    "AdminMail": "test@xomni.com",
    "ServiceName": "test",
    "ServiceTier": 0
};

var validCreateRequest : Models.Management.Integration.EndpointCreateRequest = {
    "AdminMail": "test@xomni.com",
    "ServiceName": "test",
    "ServiceTier": 0
};



describe('EndpointClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/integration/endpoint");

        var testClientX = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClientX.post(validCreateRequest, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");

        var testClientX = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClientX.post(validCreateRequest, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClientX = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClientX.post(validCreateRequest, () => { }, err => { });
    });

    it("Should parse request seccessfully", () => {
        var parseMethod = (request: Models.Management.Integration.EndpointCreateRequest) => {
            expect(request).toEqual(validRequestJson);
            expect(request.AdminMail).toEqual("test@xomni.com");
            expect(request.ServiceName).toEqual("test");
            expect(request.ServiceTier).toEqual(0);
            expect(request.ServiceTier).toEqual(Models.Management.Integration.ServiceTierType.Developer);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClientX = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClientX.post(validCreateRequest, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters.", () => {
        expect(() => {
            var invalidRequest = <Models.Management.Integration.EndpointCreateRequest>
            {
            };

            new Xomni.Management.Integration.Endpoint.EndpointClient().
                post(invalidRequest, () => { }, err => { })
            })
            .toThrow(new Error("AdminMail could not be null or empty.")
        );

        expect(() => {
            var invalidRequest = <Models.Management.Integration.EndpointCreateRequest>
                {
                    AdminMail: validCreateRequest.AdminMail
                };

            new Xomni.Management.Integration.Endpoint.EndpointClient().
                post(invalidRequest, () => { }, err => { })
            })
            .toThrow(new Error("ServiceName could not be null or empty.")
        );
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClientX = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClientX.post(validCreateRequest, () => { }, expectedError);
    });
});

describe('EndpointClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/integration/endpoint");

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.delete(() => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.delete(() => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.delete(() => { }, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Integration.Endpoint.EndpointClient();
        testClient.delete(() => { }, expectedError);
    });
});
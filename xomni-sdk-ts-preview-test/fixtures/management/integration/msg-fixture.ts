TestHelpers.InitalizeTestContext();

var validGetResponse = {
    "Email": "developer@xomni.com",
    "SsoUrl": "http://xomni.com"
};

var validPostResponseJson = {
    "Email": "developer@xomni.com",
    "SsoUrl": "http://xomni.com",
    "Password" : "Password"
};

var validPostRequestJson = {
    "Email": "developer@xomni.com",
    "FirstName": "Developer",
    "LastName": "XOMNI"
};


describe('MSGClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/integration/msg");

        var testClient = new Xomni.Management.Integration.MSG.MSGClient();
        testClient.get((r) => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");

        var testClient = new Xomni.Management.Integration.MSG.MSGClient();
        testClient.get((r) => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Integration.MSG.MSGClient();
        testClient.get((r) => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validGetResponse);

        var expectedSuccess = (r: Models.Management.Integration.MSGIntegration) => {
            expect(r.Email).toEqual("developer@xomni.com");
            expect(r.SsoUrl).toEqual("http://xomni.com");
        };

        var testClient = new Xomni.Management.Integration.MSG.MSGClient();
        testClient.get(expectedSuccess, err => { });
    });
    
    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Integration.MSG.MSGClient();
        testClient.get((r) => { }, expectedError);
    });
});


describe('MSGClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/integration/msg");

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t) => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t) => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t) => { }, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Integration.MSGIntegrationRequest) => {
            expect(request).toEqual(validPostRequestJson);
            expect(request.Email).toEqual("developer@xomni.com");
            expect(request.FirstName).toEqual("Developer");
            expect(request.LastName).toEqual("XOMNI");
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t) => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validPostResponseJson);

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t : Models.Management.Integration.MSGIntegrationResponse) => {
            expect(t.Email).toEqual("developer@xomni.com");
            expect(t.Password).toEqual("Password");
            expect(t.SsoUrl).toEqual("http://xomni.com");
        }, err => { });
    });

    it("Should raise exception with invalid parameters.", () => {
        expect(() => {
            var invalidRequest = <Models.Management.Integration.MSGIntegrationRequest>
                {
                };

            new Xomni.Management.Integration.MSG.MSGClient().
                post(invalidRequest, () => { }, err => { })
            })
            .toThrow(new Error("Email could not be null or empty.")
        );

        expect(() => {
            var invalidRequest = <Models.Management.Integration.MSGIntegrationRequest>
                {
                    Email: validPostRequestJson.Email
                };

            new Xomni.Management.Integration.MSG.MSGClient().
                post(invalidRequest, () => { }, err => { })
            })
            .toThrow(new Error("FirstName could not be null or empty.")
        );

        expect(() => {
            var invalidRequest = <Models.Management.Integration.MSGIntegrationRequest>
                {
                    Email: validPostRequestJson.Email,
                    FirstName: validPostRequestJson.FirstName
                };

            new Xomni.Management.Integration.MSG.MSGClient().
                post(invalidRequest, () => { }, err => { })
            })
            .toThrow(new Error("LastName could not be null or empty.")
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

        var testClientX = new Xomni.Management.Integration.MSG.MSGClient();
        testClientX.post(validPostRequestJson, (t) => { }, expectedError);
    });
});

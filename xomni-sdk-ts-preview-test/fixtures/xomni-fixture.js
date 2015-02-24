describe('ClientContext fixture', function () {
    it("Should raise exception with invalid parameters. - username", function () {
        expect(function () {
            new Xomni.ClientContext(null, "p", "s");
        }).toThrow(new Error("username could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext("", "p", "s");
        }).toThrow(new Error("username could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext(undefined, "p", "s");
        }).toThrow(new Error("username could not be null or empty."));
    });

    it("Should raise exception with invalid parameters. - password", function () {
        expect(function () {
            new Xomni.ClientContext("u", null, "s");
        }).toThrow(new Error("password could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext("u", "", "s");
        }).toThrow(new Error("password could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext("u", undefined, "s");
        }).toThrow(new Error("password could not be null or empty."));
    });

    it("Should raise exception with invalid parameters. - serviceUri", function () {
        expect(function () {
            new Xomni.ClientContext("u", "p", null);
        }).toThrow(new Error("serviceUri could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext("u", "p", "");
        }).toThrow(new Error("serviceUri could not be null or empty."));

        expect(function () {
            new Xomni.ClientContext("u", "p", undefined);
        }).toThrow(new Error("serviceUri could not be null or empty."));
    });

    it("Should intialize correctly with valid parameters.", function () {
        var testContext = new Xomni.ClientContext("u", "p", "s");
        expect(testContext.username).toBe("u");
        expect(testContext.password).toBe("p");
        expect(testContext.serviceUri).toBe("s");
    });
});

describe('currenctContext fixture', function () {
    it("Should intialize correctly with valid parameters.", function () {
        TestHelpers.InitalizeTestContext();
        expect(Xomni.currentContext.username).toBe("u");
        expect(Xomni.currentContext.password).toBe("p");
        expect(Xomni.currentContext.serviceUri).toBe("s");
    });
});

describe('HttpProvider fixture', function () {
    it("Should initalize correctly with correct parameters", function () {
        var httpProvider = new Xomni.HttpProvider();
        TestHelpers.InitalizeTestContext();
        var returnedCurrentContext = httpProvider.getCurrentClientContext();

        expect(Xomni.currentContext.username).toEqual(returnedCurrentContext.username);
        expect(Xomni.currentContext.password).toEqual(returnedCurrentContext.password);
        expect(Xomni.currentContext.serviceUri).toEqual(returnedCurrentContext.serviceUri);
    });
});

describe('HttpProvider.get fixture', function () {
    it("Should hit correct url", function () {
        TestHelpers.InitalizeTestContext();
        var httpProvider = new Xomni.HttpProvider();
        TestHelpers.RequestUriTest($, "test");
        httpProvider.get("test", function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.InitalizeTestContext();
        var httpProvider = new Xomni.HttpProvider();
        TestHelpers.RequestHttpMethodTest($, "Get");
        httpProvider.get("", function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.InitalizeTestContext();
        var httpProvider = new Xomni.HttpProvider();
        TestHelpers.RequestHttpHeadersTest($);
        httpProvider.get("", function (suc) {
        }, function (err) {
        });
    });
});
//# sourceMappingURL=xomni-fixture.js.map

TestHelpers.InitalizeTestContext();
var validStoreId: number = 49720;
var validUri: string = "/management/configuration/store/" + validStoreId;

describe('StoreClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.get(validStoreId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.get(validStoreId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.get(validStoreId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        
        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("storeId could not be less than 0."));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty."));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty."));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1004,
            "Name": "Relationed Store",
            "Description": "The Description",
            "Address": "Sample Data Address",
            "Location": {
                "Longitude": 23.54,
                "Latitude": 35.41
            },
            "Licenses": [
                {
                    "Id": 3,
                    "Username": "DebugApiManagementTestUser",
                    "Name": "Debug Management Api User",
                    "Password": "DebugApiManagementTestPass",
                    "StoreId": 1004
                }
            ]
        });

        var expectedSuccess = (store: Models.Management.Configuration.Store) => {
            expect(store.Id).toEqual(1004);
            expect(store.Name).toEqual("Relationed Store");
            expect(store.Description).toEqual("The Description");
            expect(store.Address).toEqual("Sample Data Address");
            expect(store.Location.Longitude).toEqual(23.54);
            expect(store.Location.Latitude).toEqual(35.41);
            expect(store.Licenses[0].Id).toEqual(3);
            expect(store.Licenses[0].Username).toEqual("DebugApiManagementTestUser");
            expect(store.Licenses[0].Name).toEqual("Debug Management Api User");
            expect(store.Licenses[0].Password).toEqual("DebugApiManagementTestPass");
            expect(store.Licenses[0].StoreId).toEqual(1004);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.get(validStoreId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.get(validStoreId, suc=> { }, expectedError);
    });
});

describe('StoreClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();

        expect(() => { testClient.delete(null, err => { }) })
            .toThrow(new Error("storeId could not be null or empty."));

        expect(() => { testClient.delete(undefined, err => { }) })
            .toThrow(new Error("storeId could not be null or empty."));

        expect(() => { testClient.delete(-1, err => { }) })
            .toThrow(new Error("storeId could not be less than 0."));
    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, expectedError);
    });

    it("Should parse api exception response successfully (400)", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, expectedError);
    });
});



TestHelpers.InitalizeTestContext();
var validStoreId: number = 1;
var validSkip: number = 1;
var validTake: number = 1000;
var validUri: string = "/management/configuration/store/" + validStoreId;
var validUriForGetList: string = "/management/configuration/stores?skip=" + validSkip + "&take=" + validTake;
var validUriForPostAndPut: string = "/management/configuration/store/";
var validStoreForPost: Models.Management.Configuration.Store = <Models.Management.Configuration.Store>{
    Name: "Relationed Store",
    Description: "The Description",
    Address: "Sample Data Address",
    Location: {
        "Longitude": 23.54,
        "Latitude": 35.41
    }
}
var validStoreForPut: Models.Management.Configuration.Store = <Models.Management.Configuration.Store>{
    Id: 1004,
    Name: "Relationed Store",
    Description: "The Description",
    Address: "Sample Data Address",
    Location: {
        "Longitude": 23.54,
        "Latitude": 35.41
    }
}

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
            .toThrow(new Error("storeId must be greater than or equal to 1"));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty"));
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
        testClient.delete(validStoreId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.delete(validStoreId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();

        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("storeId could not be null or empty"));

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
            .toThrow(new Error("storeId must be greater than or equal to 1"));
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
        testClient.delete(validStoreId, () => { }, expectedError);
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
        testClient.delete(validStoreId, () => { }, expectedError);
    });
});

describe('StoreClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();

        expect(() => { testClient.getList(null, 1, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(undefined, 1, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(-5, 1, suc => { }, err => { }) })
            .toThrow(new Error("skip must be greater than or equal to 0"));

        expect(() => { testClient.getList(5, null, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(5, undefined, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(5, 0, suc => { }, err => { }) })
            .toThrow(new Error("take must be greater than or equal to 1"));

    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Results": [
                {
                    "Id": 1004,
                    "Name": "Relationed Store",
                    "Description": "The Description",
                    "Address": "Adres",
                    "Location": {
                        "Longitude": 23.54,
                        "Latitude": 35.41
                    },
                    "Licenses": [
                        {
                            "Id": 4,
                            "Username": "SampleLicenceUsername",
                            "Name": "Sample Licence",
                            "Password": "123",
                            "StoreId": 1004
                        }
                    ]
                },
                {
                    "Id": 1011,
                    "Name": "New Store",
                    "Description": "Description of New Store",
                    "Address": "Adres",
                    "Location": {
                        "Longitude": 37.65,
                        "Latitude": 23.41
                    },
                    "Licenses": []
                }
            ],
            "TotalCount": 6
        });

        var expectedSuccess = (list: Models.PaginatedContainer<Models.Management.Configuration.Store>) => {
            expect(list.TotalCount).toEqual(6);
            expect(list.Results[0].Id).toEqual(1004);
            expect(list.Results[0].Name).toEqual("Relationed Store");
            expect(list.Results[0].Description).toEqual("The Description");
            expect(list.Results[0].Address).toEqual("Adres");
            expect(list.Results[0].Location.Longitude).toEqual(23.54);
            expect(list.Results[0].Location.Latitude).toEqual(35.41);
            expect(list.Results[0].Licenses.length).toEqual(1);
            expect(list.Results[0].Licenses[0].Id).toEqual(4);
            expect(list.Results[0].Licenses[0].Username).toEqual("SampleLicenceUsername");
            expect(list.Results[0].Licenses[0].Name).toEqual("Sample Licence");
            expect(list.Results[0].Licenses[0].Password).toEqual("123");
            expect(list.Results[0].Licenses[0].StoreId).toEqual(1004);

            expect(list.Results[1].Id).toEqual(1011);
            expect(list.Results[1].Name).toEqual("New Store");
            expect(list.Results[1].Description).toEqual("Description of New Store");
            expect(list.Results[1].Address).toEqual("Adres");
            expect(list.Results[1].Location.Longitude).toEqual(37.65);
            expect(list.Results[1].Location.Latitude).toEqual(23.41);
            expect(list.Results[1].Licenses.length).toEqual(0);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});

describe('StoreClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostAndPut);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 84,
            "Name": "Relationed Store",
            "Description": "The Description",
            "Address": "Sample Data Address",
            "Location": {
                "Longitude": 23.54,
                "Latitude": 35.41
            },
            "Licenses": [
            ]
        });

        var expectedSuccess = (store: Models.Management.Configuration.Store) => {
            expect(store.Id).toEqual(84);
            expect(store.Name).toEqual("Relationed Store");
            expect(store.Description).toEqual("The Description");
            expect(store.Address).toEqual("Sample Data Address");
            expect(store.Location.Longitude).toEqual(23.54);
            expect(store.Location.Latitude).toEqual(35.41);
            expect(store.Licenses.length).toEqual(0);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Configuration.Store) => {
            expect(request).toEqual({
                "Name": "Relationed Store",
                "Description": "The Description",
                "Address": "Sample Data Address",
                "Location": {
                    "Longitude": 23.54,
                    "Latitude": 35.41
                }
            });
            expect(request.Name).toEqual(validStoreForPost.Name);
            expect(request.Description).toEqual(validStoreForPost.Description);
            expect(request.Address).toEqual(validStoreForPost.Address);
            expect(request.Location.Longitude).toEqual(validStoreForPost.Location.Longitude);
            expect(request.Location.Latitude).toEqual(validStoreForPost.Location.Latitude);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();

        expect(() => {
            var nullStoreName = <Models.Management.Configuration.Store>{
                Name: null
            };

            testClient.post(nullStoreName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var undefinedStoreName = <Models.Management.Configuration.Store>{
                Name: undefined
            };

            testClient.post(undefinedStoreName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.post(validStoreForPost, suc => { }, expectedError);
    });
});

describe('StoreClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostAndPut);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.put(validStoreForPut, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.put(validStoreForPut, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.put(validStoreForPut, suc => { }, err => { });
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
            expect(store.Licenses.length).toEqual(1);
            expect(store.Licenses[0].Id).toEqual(3);
            expect(store.Licenses[0].Username).toEqual("DebugApiManagementTestUser");
            expect(store.Licenses[0].Name).toEqual("Debug Management Api User");
            expect(store.Licenses[0].Password).toEqual("DebugApiManagementTestPass");
            expect(store.Licenses[0].StoreId).toEqual(1004);
        };

        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.put(validStoreForPut, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Configuration.Store) => {
            expect(request).toEqual({
                "Id": 1004,
                "Name": "Relationed Store",
                "Description": "The Description",
                "Address": "Sample Data Address",
                "Location": {
                    "Longitude": 23.54,
                    "Latitude": 35.41
                }
            });
            expect(request.Id).toEqual(validStoreForPut.Id);
            expect(request.Name).toEqual(validStoreForPut.Name);
            expect(request.Description).toEqual(validStoreForPut.Description);
            expect(request.Address).toEqual(validStoreForPut.Address);
            expect(request.Location.Longitude).toEqual(validStoreForPut.Location.Longitude);
            expect(request.Location.Latitude).toEqual(validStoreForPut.Location.Latitude);
        };


        TestHelpers.RequestParseTest($, parseMethod);
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();
        testClient.put(validStoreForPut, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.Store.StoreClient();

        expect(() => {
            var nullStoreName = <Models.Management.Configuration.Store>{
                Id: validStoreId,
                Name: null
            };

            testClient.put(nullStoreName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var undefinedStoreName = <Models.Management.Configuration.Store>{
                Id: validStoreId,
                Name: undefined
            };

            testClient.put(undefinedStoreName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var undefinedStoreName = <Models.Management.Configuration.Store>{
                Id: validStoreId,
                Name: ""
            };

            testClient.put(undefinedStoreName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var nullStoreName = <Models.Management.Configuration.Store>{
                Id: null,
                Name: "Store"
            };

            testClient.put(nullStoreName, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var undefinedStoreName = <Models.Management.Configuration.Store>{
                Id: undefined,
                Name: "Store"
            };

            testClient.put(undefinedStoreName, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var undefinedStoreName = <Models.Management.Configuration.Store>{
                Id: -5,
                Name: "Store"
            };

            testClient.put(undefinedStoreName, suc => { }, err => { })
        }).toThrow(new Error("id must be greater than or equal to 1"));
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
        testClient.put(validStoreForPut, succ=> { }, expectedError);
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
        testClient.put(validStoreForPut, succ=> { }, expectedError);
    });
});

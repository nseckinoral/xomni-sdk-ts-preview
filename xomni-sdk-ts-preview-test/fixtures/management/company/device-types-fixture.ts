TestHelpers.InitalizeTestContext();
var validId: number = 1;
var validSkip: number = 1;
var validTake: number = 2;
var validUri: string = "/management/company/devicetypes";

var requestAndResponseJson = {
    "Id": 15,
    "Description": "Sample Device Type Description"
};

var validUriForDeleteAndGet: string = validUri + "/" + validId;
var validUriForGetList: string = validUri + "?skip=" + validSkip + "&take=" + validTake;

var validDeviceTypeForPost = <Models.Management.Company.DeviceType> {
    Description: "Sample Device Type Description"
};

var validDeviceTypeForPut = <Models.Management.Company.DeviceType> {
    Id: 15,
    Description: "Sample Device Type Description"
};


describe('DeviceTypesClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, requestAndResponseJson);

        var expectedSuccess = (deviceType: Models.Management.Company.DeviceType) => {
            expect(deviceType.Id).toEqual(15);
            expect(deviceType.Description).toEqual("Sample Device Type Description");
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.DeviceType) => {
            expect(request).toEqual({
                "Description": "Sample Device Type Description",
            });
            expect(request.Description).toEqual(validDeviceTypeForPost.Description);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();

        expect(() => {
            testClient.post(null, suc => { }, err => { })
        }).toThrow(new Error("deviceType could not be null or empty"));

        expect(() => {
            testClient.post(undefined, suc => { }, err => { })
        }).toThrow(new Error("deviceType could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Description: null
            };

            testClient.post(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Description: undefined
            };

            testClient.post(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDescription: string;
            for (var i = 0; i < 200; i++) {
                invalidDescription += "x";
            }
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Description: invalidDescription
            };

            testClient.post(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description length could not be greater than 150"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceTypeForPost, suc => { }, expectedError);
    });
});

describe('DeviceTypesClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, requestAndResponseJson);

        var expectedSuccess = (deviceType: Models.Management.Company.DeviceType) => {
            expect(deviceType.Id).toEqual(15);
            expect(deviceType.Description).toEqual("Sample Device Type Description");
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.DeviceType) => {
            expect(request).toEqual(requestAndResponseJson);
            expect(request.Id).toEqual(validDeviceTypeForPut.Id);
            expect(request.Description).toEqual(validDeviceTypeForPut.Description);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();

        expect(() => {
            testClient.put(null, suc => { }, err => { })
        }).toThrow(new Error("deviceType could not be null or empty"));

        expect(() => {
            testClient.put(undefined, suc => { }, err => { })
        }).toThrow(new Error("deviceType could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: null,
                Description: "Description"
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: undefined,
                Description: "Description"
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: -1,
                Description: "Description"
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("id must be greater than or equal to 1"));


        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: validId,
                Description: null
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: validId,
                Description: undefined
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDescription: string;
            for (var i = 0; i < 200; i++) {
                invalidDescription += "x";
            }
            var invalidDeviceType = <Models.Management.Company.DeviceType> {
                Id: validId,
                Description: invalidDescription
            };

            testClient.put(invalidDeviceType, suc => { }, err => { })
        }).toThrow(new Error("description length could not be greater than 150"));
    });

    it("Should parse api exception response successfully (403)", () => {
        TestHelpers.APIExceptionResponseTest($, 403);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(403);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, expectedError);
    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, expectedError);
    });

    it("Should parse api exception response successfully (409)", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.put(validDeviceTypeForPut, suc => { }, expectedError);
    });
});

describe('DeviceTypesClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDeleteAndGet);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
            .toThrow(new Error("deviceTypeId must be greater than or equal to 1"));

        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("deviceTypeId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("deviceTypeId could not be null or empty"));
    });

    it("Should parse api exception response successfully (400)", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, expectedError);
    });

    it("Should parse api exception response successfully (403)", () => {
        TestHelpers.APIExceptionResponseTest($, 403);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(403);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, expectedError);
    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.delete(validId, () => { }, expectedError);
    });

});

describe('DeviceTypesClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDeleteAndGet);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.get(validId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.get(validId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.get(validId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();

        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("deviceTypeId must be greater than or equal to 1"));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("deviceTypeId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("deviceTypeId could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, requestAndResponseJson);

        var expectedSuccess = (deviceType: Models.Management.Company.DeviceType) => {
            expect(deviceType.Id).toEqual(15);
            expect(deviceType.Description).toEqual("Sample Device Type Description");
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.get(validId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.get(validId, suc=> { }, expectedError);
    });
});

describe('DeviceTypesClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();

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
                    "Id": 1,
                    "Description": " Sample Device Type Description "
                },
                {
                    "Id": 2,
                    "Description": " Sample Device Type Description 2"
                },
                {
                    "Id": 3,
                    "Description": " Sample Device Type Description 3"
                }
            ],
            "TotalCount": 3
        });

        var expectedSuccess = (list: Models.PaginatedContainer<Models.Management.Company.DeviceType>) => {
            expect(list.TotalCount).toEqual(3);
            expect(list.Results.length).toEqual(3);
            expect(list.Results[0].Id).toEqual(1);
            expect(list.Results[0].Description).toEqual(" Sample Device Type Description ");
            expect(list.Results[1].Id).toEqual(2);
            expect(list.Results[1].Description).toEqual(" Sample Device Type Description 2");
            expect(list.Results[2].Id).toEqual(3);
            expect(list.Results[2].Description).toEqual(" Sample Device Type Description 3");
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});
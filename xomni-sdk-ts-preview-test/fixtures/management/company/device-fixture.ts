TestHelpers.InitalizeTestContext();
var validrelatedLicenceId = 1;
var validSkip = 1;
var validTake = 2;
var validUriForDeleteAndGet = "/management/company/devices/" + TestHelpers.uniqueId + "?relatedLicenceId=" + validrelatedLicenceId;
var validUriForGetList = "/management/company/devices?skip=" + validSkip + "&take=" + validTake;
var validUriForPost = "/management/company/devices";
var validUriForPut = "/management/company/devices/"+TestHelpers.uniqueId;

var validDeviceForPost: Models.Management.Company.Device = <Models.Management.Company.Device>{
    DeviceId: "def1d372-21b5-49af-824b-2d62e3e9f840",
    Description: "Test Device",
    DeviceTypeId: 1,
    ExpirationDate: new Models.UTCDate("2014-08-08T12:37:28.8573855+03:00"),
    RelatedLicenceId: 5
};
var validDeviceForPut: Models.Management.Company.Device = <Models.Management.Company.Device>{
    Description: "Test Device",
    DeviceTypeId: 2,
    ExpirationDate: new Models.UTCDate("2014-08-08T15:30:27.2415417+03:00"),
    RelatedLicenceId: 10
};

var validResponseJson = {
    "RelatedLicenceId": 7,
    "RelatedLicenceName": "Test Licence",
    "DeviceTypeId": 1,
    "DeviceTypeDescription": "InStore",
    "ExpirationDate": "2014-08-08T13:18:45.473",
    "DeviceId": "f98d0f51-d748-442a-88eb-ffbd4ee3d626",
    "Description": "Test Device"
};

describe('DeviceClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDeleteAndGet);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.delete(TestHelpers.uniqueId, validrelatedLicenceId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.delete(TestHelpers.uniqueId, validrelatedLicenceId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.delete(TestHelpers.uniqueId, validrelatedLicenceId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.Device.DeviceClient();

        expect(() => { testClient.delete(null, validrelatedLicenceId, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(undefined, validrelatedLicenceId, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(TestHelpers.uniqueId, null, () => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => { testClient.delete(TestHelpers.uniqueId, undefined, () => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => { testClient.delete(TestHelpers.uniqueId, 0, () => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId must be greater than or equal to 1"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.delete(TestHelpers.uniqueId, validrelatedLicenceId, () => { }, expectedError);
    });
});

describe('DeviceClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.Device.DeviceClient();

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
                    "RelatedLicenceId": 1,
                    "RelatedLicenceName": "Test Licence",
                    "DeviceTypeId": 1,
                    "DeviceTypeDescription": "InStore",
                    "ExpirationDate": null,
                    "DeviceId": "18b808c3-d3ef-4fc3-a3c6-c773d3fd2b8f",
                    "Description": "Test Device 1"
                },
                {
                    "RelatedLicenceId": 1,
                    "RelatedLicenceName": "Test Licence",
                    "DeviceTypeId": 1,
                    "DeviceTypeDescription": "InStore",
                    "ExpirationDate": null,
                    "DeviceId": "ed4c7d90-1f7d-46fe-8db1-76812e26aa94",
                    "Description": "Test Device 2"
                },
                {
                    "RelatedLicenceId": 6,
                    "RelatedLicenceName": "Test Licence 1",
                    "DeviceTypeId": 1,
                    "DeviceTypeDescription": "InStore",
                    "ExpirationDate": "2014-08-08T12:56:46.217",
                    "DeviceId": "7f83fd6f-0ff8-4a21-b6df-e6da6562b500",
                    "Description": "Test Device 3"
                }
            ],
            "TotalCount": 3
        });

        var expectedSuccess = (list: Models.PaginatedContainer<Models.Management.Company.Device>) => {
            expect(list.TotalCount).toEqual(3);
            expect(list.Results.length).toEqual(3);
            expect(list.Results[0].RelatedLicenceId).toEqual(1);
            expect(list.Results[0].RelatedLicenceName).toEqual("Test Licence");
            expect(list.Results[0].DeviceTypeId).toEqual(1);
            expect(list.Results[0].DeviceTypeDescription).toEqual("InStore");
            expect(list.Results[0].ExpirationDate).toEqual(null);
            expect(list.Results[0].DeviceId).toEqual("18b808c3-d3ef-4fc3-a3c6-c773d3fd2b8f");
            expect(list.Results[0].Description).toEqual("Test Device 1");
            expect(list.Results[1].RelatedLicenceId).toEqual(1);
            expect(list.Results[1].RelatedLicenceName).toEqual("Test Licence");
            expect(list.Results[1].DeviceTypeId).toEqual(1);
            expect(list.Results[1].DeviceTypeDescription).toEqual("InStore");
            expect(list.Results[1].ExpirationDate).toEqual(null);
            expect(list.Results[1].DeviceId).toEqual("ed4c7d90-1f7d-46fe-8db1-76812e26aa94");
            expect(list.Results[1].Description).toEqual("Test Device 2");
            expect(list.Results[2].RelatedLicenceId).toEqual(6);
            expect(list.Results[2].RelatedLicenceName).toEqual("Test Licence 1");
            expect(list.Results[2].DeviceTypeId).toEqual(1);
            expect(list.Results[2].DeviceTypeDescription).toEqual("InStore");
            expect(list.Results[2].ExpirationDate).toEqual(new Models.UTCDate("2014-08-08T12:56:46.217"));
            expect(list.Results[2].DeviceId).toEqual("7f83fd6f-0ff8-4a21-b6df-e6da6562b500");
            expect(list.Results[2].Description).toEqual("Test Device 3");
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});

describe('DeviceClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDeleteAndGet);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.get(TestHelpers.uniqueId, validrelatedLicenceId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.get(TestHelpers.uniqueId, validrelatedLicenceId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.get(TestHelpers.uniqueId, validrelatedLicenceId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.Device.DeviceClient();

        expect(() => { testClient.get(null, validrelatedLicenceId, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.get(undefined, validrelatedLicenceId, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.get(TestHelpers.uniqueId, null, suc => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => { testClient.get(TestHelpers.uniqueId, undefined, () => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => { testClient.get(TestHelpers.uniqueId, 0, () => { }, err => { }) })
            .toThrow(new Error("relatedLicenceId must be greater than or equal to 1"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validResponseJson);

        var expectedSuccess = (device: Models.Management.Company.Device) => {
            expect(device.RelatedLicenceId).toEqual(7);
            expect(device.RelatedLicenceName).toEqual("Test Licence");
            expect(device.DeviceTypeId).toEqual(1);
            expect(device.DeviceTypeDescription).toEqual("InStore");
            expect(device.ExpirationDate).toEqual(new Models.UTCDate("2014-08-08T13:18:45.473"));
            expect(device.DeviceId).toEqual("f98d0f51-d748-442a-88eb-ffbd4ee3d626");
            expect(device.Description).toEqual("Test Device");
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.get(TestHelpers.uniqueId, validrelatedLicenceId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.get(TestHelpers.uniqueId, validrelatedLicenceId, () => { }, expectedError);
    });
});

describe('DeviceClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPost);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validResponseJson);

        var expectedSuccess = (device: Models.Management.Company.Device) => {
            expect(device.RelatedLicenceId).toEqual(7);
            expect(device.RelatedLicenceName).toEqual("Test Licence");
            expect(device.DeviceTypeId).toEqual(1);
            expect(device.DeviceTypeDescription).toEqual("InStore");
            expect(device.ExpirationDate).toEqual(new Models.UTCDate("2014-08-08T13:18:45.473"));
            expect(device.DeviceId).toEqual("f98d0f51-d748-442a-88eb-ffbd4ee3d626");
            expect(device.Description).toEqual("Test Device");
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Device) => {
            expect(request.DeviceId).toEqual(validDeviceForPost.DeviceId);
            expect(request.Description).toEqual(validDeviceForPost.Description);
            expect(request.DeviceTypeId).toEqual(validDeviceForPost.DeviceTypeId);
            expect(request.ExpirationDate).toEqual(validDeviceForPost.ExpirationDate.toUTCString());
            expect(request.RelatedLicenceId).toEqual(validDeviceForPost.RelatedLicenceId);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.Device.DeviceClient();

        expect(() => {
            testClient.post(null, suc => { }, err => { })
        }).toThrow(new Error("device could not be null or empty"));

        expect(() => {
            testClient.post(undefined, suc => { }, err => { })
        }).toThrow(new Error("device could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: null,
                Description: "Description",
                RelatedLicenceId: 1
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("deviceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: undefined,
                Description: "Description",
                RelatedLicenceId: 1
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("deviceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: "DeviceId",
                Description: null,
                RelatedLicenceId: 1
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: "DeviceId",
                Description: undefined,
                RelatedLicenceId: 1
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: "DeviceId",
                Description: "Description",
                RelatedLicenceId: null
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: "DeviceId",
                Description: "Description",
                RelatedLicenceId: undefined
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                DeviceId: "DeviceId",
                Description: "Description",
                RelatedLicenceId: -1
            };

            testClient.post(invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId must be greater than or equal to 1"));
    });

    it("Should parse api exception response successfully (409)", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, suc => { }, expectedError);
    });

    it("Should parse api exception response successfully (400)", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.post(validDeviceForPost, suc => { }, expectedError);
    });
}); 

describe('DeviceClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPut);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId,validDeviceForPut, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validResponseJson);

        var expectedSuccess = (device: Models.Management.Company.Device) => {
            expect(device.RelatedLicenceId).toEqual(7);
            expect(device.RelatedLicenceName).toEqual("Test Licence");
            expect(device.DeviceTypeId).toEqual(1);
            expect(device.DeviceTypeDescription).toEqual("InStore");
            expect(device.ExpirationDate).toEqual(new Models.UTCDate("2014-08-08T13:18:45.473"));
            expect(device.DeviceId).toEqual("f98d0f51-d748-442a-88eb-ffbd4ee3d626");
            expect(device.Description).toEqual("Test Device");
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Device) => {
            expect(request.Description).toEqual("Test Device");
            expect(request.DeviceTypeId).toEqual(2);
            expect(request.RelatedLicenceId).toEqual(10);

            expect(request.Description).toEqual(validDeviceForPut.Description);
            expect(request.DeviceTypeId).toEqual(validDeviceForPut.DeviceTypeId);
            expect(request.ExpirationDate).toEqual(validDeviceForPut.ExpirationDate.toUTCString());
            expect(request.RelatedLicenceId).toEqual(validDeviceForPut.RelatedLicenceId);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.Device.DeviceClient();

        expect(() => {
            testClient.put(null, validDeviceForPut, suc => { }, err => { })
        }).toThrow(new Error("deviceId could not be null or empty"));

        expect(() => {
            testClient.put(undefined, validDeviceForPut, suc => { }, err => { })
        }).toThrow(new Error("deviceId could not be null or empty"));

        expect(() => {
            testClient.put(TestHelpers.uniqueId, null, suc => { }, err => { })
        }).toThrow(new Error("device could not be null or empty"));

        expect(() => {
            testClient.put(TestHelpers.uniqueId, undefined, suc => { }, err => { })
        }).toThrow(new Error("device could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                Description: null,
                RelatedLicenceId: 1
            };

            testClient.put(TestHelpers.uniqueId,invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                Description: undefined,
                RelatedLicenceId: 1
            };

            testClient.put(TestHelpers.uniqueId,invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("description could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                Description: "Description",
                RelatedLicenceId: null
            };

            testClient.put(TestHelpers.uniqueId,invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                Description: "Description",
                RelatedLicenceId: undefined
            };

            testClient.put(TestHelpers.uniqueId,invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId could not be null or empty"));

        expect(() => {
            var invalidDevice = <Models.Management.Company.Device> {
                Description: "Description",
                RelatedLicenceId: -1
            };

            testClient.put(TestHelpers.uniqueId, invalidDevice, suc => { }, err => { })
        }).toThrow(new Error("relatedLicenceId must be greater than or equal to 1"));
    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, suc => { }, expectedError);
    });

    it("Should parse api exception response successfully (400)", () => {
        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.Device.DeviceClient();
        testClient.put(TestHelpers.uniqueId, validDeviceForPut, suc => { }, expectedError);
    });
}); 

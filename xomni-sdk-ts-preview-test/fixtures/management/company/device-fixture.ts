TestHelpers.InitalizeTestContext();
var validrelatedLicenceId = 1;
var validSkip = 1;
var validTake = 2;
var validUriForDeleteAndGet = "/management/company/devices/" + TestHelpers.uniqueId + "?relatedLicenceId=" + validrelatedLicenceId;
var validUriForGetList = "/management/company/devices?skip=" + validSkip + "&take=" + validTake;

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
            expect(list.Results[2].ExpirationDate).toEqual(new Date("2014-08-08T12:56:46.217"));
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
        TestHelpers.ResponseParseTest($, {
            "RelatedLicenceId": 7,
            "RelatedLicenceName": "Test Licence",
            "DeviceTypeId": 1,
            "DeviceTypeDescription": "InStore",
            "ExpirationDate": "2014-08-08T13:18:45.473",
            "DeviceId": "f98d0f51-d748-442a-88eb-ffbd4ee3d626",
            "Description": "Test Device"
        });

        var expectedSuccess = (device: Models.Management.Company.Device) => {
            expect(device.RelatedLicenceId).toEqual(7);
            expect(device.RelatedLicenceName).toEqual("Test Licence");
            expect(device.DeviceTypeId).toEqual(1);
            expect(device.DeviceTypeDescription).toEqual("InStore");
            expect(device.ExpirationDate).toEqual(new Date("2014-08-08T13:18:45.473"));
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
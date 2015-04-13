TestHelpers.InitalizeTestContext();
var validUri: string = "/management/company/devicetypes";

var validDeviceType = <Models.Management.Company.DeviceType> {
    Description: "Sample Device Type Description"
};

describe('DeviceTypesClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceType, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceType, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceType, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 15,
            "Description": "Sample Device Type Description"
        });

        var expectedSuccess = (deviceType: Models.Management.Company.DeviceType) => {
            expect(deviceType.Id).toEqual(15);
            expect(deviceType.Description).toEqual("Sample Device Type Description");
        };

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceType, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.DeviceType) => {
            expect(request).toEqual({
                "Description": "Sample Device Type Description",
            });
            expect(request.Description).toEqual(validDeviceType.Description);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceTypes.DeviceTypesClient();
        testClient.post(validDeviceType, succ=> { }, err => { });
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
        testClient.post(validDeviceType, suc => { }, expectedError);
    });
});
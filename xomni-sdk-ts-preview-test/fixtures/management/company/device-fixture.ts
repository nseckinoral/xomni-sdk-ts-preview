TestHelpers.InitalizeTestContext();
var validrelatedLicenceId = 1;
var validUri = "/management/company/devices/" + TestHelpers.uniqueId + "?relatedLicenceId=" + validrelatedLicenceId;

describe('DeviceClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
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

TestHelpers.InitalizeTestContext();
var validSkip: number = 1;
var validTake: number = 2;
var validLicenseId: number = 1;
var validUri: string = "/management/security/license/" + validLicenseId;
var validUriForGetList = "/management/security/licenses?skip=" + validSkip + "&take=" + validTake;;

describe('LicenseClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.get(validLicenseId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.get(validLicenseId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.get(validLicenseId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("licenseId must be greater than or equal to 0"));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("licenseId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("licenseId could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 4,
            "Username": "SampleLicenceUsername",
            "Name": "Sample Licence",
            "Password": "123",
            "StoreId": 78
        });

        var expectedSuccess = (license: Models.Management.Security.License) => {
            expect(license.Id).toEqual(4);
            expect(license.Username).toEqual("SampleLicenceUsername");
            expect(license.Name).toEqual("Sample Licence");
            expect(license.Password).toEqual("123");
            expect(license.StoreId).toEqual(78);
        };

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.get(validLicenseId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.get(validLicenseId, suc=> { }, expectedError);
    });
});

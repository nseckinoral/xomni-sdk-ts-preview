TestHelpers.InitalizeTestContext();
var validSkip: number = 1;
var validTake: number = 2;
var validLicenseId: number = 1;
var validUriForGet: string = "/management/security/license/" + validLicenseId;
var validUriForGetList = "/management/security/licenses?skip=" + validSkip + "&take=" + validTake;;

describe('LicenseClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGet);
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

describe('LicenseClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => { testClient.getList(null, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(undefined, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(-5, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip must be greater than or equal to 0"));

        expect(() => { testClient.getList(validSkip, null, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(validSkip, undefined, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(validSkip, -5, suc => { }, err => { }) })
            .toThrow(new Error("take must be greater than or equal to 1"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Results": [
                {
                    "Id": 1,
                    "Username": "DebugApiTestUser",
                    "Name": "Debug Public Api User",
                    "Password": "DebugApiTestPass",
                    "StoreId": 56
                },
                {
                    "Id": 4,
                    "Username": "SampleLicenceUsername",
                    "Name": "Sample Licence Record",
                    "Password": "123",
                    "StoreId": 78
                }
            ],
            "TotalCount": 2
        });

        var expectedSuccess = (licenses: Models.PaginatedContainer<Models.Management.Security.License>) => {
            expect(licenses.Results.length).toEqual(2);
            expect(licenses.TotalCount).toEqual(2);
            expect(licenses.Results[0].Id).toEqual(1);
            expect(licenses.Results[0].Username).toEqual("DebugApiTestUser");
            expect(licenses.Results[0].Name).toEqual("Debug Public Api User");
            expect(licenses.Results[0].Password).toEqual("DebugApiTestPass");
            expect(licenses.Results[0].StoreId).toEqual(56);

            expect(licenses.Results[1].Id).toEqual(4);
            expect(licenses.Results[1].Username).toEqual("SampleLicenceUsername");
            expect(licenses.Results[1].Name).toEqual("Sample Licence Record");
            expect(licenses.Results[1].Password).toEqual("123");
            expect(licenses.Results[1].StoreId).toEqual(78);
        };

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});
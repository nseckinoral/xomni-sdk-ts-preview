TestHelpers.InitalizeTestContext();
var validSkip: number = 1;
var validTake: number = 2;
var validLicenseId: number = 1;
var validUriForGet: string = "/management/security/license/" + validLicenseId;
var validOnlyUnassignedUsers: boolean = true;
var validUriForGetList = "/management/security/licenses?skip=" + validSkip + "&take=" + validTake;;
var validUriForPostPutAndDelete: string = "/management/security/license/";
var validUriForGetAuditLogs: string = "/management/security/licenses/audits?skip=" + validSkip + "&take=" + validTake;
var validUriForGetUnassignedLicenses: string = "/management/security/licenses?onlyUnassignedUsers=" + validOnlyUnassignedUsers;

var validLicenseForPost: Models.Management.Security.License = <Models.Management.Security.License>{
    Username: "SampleLicenceUsername",
    Name: "Sample Licence",
    Password: "123",
    StoreId: 78
};

var validLicenseForPut: Models.Management.Security.License = <Models.Management.Security.License>{
    Id: 4,
    Username: "SampleLicenceUsername",
    Name: "Sample Licence",
    Password: "123",
    StoreId: 78
};

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

describe('LicenseClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostPutAndDelete);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.post(validLicenseForPost, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.post(validLicenseForPost, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.post(validLicenseForPost, suc => { }, err => { });
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
        testClient.post(validLicenseForPost, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Security.License) => {
            expect(request).toEqual({
                "Username": "SampleLicenceUsername",
                "Name": "Sample Licence",
                "Password": "123",
                "StoreId": 78
            });
            expect(request.Username).toEqual(validLicenseForPost.Username);
            expect(request.Name).toEqual(validLicenseForPost.Name);
            expect(request.Password).toEqual(validLicenseForPost.Password);
            expect(request.StoreId).toEqual(validLicenseForPost.StoreId);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.post(validLicenseForPost, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => {
            testClient.post(null, suc => { }, err => { })
        }).toThrow(new Error("license could not be null or empty"));

        expect(() => {
            testClient.post(undefined, suc => { }, err => { })
        }).toThrow(new Error("license could not be null or empty"));

        expect(() => {
            var nullUserName = <Models.Management.Security.License>{
                Username: null,
                Password: "Password"
            };

            testClient.post(nullUserName, suc => { }, err => { })
        }).toThrow(new Error("username could not be null or empty"));

        expect(() => {
            var undefinedUserName = <Models.Management.Security.License>{
                Username: undefined,
                Password: "Password"
            };

            testClient.post(undefinedUserName, suc => { }, err => { })
        }).toThrow(new Error("username could not be null or empty"));

        expect(() => {
            var nullPassword = <Models.Management.Security.License>{
                Username: "Username",
                Password: null
            };

            testClient.post(nullPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));

        expect(() => {
            var undefinedPassword = <Models.Management.Security.License>{
                Username: "Username",
                Password: undefined
            };

            testClient.post(undefinedPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.post(validLicenseForPost, suc => { }, expectedError);
    });
});

describe('LicenseClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostPutAndDelete);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.put(validLicenseForPut, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.put(validLicenseForPut, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.put(validLicenseForPut, suc => { }, err => { });
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
        testClient.put(validLicenseForPut, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Security.License) => {
            expect(request).toEqual({
                "Id": 4,
                "Username": "SampleLicenceUsername",
                "Name": "Sample Licence",
                "Password": "123",
                "StoreId": 78
            });
            expect(request.Id).toEqual(validLicenseForPut.Id);
            expect(request.Username).toEqual(validLicenseForPut.Username);
            expect(request.Name).toEqual(validLicenseForPut.Name);
            expect(request.Password).toEqual(validLicenseForPut.Password);
            expect(request.StoreId).toEqual(validLicenseForPut.StoreId);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.put(validLicenseForPut, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => {
            testClient.put(null, suc => { }, err => { })
        }).toThrow(new Error("license could not be null or empty"));

        expect(() => {
            testClient.put(undefined, suc => { }, err => { })
        }).toThrow(new Error("license could not be null or empty"));

        expect(() => {
            var nullId = <Models.Management.Security.License>{
                Id: null,
                Username: "Username",
                Password: "Password"
            };

            testClient.put(nullId, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var undefinedId = <Models.Management.Security.License>{
                Id: undefined,
                Username: "Username",
                Password: "Password"
            };

            testClient.put(undefinedId, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var nullUserName = <Models.Management.Security.License>{
                Id: 1,
                Username: null,
                Password: "Password"
            };

            testClient.put(nullUserName, suc => { }, err => { })
        }).toThrow(new Error("username could not be null or empty"));

        expect(() => {
            var undefinedUserName = <Models.Management.Security.License>{
                Id: 1,
                Username: undefined,
                Password: "Password"
            };

            testClient.put(undefinedUserName, suc => { }, err => { })
        }).toThrow(new Error("username could not be null or empty"));

        expect(() => {
            var nullPassword = <Models.Management.Security.License>{
                Id: 1,
                Username: "Username",
                Password: null
            };

            testClient.put(nullPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));

        expect(() => {
            var undefinedPassword = <Models.Management.Security.License>{
                Id: 1,
                Username: "Username",
                Password: undefined
            };

            testClient.put(undefinedPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));
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
        testClient.put(validLicenseForPut, suc => { }, expectedError);
    });
});

describe('LicenseClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostPutAndDelete);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.delete(validLicenseId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.delete(validLicenseId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.delete(validLicenseId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
            .toThrow(new Error("licenseId must be greater than or equal to 0"));

        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("licenseId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("licenseId could not be null or empty"));
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
        testClient.delete(validLicenseId, () => { }, expectedError);
    });
});

describe('LicenseClient.getAuditLogs', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetAuditLogs);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getAuditLogs(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getAuditLogs(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getAuditLogs(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => { testClient.getAuditLogs(null, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getAuditLogs(undefined, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getAuditLogs(-5, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip must be greater than or equal to 0"));

        expect(() => { testClient.getAuditLogs(validSkip, null, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getAuditLogs(validSkip, undefined, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getAuditLogs(validSkip, -5, suc => { }, err => { }) })
            .toThrow(new Error("take must be greater than or equal to 1"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Results": [
                {
                    "Username": "TestUser",
                    "Name": "Test License User",
                    "CreatedAt": "2013-10-08T00:00:00",
                    "DeletedAt": "2013-10-09T00:00:00",
                    "CreatedApiUserName": "admin",
                    "DeletedApiUserName": "admin"
                }
            ],
            "TotalCount": 10
        });

        var expectedSuccess = (licenseAuditLogs: Models.PaginatedContainer<Models.Management.Security.LicenseAuditLogs>) => {
            expect(licenseAuditLogs.Results.length).toEqual(1);
            expect(licenseAuditLogs.TotalCount).toEqual(10);
            expect(licenseAuditLogs.Results[0].Username).toEqual("TestUser");
            expect(licenseAuditLogs.Results[0].Name).toEqual("Test License User");
            expect(licenseAuditLogs.Results[0].CreatedAt).toEqual("2013-10-08T00:00:00");
            expect(licenseAuditLogs.Results[0].DeletedAt).toEqual("2013-10-09T00:00:00");
            expect(licenseAuditLogs.Results[0].CreatedApiUserName).toEqual("admin");
            expect(licenseAuditLogs.Results[0].DeletedApiUserName).toEqual("admin");
        };

        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getAuditLogs(validSkip, validTake, expectedSuccess, err => { });
    });
});

describe('LicenseClient.getUnassignedLicenses', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetUnassignedLicenses);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getUnassignedLicenses(validOnlyUnassignedUsers, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getUnassignedLicenses(validOnlyUnassignedUsers, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.License.LicenseClient();
        testClient.getUnassignedLicenses(validOnlyUnassignedUsers, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.License.LicenseClient();

        expect(() => { testClient.getUnassignedLicenses(null, suc => { }, err => { }) })
            .toThrow(new Error("onlyUnassignedUsers could not be null or empty"));

        expect(() => { testClient.getUnassignedLicenses(undefined, suc => { }, err => { }) })
            .toThrow(new Error("onlyUnassignedUsers could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
           "Results":[
              {
                 "Id":1,
                 "Username":"DebugApiTestUser",
                 "Name":"Debug Public Api User",
                 "Password":"DebugApiTestPass",
                 "StoreId":56
              },
              {
                 "Id":4,
                 "Username":"SampleLicenceUsername",
                 "Name":"Sample Licence Record",
                 "Password":"123",
                 "StoreId":78
              }
           ],
           "TotalCount":2
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
        testClient.getUnassignedLicenses(validOnlyUnassignedUsers, expectedSuccess, err => { });
    });
});

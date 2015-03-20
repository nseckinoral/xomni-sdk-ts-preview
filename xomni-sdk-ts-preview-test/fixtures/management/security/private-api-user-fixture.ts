TestHelpers.InitalizeTestContext();
var validPrivateApiUserId: number = 2;
var validSkip: number = 1;
var validTake: number = 2;
var validUriForGetList: string = "/management/security/privateapiusers?skip=" + validSkip + "&take=" + validTake;
var validUri: string = "/management/security/privateapiuser/" + validPrivateApiUserId;

describe('PrivateApiUserClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Results": [
                {
                    "Id": 2,
                    "Username": "DebugApiPrivateTestUser",
                    "Name": "Debug Private Api User",
                    "Password": "DebugApiPrivateTestPass",
                    "StoreId": null,
                    "Rights": [
                        {
                            "Id": 2,
                            "Description": "PrivateAPI"
                        }
                    ]
                },
                {
                    "Id": 9,
                    "Username": "NewPrivateApiUserName",
                    "Name": "New Private Api User",
                    "Password": "MyPassword",
                    "StoreId": null,
                    "Rights": [
                        {
                            "Id": 2,
                            "Description": "PrivateAPI"
                        }
                    ]
                }
            ],
            "TotalCount": 2
        });

        var expectedSuccess = (users: Models.PaginatedContainer<Models.Management.Security.ApiUser>) => {
            expect(users.TotalCount).toEqual(2);
            expect(users.Results[0].Id).toEqual(2);
            expect(users.Results[0].Username).toEqual("DebugApiPrivateTestUser");
            expect(users.Results[0].Name).toEqual("Debug Private Api User");
            expect(users.Results[0].Password).toEqual("DebugApiPrivateTestPass");
            expect(users.Results[0].StoreId).toEqual(null);
            expect(users.Results[0].Rights.length).toEqual(1);
            expect(users.Results[0].Rights[0].Id).toEqual(2);
            expect(users.Results[0].Rights[0].Description).toEqual("PrivateAPI");

            expect(users.Results[1].Id).toEqual(9);
            expect(users.Results[1].Username).toEqual("NewPrivateApiUserName");
            expect(users.Results[1].Name).toEqual("New Private Api User");
            expect(users.Results[1].Password).toEqual("MyPassword");
            expect(users.Results[1].StoreId).toEqual(null);
            expect(users.Results[1].Rights.length).toEqual(1);
            expect(users.Results[1].Rights[0].Id).toEqual(2);
            expect(users.Results[1].Rights[0].Description).toEqual("PrivateAPI");
        };

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err=> { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        expect(() => { testClient.getList(null, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(undefined, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip could not be null or empty"));

        expect(() => { testClient.getList(-1, validTake, suc => { }, err => { }) })
            .toThrow(new Error("skip must be greater than or equal to 0"));

        expect(() => { testClient.getList(validSkip, null, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(validSkip, undefined, suc => { }, err => { }) })
            .toThrow(new Error("take could not be null or empty"));

        expect(() => { testClient.getList(validSkip, -1, suc => { }, err => { }) })
            .toThrow(new Error("take must be greater than or equal to 1"));
    });
});

describe('PrivateApiUserClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.get(validPrivateApiUserId, suc => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.get(validPrivateApiUserId, suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.get(validPrivateApiUserId, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 9,
            "Username": "NewPrivateApiUserName",
            "Name": "New Private Api User",
            "Password": "MyPassword",
            "StoreId": null,
            "Rights": [
                {
                    "Id": 2,
                    "Description": "PrivateAPI"
                }
            ]
        });

        var expectedSuccess = (user: Models.Management.Security.ApiUser) => {
            expect(user.Id).toEqual(9);
            expect(user.Username).toEqual("NewPrivateApiUserName");
            expect(user.Name).toEqual("New Private Api User");
            expect(user.Password).toEqual("MyPassword");
            expect(user.StoreId).toEqual(null);
            expect(user.Rights.length).toEqual(1);
            expect(user.Rights[0].Id).toEqual(2);
            expect(user.Rights[0].Description).toEqual("PrivateAPI");
        };

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.get(validPrivateApiUserId, expectedSuccess, err=> { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUserId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUserId could not be null or empty"));

        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUserId must be greater than or equal to 0"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.get(validPrivateApiUserId, suc=> { }, expectedError);
    });
});
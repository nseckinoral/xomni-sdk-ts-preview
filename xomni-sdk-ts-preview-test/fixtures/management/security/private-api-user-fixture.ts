TestHelpers.InitalizeTestContext();
var validPrivateApiUserId: number = 2;
var validSkip: number = 1;
var validTake: number = 2;
var validUriForGetList: string = "/management/security/privateapiusers?skip=" + validSkip + "&take=" + validTake;
var validUri: string = "/management/security/privateapiuser/" + validPrivateApiUserId;
var validUriForPostAndPut: string = "/management/security/privateapiuser";

var validPrivateApiUserForPost: Models.Management.Security.ApiUser = <Models.Management.Security.ApiUser> {
    Username: "NewPrivateApiUserName",
    Name: "New Private Api User",
    Password: "MyPassword",
    StoreId: null
};
var validPrivateApiUserForPut: Models.Management.Security.ApiUser = <Models.Management.Security.ApiUser> {
    Id: 9,
    Username: "NewPrivateApiUserName",
    Name: "New Private Api User",
    Password: "MyPassword",
    StoreId: null
};

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

describe('PrivateApiUserClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.delete(validPrivateApiUserId, () => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.delete(validPrivateApiUserId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.delete(validPrivateApiUserId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("privateApiUserId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("privateApiUserId could not be null or empty"));

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
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
        testClient.delete(validPrivateApiUserId, () => { }, expectedError);
    });
});

describe('PrivateApiUserClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostAndPut);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, suc => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 13,
            "Username": "NewPrivateApiUserName",
            "Name": "New Private Api User",
            "Password": "MyPassword",
            "StoreId": null,
            "Rights": [
                {
                    "Id": 1,
                    "Description": "PublicAPI"
                }
            ]
        });

        var expectedSuccess = (user: Models.Management.Security.ApiUser) => {
            expect(user.Id).toEqual(13);
            expect(user.Username).toEqual("NewPrivateApiUserName");
            expect(user.Name).toEqual("New Private Api User");
            expect(user.Password).toEqual("MyPassword");
            expect(user.StoreId).toEqual(null);
            expect(user.Rights.length).toEqual(1);
            expect(user.Rights[0].Id).toEqual(1);
            expect(user.Rights[0].Description).toEqual("PublicAPI");
        };

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, expectedSuccess, err=> { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Security.ApiUser) => {
            expect(request).toEqual({
                "Username": "NewPrivateApiUserName",
                "Name": "New Private Api User",
                "Password": "MyPassword",
                "StoreId": null
            });
            expect(request.Name).toEqual(validPrivateApiUserForPost.Name);
            expect(request.Password).toEqual(validPrivateApiUserForPost.Password);
            expect(request.StoreId).toEqual(validPrivateApiUserForPost.StoreId);
            expect(request.Username).toEqual(validPrivateApiUserForPost.Username);
        };
        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, succ=> { }, err=> { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();

        expect(() => { testClient.post(null, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUser could not be null or empty"));

        expect(() => { testClient.post(undefined, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUser could not be null or empty"));

        expect(() => {
            var nullNameApiUser = <Models.Management.Security.ApiUser> {
                Name: null,
                Password: "password"
            };

            testClient.post(nullNameApiUser, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var undefinedNameApiUser = <Models.Management.Security.ApiUser> {
                Name: undefined,
                Password: "password"
            };

            testClient.post(undefinedNameApiUser, suc => { }, err => { })
       }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var nullPassword = <Models.Management.Security.ApiUser> {
                Name: "name",
                Password: null
            };

            testClient.post(nullPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));

        expect(() => {
            var undefinedPassword = <Models.Management.Security.ApiUser> {
                Name: "name",
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
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.post(validPrivateApiUserForPost, succ=> { }, expectedError);
    });
});

describe('PrivateApiUserClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPostAndPut);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, suc => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 13,
            "Username": "NewPrivateApiUserName",
            "Name": "New Private Api User",
            "Password": "MyPassword",
            "StoreId": null,
            "Rights": [
                {
                    "Id": 1,
                    "Description": "PublicAPI"
                }
            ]
        });

        var expectedSuccess = (user: Models.Management.Security.ApiUser) => {
            expect(user.Id).toEqual(13);
            expect(user.Username).toEqual("NewPrivateApiUserName");
            expect(user.Name).toEqual("New Private Api User");
            expect(user.Password).toEqual("MyPassword");
            expect(user.StoreId).toEqual(null);
            expect(user.Rights.length).toEqual(1);
            expect(user.Rights[0].Id).toEqual(1);
            expect(user.Rights[0].Description).toEqual("PublicAPI");
        };

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, expectedSuccess, err=> { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Security.ApiUser) => {
            expect(request).toEqual({
                "Id": 9,
                "Username": "NewPrivateApiUserName",
                "Name": "New Private Api User",
                "Password": "MyPassword",
                "StoreId": null
            });
            expect(request.Id).toEqual(validPrivateApiUserForPut.Id);
            expect(request.Name).toEqual(validPrivateApiUserForPut.Name);
            expect(request.Password).toEqual(validPrivateApiUserForPut.Password);
            expect(request.StoreId).toEqual(validPrivateApiUserForPut.StoreId);
            expect(request.Username).toEqual(validPrivateApiUserForPut.Username);
        };
        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, succ=> { }, err=> { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();

        expect(() => { testClient.put(null, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUser could not be null or empty"));

        expect(() => { testClient.put(undefined, suc => { }, err => { }) })
            .toThrow(new Error("privateApiUser could not be null or empty"));

        expect(() => {
            var undefinedId= <Models.Management.Security.ApiUser> {
                Id: undefined,
                Name: "name",
                Password: "password"
            };

            testClient.put(undefinedId, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var nullId = <Models.Management.Security.ApiUser> {
                Id: null,
                Name: "name",
                Password: "password"
            };

            testClient.put(nullId, suc => { }, err => { })
        }).toThrow(new Error("id could not be null or empty"));

        expect(() => {
            var idLessThanZero = <Models.Management.Security.ApiUser> {
                Id: -5,
                Name: "name",
                Password: "password"
            };

            testClient.put(idLessThanZero, suc => { }, err => { })
        }).toThrow(new Error("id must be greater than or equal to 0"));

        expect(() => {
            var nullName = <Models.Management.Security.ApiUser> {
                Id: validPrivateApiUserId,
                Name: null,
                Password: "password"
            };

            testClient.put(nullName, suc => { }, err => { })
        }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var undefinedName= <Models.Management.Security.ApiUser> {
                Id: validPrivateApiUserId,
                Name: undefined,
                Password: "password"
            };

            testClient.put(undefinedName, suc => { }, err => { })
       }).toThrow(new Error("name could not be null or empty"));

        expect(() => {
            var nullPassword = <Models.Management.Security.ApiUser> {
                Id: validPrivateApiUserId,
                Name: "name",
                Password: null
            };

            testClient.put(nullPassword, suc => { }, err => { })
        }).toThrow(new Error("password could not be null or empty"));

        expect(() => {
            var undefinedPassword = <Models.Management.Security.ApiUser> {
                Id: validPrivateApiUserId,
                Name: "name",
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
        var testClient = new Xomni.Management.Security.PrivateApiUser.PrivateApiUserClient();
        testClient.put(validPrivateApiUserForPut, succ=> { }, expectedError);
    });
});
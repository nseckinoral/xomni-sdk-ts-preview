TestHelpers.InitalizeTestContext();
var validImageSizeProfileId: number = 1;
var validSkip: number = 1;
var validTake: number = 1000;
var validUriGetAndDelete: string = "/management/configuration/imagesizeprofile?id=1";
var validUriForGetList: string = "/management/configuration/imagesizeprofiles?skip=" + validSkip + "&take=" + validTake;
var validUriForPost: string = "/management/configuration/imagesizeprofile";
var validImageSizeProfile: Models.Management.Configuration.ImageSizeProfile = <Models.Management.Configuration.ImageSizeProfile>{
    Height: 100,
    Width: 100
};

describe('ImageSizeProfileClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();

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
                    "Height": 100,
                    "Width": 100,
                },
                {
                    "Id": 2,
                    "Height": 100,
                    "Width": 120,
                }
            ],
            "TotalCount": 6
        });

        var expectedSuccess = (list: Models.PaginatedContainer<Models.Management.Configuration.ImageSizeProfile>) => {
            expect(list.TotalCount).toEqual(6);
            expect(list.Results.length).toEqual(2);
            expect(list.Results[0].Id).toEqual(1);
            expect(list.Results[0].Height).toEqual(100);
            expect(list.Results[0].Width).toEqual(100);
            expect(list.Results[1].Id).toEqual(2);
            expect(list.Results[1].Height).toEqual(100);
            expect(list.Results[1].Width).toEqual(120);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});

describe('ImageSizeProfileClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriGetAndDelete);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.get(validImageSizeProfileId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.get(validImageSizeProfileId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.get(validImageSizeProfileId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();

        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId must be greater than or equal to 0"));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1,
            "Height": 100,
            "Width": 100
        });

        var expectedSuccess = (imageSizeProfile: Models.Management.Configuration.ImageSizeProfile) => {
            expect(imageSizeProfile.Id).toEqual(1);
            expect(imageSizeProfile.Height).toEqual(100);
            expect(imageSizeProfile.Width).toEqual(100);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.get(validImageSizeProfileId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.get(validImageSizeProfileId, suc=> { }, expectedError);
    });
});

describe('ImageSizeProfileClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPost);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1,
            "Height": 100,
            "Width": 100
        });

        var expectedSuccess = (imageSizeProfile: Models.Management.Configuration.ImageSizeProfile) => {
            expect(imageSizeProfile.Id).toEqual(1);
            expect(imageSizeProfile.Height).toEqual(100);
            expect(imageSizeProfile.Width).toEqual(100);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Configuration.ImageSizeProfile) => {
            expect(request).toEqual({
                "Height": 100,
                "Width": 100
            });
            expect(request.Height).toEqual(validImageSizeProfile.Height);
            expect(request.Width).toEqual(validImageSizeProfile.Width);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();

        expect(() => {
            testClient.post(null, suc => { }, err => { })
        }).toThrow(new Error("imageSizeProfile could not be null or empty"));
        
        expect(() => {
            testClient.post(undefined, suc => { }, err => { })
        }).toThrow(new Error("imageSizeProfile could not be null or empty"));
        
        expect(() => {
            var nullHeight = <Models.Management.Configuration.ImageSizeProfile>{
                Height: null,
                Width: 100
            };

            testClient.post(nullHeight, suc => { }, err => { })
        }).toThrow(new Error("height could not be null or empty"));

        expect(() => {
            var undefinedHeight = <Models.Management.Configuration.ImageSizeProfile>{
                Height: undefined,
                Width: 100
            };

            testClient.post(undefinedHeight, suc => { }, err => { })
        }).toThrow(new Error("height could not be null or empty"));

        expect(() => {
            var nullWidth = <Models.Management.Configuration.ImageSizeProfile>{
                Height: 100,
                Width: null
            };

            testClient.post(nullWidth, suc => { }, err => { })
        }).toThrow(new Error("width could not be null or empty"));

        expect(() => {
            var undefinedWidth = <Models.Management.Configuration.ImageSizeProfile>{
                Height: 100,
                Width: undefined
            };

            testClient.post(undefinedWidth, suc => { }, err => { })
        }).toThrow(new Error("width could not be null or empty"));

        expect(() => {
            var invalidHeight = <Models.Management.Configuration.ImageSizeProfile>{
                Height: -5,
                Width: 100
            };

            testClient.post(invalidHeight, suc => { }, err => { })
        }).toThrow(new Error("height must be greater than or equal to 1"));

        expect(() => {
            var invalidWidth = <Models.Management.Configuration.ImageSizeProfile>{
                Height: 100,
                Width: -5
            };

            testClient.post(invalidWidth, suc => { }, err => { })
        }).toThrow(new Error("width must be greater than or equal to 1"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.post(validImageSizeProfile, suc => { }, expectedError);
    });
});

describe('ImageSizeProfileClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriGetAndDelete);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.delete(validImageSizeProfileId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.delete(validImageSizeProfileId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.delete(validImageSizeProfileId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId must be greater than or equal to 0"));

        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("imageSizeProfileId could not be null or empty"));
    });

    it("Should parse api exception response ()cessfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.ImageSizeProfile.ImageSizeProfileClient();
        testClient.delete(validImageSizeProfileId, ()=> { }, expectedError);
    });
});

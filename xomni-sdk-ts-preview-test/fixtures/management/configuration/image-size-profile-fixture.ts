TestHelpers.InitalizeTestContext();
var validSkip: number = 1;
var validTake: number = 1000;
var validUriForGetList: string = "/management/configuration/imagesizeprofiles?skip=" + validSkip + "&take=" + validTake;

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

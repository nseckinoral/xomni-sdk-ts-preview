TestHelpers.InitalizeTestContext();
var validSkip: number = 5;
var validTake: number = 333;
var validUriForGetList: string = "/management/storage/assets?skip=" + validSkip + "&take=" + validTake;


describe('ImageSizeProfileClient.getList', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForGetList);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.getList(validSkip, validTake, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();

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
                    "FileName": "sampleImage.jpg",
                    "MimeType": "image/jpeg"
                },
                {
                    "Id": 2,
                    "FileName": "sampleImage2.jpg",
                    "MimeType": "image/jpeg",
                }
            ],
            "TotalCount": 6
        });

        var expectedSuccess = (list: Models.PaginatedContainer<Models.Management.Storage.TenantAsset>) => {
            expect(list.TotalCount).toEqual(6);
            expect(list.Results.length).toEqual(2);
            expect(list.Results[0].Id).toEqual(1);
            expect(list.Results[0].FileName).toEqual("sampleImage.jpg");
            expect(list.Results[0].MimeType).toEqual("image/jpeg");
            expect(list.Results[1].Id).toEqual(2);
            expect(list.Results[1].FileName).toEqual("sampleImage2.jpg");
            expect(list.Results[1].MimeType).toEqual("image/jpeg");
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.getList(validSkip, validTake, expectedSuccess, err => { });
    });
});
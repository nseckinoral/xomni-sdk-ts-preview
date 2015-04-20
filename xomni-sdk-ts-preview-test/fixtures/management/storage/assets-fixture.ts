TestHelpers.InitalizeTestContext();
var validAssetId: number = 1;
var validSkip: number = 5;
var validTake: number = 333;
var validUriForGetList: string = "/management/storage/assets?skip=" + validSkip + "&take=" + validTake;
var validUriGetAndDelete: string = "/management/storage/asset?id=" + validAssetId;
var validUriForPost: string = "/management/storage/asset"
var validTenantAssetDetail: Models.Management.Storage.TenantAssetDetail = <Models.Management.Storage.TenantAssetDetail>{
    Id: 1,
    FileName: "sampleImage.jpg",
    MimeType: "image/jpeg",
    FileBody: new Uint8Array([97, 114, 109, 117, 116]) //"YXJtdXQ=" //btoa("armut") :)
};

describe('AssetClient.getList', () => {
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

describe('AssetClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriGetAndDelete);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.get(validAssetId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.get(validAssetId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.get(validAssetId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();

        expect(() => { testClient.get(-1, suc => { }, err => { }) })
            .toThrow(new Error("assetId must be greater than or equal to 1"));

        expect(() => { testClient.get(null, suc => { }, err => { }) })
            .toThrow(new Error("assetId could not be null or empty"));

        expect(() => { testClient.get(undefined, suc => { }, err => { }) })
            .toThrow(new Error("assetId could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1,
            "FileName": "sampleImage.jpg",
            "MimeType": "image/jpeg",
            "FileBody": "YXJtdXQ=" //btoa("armut") :)
        });

        var expectedSuccess = (validAsset: Models.Management.Storage.TenantAssetDetail) => {
            expect(validAsset.Id).toEqual(1);
            expect(validAsset.FileName).toEqual("sampleImage.jpg");
            expect(validAsset.MimeType).toEqual("image/jpeg");
            expect(validAsset.FileBody).toEqual(new Uint8Array([97, 114, 109,117, 116]));
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.get(validAssetId, expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.get(validAssetId, suc=> { }, expectedError);
    });
});

describe('AssetClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriGetAndDelete);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.delete(validAssetId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.delete(validAssetId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.delete(validAssetId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();

        expect(() => { testClient.delete(-1, () => { }, err => { }) })
            .toThrow(new Error("assetId must be greater than or equal to 1"));

        expect(() => { testClient.delete(null, () => { }, err => { }) })
            .toThrow(new Error("assetId could not be null or empty"));

        expect(() => { testClient.delete(undefined, () => { }, err => { }) })
            .toThrow(new Error("assetId could not be null or empty"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.delete(validAssetId, () => { }, expectedError);
    });
});

describe('AssetClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPost);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.post(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.post(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.post(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1,
            "FileName": "sampleImage.jpg",
            "MimeType": "image/jpeg"
        });

        var expectedSuccess = (validAsset: Models.Management.Storage.TenantAsset) => {
            expect(validAsset.Id).toEqual(1);
            expect(validAsset.FileName).toEqual("sampleImage.jpg");
            expect(validAsset.MimeType).toEqual("image/jpeg");
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.post(validTenantAssetDetail, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Storage.TenantAssetDetail) => {
            expect(request).toEqual({
                "FileName": "sampleImage.jpg",
                "MimeType": "image/jpeg",
                "FileBody": "YXJtdXQ=" //btoa("armut") :)
            });
            expect(request.FileName).toEqual("sampleImage.jpg");
            expect(request.MimeType).toEqual("image/jpeg");
            expect(request.FileBody).toEqual("YXJtdXQ=");
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.post(validTenantAssetDetail, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();

        expect(() => {
            testClient.post(null, suc => { }, err => { })
        }).toThrow(new Error("tenantAssetDetail could not be null or empty"));

        expect(() => {
            testClient.post(undefined, suc => { }, err => { })
        }).toThrow(new Error("tenantAssetDetail could not be null or empty"));

        expect(() => {
            var nullFileName = <Models.Management.Storage.TenantAssetDetail>{
                FileName: null
            };

            testClient.post(nullFileName, suc => { }, err => { })
        }).toThrow(new Error("FileName could not be null or empty"));

        expect(() => {
            var nullMimeType = <Models.Management.Storage.TenantAssetDetail>{
                FileName: "a",
                MimeType: null
            };

            testClient.post(nullMimeType, suc => { }, err => { })
        }).toThrow(new Error("MimeType could not be null or empty"));

        expect(() => {
            var nullFileBody = <Models.Management.Storage.TenantAssetDetail>{
                FileName: "a",
                MimeType: "a",
                FileBody: null
            };
            testClient.post(nullFileBody, suc => { }, err => { })
        }).toThrow(new Error("FileBody could not be null or empty"));
    });
});

describe('AssetClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForPost);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.put(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.put(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.put(validTenantAssetDetail, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "Id": 1,
            "FileName": "sampleImage.jpg",
            "MimeType": "image/jpeg"
        });

        var expectedSuccess = (validAsset: Models.Management.Storage.TenantAsset) => {
            expect(validAsset.Id).toEqual(1);
            expect(validAsset.FileName).toEqual("sampleImage.jpg");
            expect(validAsset.MimeType).toEqual("image/jpeg");
        };

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.put(validTenantAssetDetail, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Storage.TenantAssetDetail) => {
            expect(request).toEqual({
                "Id": 1,
                "FileName": "sampleImage.jpg",
                "MimeType": "image/jpeg",
                "FileBody": "YXJtdXQ=" //btoa("armut") :)
            });
            expect(request.Id).toEqual(1);
            expect(request.FileName).toEqual("sampleImage.jpg");
            expect(request.MimeType).toEqual("image/jpeg");
            expect(request.FileBody).toEqual("YXJtdXQ=");
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Storage.Assets.AssetClient();
        testClient.put(validTenantAssetDetail, succ=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Storage.Assets.AssetClient();

        expect(() => {
            testClient.put(null, suc => { }, err => { })
        }).toThrow(new Error("tenantAssetDetail could not be null or empty"));

        expect(() => {
            testClient.put(undefined, suc => { }, err => { })
        }).toThrow(new Error("tenantAssetDetail could not be null or empty"));

        expect(() => {
            var nullFileName = <Models.Management.Storage.TenantAssetDetail>{
                Id: null
            };

            testClient.put(nullFileName, suc => { }, err => { })
        }).toThrow(new Error("Id could not be null or empty"));

        expect(() => {
            var nullFileName = <Models.Management.Storage.TenantAssetDetail>{
                Id: 1,
                FileName: null
            };

            testClient.put(nullFileName, suc => { }, err => { })
        }).toThrow(new Error("FileName could not be null or empty"));

        expect(() => {
            var nullMimeType = <Models.Management.Storage.TenantAssetDetail>{
                Id: 1,
                FileName: "a",
                MimeType: null
            };

            testClient.put(nullMimeType, suc => { }, err => { })
        }).toThrow(new Error("MimeType could not be null or empty"));

        expect(() => {
            var nullFileBody = <Models.Management.Storage.TenantAssetDetail>{
                Id: 1,
                FileName: "a",
                MimeType: "a",
                FileBody: null
            };
            testClient.put(nullFileBody, suc => { }, err => { })
        }).toThrow(new Error("FileBody could not be null or empty"));
    });
});

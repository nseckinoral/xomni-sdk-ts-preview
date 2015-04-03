﻿var sampleLicenseId: number = 1;
var skip: number = 2;
var take: number = 5;
var baseUrlForReplace: string = "/management/company/licences/{licenceId}/devices/{deviceId}/metadata";
﻿var singleOperationUrl: string = "management/configuration/store";
var singleOperationUrlWithSlash: string = "management/configuration/store/";
var singleOperationAdditionalQuery: string = "1";
var listOperationUrl: string = "management/configuration/stores";
var listOperationAdditionalQuery: Xomni.Dictionary<string, string> = new Xomni.Dictionary<string, string>([
    { key: "skip", value: skip.toString() },
    { key: "take", value: take.toString() }
]);

var patterns: Xomni.Dictionary<string, string> = new Xomni.Dictionary<string, string>([
    { key: "{licenceId}", value: sampleLicenseId.toString() },
    { key: "{deviceId}", value: TestHelpers.uniqeId },
]);

describe('UrlGenerator.PrepareOperationUrl', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, undefined) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(null, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(undefined, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrlWithSlash, null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrlWithSlash, undefined) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(null, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(undefined, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrlWithSlash, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrlWithSlash, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, singleOperationAdditionalQuery)).toEqual(singleOperationUrl + "/" + singleOperationAdditionalQuery);
        expect(Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrlWithSlash, singleOperationAdditionalQuery)).toEqual(singleOperationUrlWithSlash + singleOperationAdditionalQuery);
    });
});

describe('UrlGenerator.PrepareOperationUrlWithMultipleParameter', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, undefined) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(null, listOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(undefined, listOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, listOperationAdditionalQuery) })
            .not.toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, listOperationAdditionalQuery) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, listOperationAdditionalQuery)).toEqual(listOperationUrl + "?skip=" + skip + "&take=" + take);
    });
});

describe('UrlGenerator.ReplaceUri', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(null, patterns) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(undefined, patterns) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(baseUrlForReplace, null) })
            .toThrow(new Error("patterns could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(baseUrlForReplace, undefined) })
            .toThrow(new Error("patterns could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(baseUrlForReplace, patterns) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.ReplaceUri(baseUrlForReplace, patterns) })
            .not.toThrow(new Error("patterns could not be null or empty"));
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.ReplaceUri(baseUrlForReplace, patterns)).toEqual("/management/company/licences/" + sampleLicenseId + "/devices/" + TestHelpers.uniqeId + "/metadata");
    });
});
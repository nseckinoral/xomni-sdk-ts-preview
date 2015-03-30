var singleOperationUrl: string = "management/configuration/store/";
var singleOperationAdditionalQuery: string = "1";
var listOperationUrl: string = "management/configuration/stores";
var listOperationAdditionalQuery: Xomni.Dictionary<string, string> = new Xomni.Dictionary<string, string>([
    { key: "skip", value: "2" },
    { key: "take", value: "5" }
]);
describe('UrlGenerator.PrepareOperationUrl', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl,null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, undefined) })
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
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.PrepareOperationUrl(singleOperationUrl, singleOperationAdditionalQuery)).toEqual(singleOperationUrl + singleOperationAdditionalQuery);
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
        expect(Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameter(listOperationUrl, listOperationAdditionalQuery)).toEqual(listOperationUrl + "?skip=2&take=5");
    });
});
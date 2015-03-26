var singleOperationUrl: string = "management/configuration/store/";
var singleOperationAdditionalQuery: string = "1";
var listOperationUrl: string = "management/configuration/stores";
var listOperationAdditionalQuery: Xomni.Dictionary<string, string> = new Xomni.Dictionary<string, string>([
    { key: "skip", value: "2" },
    { key: "take", value: "5" }
]);
describe('UrlGenerator.PrepareSingleOperationUrl', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(singleOperationUrl,null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(singleOperationUrl, undefined) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(null, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(undefined, singleOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(singleOperationUrl, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(singleOperationUrl, singleOperationAdditionalQuery) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.PrepareSingleOperationUrl(singleOperationUrl, singleOperationAdditionalQuery)).toEqual(singleOperationUrl + singleOperationAdditionalQuery);
    });
});

describe('UrlGenerator.PrepareListOperationUrl', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(listOperationUrl, null) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(listOperationUrl, undefined) })
            .toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(null, listOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(undefined, listOperationAdditionalQuery) })
            .toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(listOperationUrl, listOperationAdditionalQuery) })
            .not.toThrow(new Error("additionalQueryString could not be null or empty"));

        expect(() => { Xomni.Utils.UrlGenerator.PrepareListOperationUrl(listOperationUrl, listOperationAdditionalQuery) })
            .not.toThrow(new Error("baseUrl could not be null or empty"));
    });

    it("Should generate right url", () => {
        expect(Xomni.Utils.UrlGenerator.PrepareListOperationUrl(listOperationUrl, listOperationAdditionalQuery)).toEqual(listOperationUrl + "?skip=2&take=5");
    });
});
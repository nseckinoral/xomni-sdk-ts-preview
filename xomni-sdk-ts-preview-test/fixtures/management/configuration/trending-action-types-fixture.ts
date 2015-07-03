TestHelpers.InitalizeTestContext();

var sampleRequestResponseJson = [
    {
        "Id": 1,
        "Description": "SocialLike",
        "ImpactValue": 5.1
    },
    {
        "Id": 2,
        "Description": "SocialShare",
        "ImpactValue": 2.1
    },
    {
        "Id": 3,
        "Description": "ShoppingCartItemIInsert",
        "ImpactValue": 3.0
    },
    {
        "Id": 4,
        "Description": "WishlistItemInsert",
        "ImpactValue": 4.0
    },
    {
        "Id": 5,
        "Description": "ItemView",
        "ImpactValue": 5.0
    }
];
var samplePutRequest: Array<Models.Management.Configuration.TrendingActionTypeValue> = sampleRequestResponseJson;

describe('TrendingActionTypesClient.put', () => {

    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/configuration/trendingactiontypes");
        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient;
        testClient.put(samplePutRequest, suc => { }, err => { });
    })


    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.put(samplePutRequest, suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.put(samplePutRequest, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, sampleRequestResponseJson);

        var expectedSuccess = (trendingActionTypes: Models.Management.Configuration.TrendingActionTypeValue[]) => {
            expect(trendingActionTypes[0].Id).toEqual(1);
            expect(trendingActionTypes[0].Description).toEqual("SocialLike");
            expect(trendingActionTypes[0].ImpactValue).toEqual(5.1);
            expect(trendingActionTypes[1].Id).toEqual(2);
            expect(trendingActionTypes[1].Description).toEqual("SocialShare");
            expect(trendingActionTypes[1].ImpactValue).toEqual(2.1);
            expect(trendingActionTypes[2].Id).toEqual(3);
            expect(trendingActionTypes[2].Description).toEqual("ShoppingCartItemIInsert");
            expect(trendingActionTypes[2].ImpactValue).toEqual(3.0);
            expect(trendingActionTypes[3].Id).toEqual(4);
            expect(trendingActionTypes[3].Description).toEqual("WishlistItemInsert");
            expect(trendingActionTypes[3].ImpactValue).toEqual(4.0);
            expect(trendingActionTypes[4].Id).toEqual(5);
            expect(trendingActionTypes[4].Description).toEqual("ItemView");
            expect(trendingActionTypes[4].ImpactValue).toEqual(5.0);
        };

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.put(samplePutRequest, expectedSuccess, err=> { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Array<Models.Management.Configuration.TrendingActionTypeValue>) => {
            expect(request).toEqual(sampleRequestResponseJson);
            expect(request[0].Id).toEqual(samplePutRequest[0].Id);
            expect(request[0].Description).toEqual(samplePutRequest[0].Description);
            expect(request[0].ImpactValue).toEqual(samplePutRequest[0].ImpactValue);
            expect(request[1].Id).toEqual(samplePutRequest[1].Id);
            expect(request[1].Description).toEqual(samplePutRequest[1].Description);
            expect(request[1].ImpactValue).toEqual(samplePutRequest[1].ImpactValue);
            expect(request[2].Id).toEqual(samplePutRequest[2].Id);
            expect(request[2].Description).toEqual(samplePutRequest[2].Description);
            expect(request[2].ImpactValue).toEqual(samplePutRequest[2].ImpactValue);
            expect(request[3].Id).toEqual(samplePutRequest[3].Id);
            expect(request[3].Description).toEqual(samplePutRequest[3].Description);
            expect(request[3].ImpactValue).toEqual(samplePutRequest[3].ImpactValue);
            expect(request[4].Id).toEqual(samplePutRequest[4].Id);
            expect(request[4].Description).toEqual(samplePutRequest[4].Description);
            expect(request[4].ImpactValue).toEqual(samplePutRequest[4].ImpactValue);
        };
        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.put(samplePutRequest, suc=> { }, err=> { });
    });

    it("Should parse api exception response successfully", () => {

        TestHelpers.APIExceptionResponseTest($, 400);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.put(samplePutRequest, suc=> { }, expectedError);
    });

});

describe('TrendingActionTypesClient.get', () => {

    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/configuration/trendingactiontypes");
        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient;
        testClient.get(suc => { }, err => { });
    })

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.get(suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.get(suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, sampleRequestResponseJson);

        var expectedSuccess = (trendingActionTypes: Models.Management.Configuration.TrendingActionTypeValue[]) => {
            expect(trendingActionTypes[0].Id).toEqual(1);
            expect(trendingActionTypes[0].Description).toEqual("SocialLike");
            expect(trendingActionTypes[0].ImpactValue).toEqual(5.1);
            expect(trendingActionTypes[1].Id).toEqual(2);
            expect(trendingActionTypes[1].Description).toEqual("SocialShare");
            expect(trendingActionTypes[1].ImpactValue).toEqual(2.1);
            expect(trendingActionTypes[2].Id).toEqual(3);
            expect(trendingActionTypes[2].Description).toEqual("ShoppingCartItemIInsert");
            expect(trendingActionTypes[2].ImpactValue).toEqual(3.0);
            expect(trendingActionTypes[3].Id).toEqual(4);
            expect(trendingActionTypes[3].Description).toEqual("WishlistItemInsert");
            expect(trendingActionTypes[3].ImpactValue).toEqual(4.0);
            expect(trendingActionTypes[4].Id).toEqual(5);
            expect(trendingActionTypes[4].Description).toEqual("ItemView");
            expect(trendingActionTypes[4].ImpactValue).toEqual(5.0);
        };

        var testClient = new Xomni.Management.Configuration.TrendingActionTypes.TrendingActionTypesClient();
        testClient.get(expectedSuccess, err=> { });
    });
});
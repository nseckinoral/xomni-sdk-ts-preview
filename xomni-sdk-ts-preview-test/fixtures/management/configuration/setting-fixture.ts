TestHelpers.InitalizeTestContext();

var validRequest : Models.Management.Configuration.Settings = {
    FacebookDisplayType: 1,
    FacebookApplicationId : "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    FacebookApplicavalidRequesttionId: "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    FacebookRedirectUri: "59b14e8b-71e4-42a2-96eb-a4fa624a7245",
    FacebookApplicationSecretKey: "93687750-d936-45ab-a306-5696bb7f97bd",
    IsCDNEnabled: true,
    CDNUrl: "fadefe08-a002-4f25-9e16-3c7a143fbd3a",
    CacheExpirationTime: 2147483647,
    IsPassbookEnabled: true,
    PassbookPassTypeIdentifier: "bc424b12-85aa-44f7-be36-bdd5e977ff61",
    PassbookWWDRCACertificateTenantAssetId: "54f25df1-8dee-416b-91e6-1b91258e9945",
    PassbookCertificateTenantAssetId: "9c0ffcb5-c889-41be-9936-ccd1e028baff",
    PassbookCertificatePassword: "b85c42da-c80d-4c04-b074-b22e15fce4b6",
    PassbookTeamIdentifier: "67a49a80-ff62-4999-84ec-0f790091bcc3",
    PassbookOrganizationName: "409aa2ea-c619-469f-b2d3-db9723fc6466",
    PopularityTimeImpactValue: 10,
    SearchIndexingEnabled: true,
    TwitterConsumerKey: "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    TwitterConsumerKeySecret: "59b14e8b-71e4-42a2-96eb-a4fa624a7245",
    TwitterRedirectUri: "93687750-d936-45ab-a306-5696bb7f97bd",
};
       
var validResponseAndRequestJson = {
    "FacebookDisplayType": 1,
    "FacebookApplicationId": "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    "FacebookApplicavalidRequesttionId": "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    "FacebookRedirectUri": "59b14e8b-71e4-42a2-96eb-a4fa624a7245",
    "FacebookApplicationSecretKey": "93687750-d936-45ab-a306-5696bb7f97bd",
    "IsCDNEnabled": true,
    "CDNUrl": "fadefe08-a002-4f25-9e16-3c7a143fbd3a",
    "CacheExpirationTime": 2147483647,
    "IsPassbookEnabled": true,
    "PassbookPassTypeIdentifier": "bc424b12-85aa-44f7-be36-bdd5e977ff61",
    "PassbookWWDRCACertificateTenantAssetId": "54f25df1-8dee-416b-91e6-1b91258e9945",
    "PassbookCertificateTenantAssetId": "9c0ffcb5-c889-41be-9936-ccd1e028baff",
    "PassbookCertificatePassword": "b85c42da-c80d-4c04-b074-b22e15fce4b6",
    "PassbookTeamIdentifier": "67a49a80-ff62-4999-84ec-0f790091bcc3",
    "PassbookOrganizationName": "409aa2ea-c619-469f-b2d3-db9723fc6466",
    "PopularityTimeImpactValue": 10,
    "SearchIndexingEnabled": true,
    "TwitterConsumerKey": "01e7efe0-5f20-4913-a4a7-fe539e7c762f",
    "TwitterConsumerKeySecret": "59b14e8b-71e4-42a2-96eb-a4fa624a7245",
    "TwitterRedirectUri": "93687750-d936-45ab-a306-5696bb7f97bd",
};

var expectedSuccess = (settings: Models.Management.Configuration.Settings) => {
    expect(settings.FacebookDisplayType).toEqual(Models.Management.Configuration.FacebookDisplayType.Popup);
    expect(settings.FacebookApplicationId).toEqual("01e7efe0-5f20-4913-a4a7-fe539e7c762f");
    expect(settings.FacebookRedirectUri).toEqual("59b14e8b-71e4-42a2-96eb-a4fa624a7245");
    expect(settings.FacebookApplicationSecretKey).toEqual("93687750-d936-45ab-a306-5696bb7f97bd");
    expect(settings.IsCDNEnabled).toEqual(true);
    expect(settings.CDNUrl).toEqual("fadefe08-a002-4f25-9e16-3c7a143fbd3a");
    expect(settings.CacheExpirationTime).toEqual(2147483647);
    expect(settings.IsPassbookEnabled).toEqual(true);
    expect(settings.PassbookPassTypeIdentifier).toEqual("bc424b12-85aa-44f7-be36-bdd5e977ff61");
    expect(settings.PassbookWWDRCACertificateTenantAssetId).toEqual("54f25df1-8dee-416b-91e6-1b91258e9945");
    expect(settings.PassbookCertificateTenantAssetId).toEqual("9c0ffcb5-c889-41be-9936-ccd1e028baff");
    expect(settings.PassbookCertificatePassword).toEqual("b85c42da-c80d-4c04-b074-b22e15fce4b6");
    expect(settings.PassbookTeamIdentifier).toEqual("67a49a80-ff62-4999-84ec-0f790091bcc3");
    expect(settings.PassbookOrganizationName).toEqual("409aa2ea-c619-469f-b2d3-db9723fc6466");
    expect(settings.PopularityTimeImpactValue).toEqual(10);
    expect(settings.SearchIndexingEnabled).toEqual(true);
    expect(settings.TwitterConsumerKey).toEqual("01e7efe0-5f20-4913-a4a7-fe539e7c762f");
    expect(settings.TwitterConsumerKeySecret).toEqual("59b14e8b-71e4-42a2-96eb-a4fa624a7245");
    expect(settings.TwitterRedirectUri).toEqual("93687750-d936-45ab-a306-5696bb7f97bd");
};

describe('SettingsClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "/management/configuration/settings");
        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest,suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest,suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest,suc => { }, err => { });
    });

    it("Should parse request seccessfully", () => {
        var parseMethod = (request: Models.Management.Configuration.Settings) => {
            expect(request).toEqual(validResponseAndRequestJson);
            expect(request.FacebookDisplayType).toEqual(validRequest.FacebookDisplayType);
            expect(request.FacebookApplicationId).toEqual(validRequest.FacebookApplicationId);
            expect(request.FacebookRedirectUri).toEqual(validRequest.FacebookRedirectUri);
            expect(request.FacebookApplicationSecretKey).toEqual(validRequest.FacebookApplicationSecretKey);
            expect(request.IsCDNEnabled).toEqual(validRequest.IsCDNEnabled);
            expect(request.CDNUrl).toEqual(validRequest.CDNUrl);
            expect(request.CacheExpirationTime).toEqual(validRequest.CacheExpirationTime);
            expect(request.IsPassbookEnabled).toEqual(validRequest.IsPassbookEnabled);
            expect(request.PassbookPassTypeIdentifier).toEqual(validRequest.PassbookPassTypeIdentifier);
            expect(request.PassbookWWDRCACertificateTenantAssetId).toEqual(validRequest.PassbookWWDRCACertificateTenantAssetId);
            expect(request.PassbookCertificateTenantAssetId).toEqual(validRequest.PassbookCertificateTenantAssetId);
            expect(request.PassbookCertificatePassword).toEqual(validRequest.PassbookCertificatePassword);
            expect(request.PassbookTeamIdentifier).toEqual(validRequest.PassbookTeamIdentifier);
            expect(request.PassbookOrganizationName).toEqual(validRequest.PassbookOrganizationName);
            expect(request.PopularityTimeImpactValue).toEqual(validRequest.PopularityTimeImpactValue);
            expect(request.SearchIndexingEnabled).toEqual(validRequest.SearchIndexingEnabled);
            expect(request.TwitterConsumerKey).toEqual(validRequest.TwitterConsumerKey);
            expect(request.TwitterConsumerKeySecret).toEqual(validRequest.TwitterConsumerKeySecret);
            expect(request.TwitterRedirectUri).toEqual(validRequest.TwitterRedirectUri);
        };
        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest, suc=> { }, err => { });
    })

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, validResponseAndRequestJson);

        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest,expectedSuccess, err => { });
    });

    it("Should raise exception with invalid parameters.", () => {

        var sampleText: string;
        for (var i = 0; i < 300; i++) {
            sampleText += "x";
        }

        expect(() => {
            var invalidRequest = <Models.Management.Configuration.Settings>
                {
                    PassbookCertificatePassword: sampleText,
                };

            new Xomni.Management.Configuration.Settings.SettingsClient().
                put(invalidRequest, suc=> { }, err => { })
        }).toThrow(new Error("Length of PassbookCertificatePassword must be lower than or equal to 250 character.")); 

        expect(() => {
            var invalidRequest = <Models.Management.Configuration.Settings>
                {
                    PassbookTeamIdentifier: sampleText,
                };

            new Xomni.Management.Configuration.Settings.SettingsClient().
                put(invalidRequest, suc=> { }, err => { })
        }).toThrow(new Error("Length of PassbookTeamIdentifier must be lower than or equal to 250 character.")); 

        expect(() => {
            var invalidRequest = <Models.Management.Configuration.Settings>
                {
                    PassbookOrganizationName: sampleText,
                };

            new Xomni.Management.Configuration.Settings.SettingsClient().
                put(invalidRequest, suc=> { }, err => { })
        }).toThrow(new Error("Length of PassbookOrganizationName must be lower than or equal to 250 character.")); 
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 400);
        
        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(400);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };
        
        var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
        testClient.put(validRequest, suc=> { }, expectedError);
    });
});

describe('SettingsClient.get', () => {
        it("Should hit correct url", () => {
            TestHelpers.RequestUriTest($, "/management/configuration/settings");

            var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
            testClient.get(suc => { }, err => { });
        })
    
        it("Should use correct http method", () => {
            TestHelpers.RequestHttpMethodTest($, "Get");
        
            var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
            testClient.get(suc => { }, err => { });
        });
    
        it("Should use correct http headers", () => {
            TestHelpers.RequestHttpHeadersTest($);
        
            var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
            testClient.get(suc => { }, err => { });
        });
    
        it("Should parse response successfully", () => {
            TestHelpers.ResponseParseTest($, validResponseAndRequestJson);
        
            var testClient = new Xomni.Management.Configuration.Settings.SettingsClient();
            testClient.get(expectedSuccess, err => { });
    });
});

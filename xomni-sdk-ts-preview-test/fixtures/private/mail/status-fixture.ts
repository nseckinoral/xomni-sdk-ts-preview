TestHelpers.InitalizeTestContext();

describe('StatusClient.get', () => {
    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        expect(() => { testClient.get("", () => { }, err => { }) })
            .toThrow(new Error("email could not be null or empty"));
    });

    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "private/mail/subscription/dev@xomni.com/status");
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.get("dev@xomni.com", suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.get("dev@xomni.com", suc => { }, err => { });

    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.get("dev@xomni.com", suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, {
            "PIIName": "XOMNIAN",
            "StatusId": 1,
            "PurposeTypeId": 1,
            "IsSubscribable": true
        });

        var expectedSuccess = (ms: Models.Private.Mail.MailSubscription) => {
            expect(ms.PIIName).toEqual("XOMNIAN");
            expect(ms.PurposeTypeId).toEqual(1);
            expect(ms.StatusId).toEqual(1);
            expect(ms.IsSubscribable).toEqual(true);
        };

        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.get("dev@xomni.com", expectedSuccess, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.get("dev@xomni.com", suc=> { }, expectedError);
    });
});


describe('StatusClient.put', () => {
    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        expect(() => { testClient.put("", Models.Private.Mail.MailSubscriptionStatus.Unsubscribed, () => { }, err => { }) })
            .toThrow(new Error("email could not be null or empty"));

        expect(() => { testClient.put("dev@xomni.com", undefined, () => { }, err => { }) })
            .toThrow(new Error("statusId could not be null or empty"));
    });

    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, "private/mail/subscription/dev@xomni.com/status");
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.put("dev@xomni.com", Models.Private.Mail.MailSubscriptionStatus.Unsubscribed, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.put("dev@xomni.com", Models.Private.Mail.MailSubscriptionStatus.Unsubscribed, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.put("dev@xomni.com", Models.Private.Mail.MailSubscriptionStatus.Unsubscribed, () => { }, err => { });
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Private.Mail.Status.StatusClient();
        testClient.put("dev@xomni.com", Models.Private.Mail.MailSubscriptionStatus.Unsubscribed, () => { }, expectedError);
    });
}); 
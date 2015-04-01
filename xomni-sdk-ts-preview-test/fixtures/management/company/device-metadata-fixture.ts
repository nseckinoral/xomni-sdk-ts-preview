TestHelpers.InitalizeTestContext();
var validLicenseId = 1;
var validMetadataKey = "Key";
var validMetadataValue = "Value";
var validUri: string = "/management/company/licences/" + validLicenseId + "/devices/" + TestHelpers.uniqeId + "/metadata";
var validUriForDelete: string = validUri + "/" + validMetadataKey;
var metadata: Models.Management.Company.Metadata = {
    Key: "Sample metadata key",
    Value: "Sample metadata value"
};

var requestJson = {
    "Key": "Sample metadata key",
    "Value": "Sample metadata value"
};

var responseJson = {
    "Key": "Sample metadata key",
    "Value": "Sample metadata value"
};

describe('DeviceMetadataClient.post', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, responseJson);

        var expectedSuccess = (response: Models.Management.Company.Metadata) => {
            expect(response.Key).toEqual(metadata.Key);
            expect(response.Value).toEqual(metadata.Value);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Metadata) => {
            expect(request).toEqual(requestJson);
            expect(request.Key).toEqual(metadata.Key);
            expect(request.Value).toEqual(metadata.Value);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.post(null, TestHelpers.uniqeId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(undefined, TestHelpers.uniqeId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(validLicenseId, null, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.post(validLicenseId, undefined, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.post(validLicenseId, TestHelpers.uniqeId, null, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => { testClient.post(validLicenseId, TestHelpers.uniqeId, undefined, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: null,
                Value: "Value"
            };
            testClient.post(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: undefined,
                Value: "Value"
            };
            testClient.post(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: "Key",
                Value: null
            };
            testClient.post(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: "Key",
                Value: undefined
            };
            testClient.post(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

    });

    it("Should parse api exception response successfully (409)", () => {
        TestHelpers.APIExceptionResponseTest($, 409);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(409);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc=> { }, expectedError);
    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenseId, TestHelpers.uniqeId, metadata, suc=> { }, expectedError);
    });
});

describe('DeviceMetadataClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, responseJson);

        var expectedSuccess = (response: Models.Management.Company.Metadata) => {
            expect(response.Key).toEqual(metadata.Key);
            expect(response.Value).toEqual(metadata.Value);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Metadata) => {
            expect(request).toEqual(requestJson);
            expect(request.Key).toEqual(metadata.Key);
            expect(request.Value).toEqual(metadata.Value);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, suc=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.put(null, TestHelpers.uniqeId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.put(undefined, TestHelpers.uniqeId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.put(validLicenseId, null, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.put(validLicenseId, undefined, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.put(validLicenseId, TestHelpers.uniqeId, null, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => { testClient.put(validLicenseId, TestHelpers.uniqeId, undefined, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: null,
                Value: validMetadataValue
            };
            testClient.put(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: undefined,
                Value: validMetadataValue
            };
            testClient.put(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: validMetadataKey,
                Value: null
            };
            testClient.put(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: validMetadataKey,
                Value: undefined
            };
            testClient.put(validLicenseId, TestHelpers.uniqeId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

    });

    it("Should parse api exception response successfully (404)", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenseId, TestHelpers.uniqeId, metadata, suc=> { }, expectedError);
    });
});

describe('DeviceMetadataClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDelete);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenseId, TestHelpers.uniqeId, validMetadataKey, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenseId, TestHelpers.uniqeId, validMetadataKey, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenseId, TestHelpers.uniqeId, validMetadataKey, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.delete(null, TestHelpers.uniqeId, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.delete(undefined, TestHelpers.uniqeId, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.delete(validLicenseId, null, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(validLicenseId, undefined, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(validLicenseId, TestHelpers.uniqeId, null, () => { }, err => { }) })
            .toThrow(new Error("metadataKey could not be null or empty"));

        expect(() => { testClient.delete(validLicenseId, TestHelpers.uniqeId, undefined, () => { }, err => { }) })
            .toThrow(new Error("metadataKey could not be null or empty"));
    });

    it("Should parse api exception response ()cessfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenseId, TestHelpers.uniqeId, validMetadataKey, () => { }, expectedError);
    });
});

describe('DeviceMetadataClient.deleteAll', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenseId, TestHelpers.uniqeId,  () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenseId, TestHelpers.uniqeId,  () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenseId, TestHelpers.uniqeId,  () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.deleteAll(null, TestHelpers.uniqeId,  () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.deleteAll(undefined, TestHelpers.uniqeId,  () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.deleteAll(validLicenseId, null,  () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.deleteAll(validLicenseId, undefined,  () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));
    });

    it("Should parse api exception response ()cessfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenseId, TestHelpers.uniqeId,  () => { }, expectedError);
    });
});

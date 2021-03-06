﻿TestHelpers.InitalizeTestContext();
var validLicenceId = 1;
var invalidLicenceId = -1;
var validMetadataKey = "Key";
var validMetadataValue = "Value";
var validUri: string = "/management/company/licences/" + validLicenceId + "/devices/" + TestHelpers.uniqueId + "/metadata";
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
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Post");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, responseJson);

        var expectedSuccess = (response: Models.Management.Company.Metadata) => {
            expect(response.Key).toEqual(metadata.Key);
            expect(response.Value).toEqual(metadata.Value);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Metadata) => {
            expect(request).toEqual(requestJson);
            expect(request.Key).toEqual(metadata.Key);
            expect(request.Value).toEqual(metadata.Value);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.post(null, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(undefined, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(invalidLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId must be greater than or equal to 1"));

        expect(() => { testClient.post(validLicenceId, null, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.post(validLicenceId, undefined, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.post(validLicenceId, TestHelpers.uniqueId, null, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => { testClient.post(validLicenceId, TestHelpers.uniqueId, undefined, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: null,
                Value: "Value"
            };
            testClient.post(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: undefined,
                Value: "Value"
            };
            testClient.post(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: "Key",
                Value: null
            };
            testClient.post(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: "Key",
                Value: undefined
            };
            testClient.post(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
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
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc=> { }, expectedError);
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
        testClient.post(validLicenceId, TestHelpers.uniqueId, metadata, suc=> { }, expectedError);
    });
});

describe('DeviceMetadataClient.put', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Put");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { });
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, responseJson);

        var expectedSuccess = (response: Models.Management.Company.Metadata) => {
            expect(response.Key).toEqual(metadata.Key);
            expect(response.Value).toEqual(metadata.Value);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, expectedSuccess, err => { });
    });

    it("Should parse request successfully", () => {
        var parseMethod = (request: Models.Management.Company.Metadata) => {
            expect(request).toEqual(requestJson);
            expect(request.Key).toEqual(metadata.Key);
            expect(request.Value).toEqual(metadata.Value);
        };

        TestHelpers.RequestParseTest($, parseMethod);

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, suc=> { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.put(null, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.put(undefined, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(invalidLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId must be greater than or equal to 1"));

        expect(() => { testClient.put(validLicenceId, null, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.put(validLicenceId, undefined, metadata, suc => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.put(validLicenceId, TestHelpers.uniqueId, null, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => { testClient.put(validLicenceId, TestHelpers.uniqueId, undefined, suc => { }, err => { }) })
            .toThrow(new Error("metadata could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: null,
                Value: validMetadataValue
            };
            testClient.put(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: undefined,
                Value: validMetadataValue
            };
            testClient.put(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("key could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: validMetadataKey,
                Value: null
            };
            testClient.put(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
        }).toThrow(new Error("value could not be null or empty"));

        expect(() => {
            var invalidMetadata: Models.Management.Company.Metadata = {
                Key: validMetadataKey,
                Value: undefined
            };
            testClient.put(validLicenceId, TestHelpers.uniqueId, invalidMetadata, suc => { }, err => { })
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
        testClient.put(validLicenceId, TestHelpers.uniqueId, metadata, suc=> { }, expectedError);
    });
});

describe('DeviceMetadataClient.delete', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDelete);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenceId, TestHelpers.uniqueId, validMetadataKey, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenceId, TestHelpers.uniqueId, validMetadataKey, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenceId, TestHelpers.uniqueId, validMetadataKey, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.delete(null, TestHelpers.uniqueId, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.delete(undefined, TestHelpers.uniqueId, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(invalidLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId must be greater than or equal to 1"));

        expect(() => { testClient.delete(validLicenceId, null, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(validLicenceId, undefined, validMetadataKey, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.delete(validLicenceId, TestHelpers.uniqueId, null, () => { }, err => { }) })
            .toThrow(new Error("metadataKey could not be null or empty"));

        expect(() => { testClient.delete(validLicenceId, TestHelpers.uniqueId, undefined, () => { }, err => { }) })
            .toThrow(new Error("metadataKey could not be null or empty"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.delete(validLicenceId, TestHelpers.uniqueId, validMetadataKey, () => { }, expectedError);
    });
});

describe('DeviceMetadataClient.deleteAll', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenceId, TestHelpers.uniqueId, () => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Delete");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenceId, TestHelpers.uniqueId, () => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenceId, TestHelpers.uniqueId, () => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.deleteAll(null, TestHelpers.uniqueId, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.deleteAll(undefined, TestHelpers.uniqueId, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(invalidLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId must be greater than or equal to 1"));

        expect(() => { testClient.deleteAll(validLicenceId, null, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.deleteAll(validLicenceId, undefined, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));
    });

    it("Should parse api exception response successfully", () => {
        TestHelpers.APIExceptionResponseTest($, 404);

        var expectedError = (exception: Models.ExceptionResult) => {
            expect(exception.HttpStatusCode).toEqual(404);
            expect(exception.FriendlyDescription).toEqual("Generic error friendly description.");
            expect(exception.IdentifierGuid).toEqual("7358fe16-3925-4951-9a77-fca4f9e167b0");
            expect(exception.IdentifierTick).toEqual(635585478999549713);
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.deleteAll(validLicenceId, TestHelpers.uniqueId, () => { }, expectedError);
    });
});

describe('DeviceMetadataClient.get', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUri);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.get(validLicenceId, TestHelpers.uniqueId, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.get(validLicenceId, TestHelpers.uniqueId, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.get(validLicenceId, TestHelpers.uniqueId, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();

        expect(() => { testClient.get(null, TestHelpers.uniqueId, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.get(undefined, TestHelpers.uniqueId, () => { }, err => { }) })
            .toThrow(new Error("licenceId could not be null or empty"));

        expect(() => { testClient.post(invalidLicenceId, TestHelpers.uniqueId, metadata, suc => { }, err => { }) })
            .toThrow(new Error("licenceId must be greater than or equal to 1"));

        expect(() => { testClient.get(validLicenceId, null, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));

        expect(() => { testClient.get(validLicenceId, undefined, () => { }, err => { }) })
            .toThrow(new Error("deviceId could not be null or empty"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($, [
            {
                "Key": "Sample metadata key 1",
                "Value": "Sample metadata value 1",
            },
            {
                "Key": "Sample metadata key 2",
                "Value": "Sample metadata value 2",
            },
            {
                "Key": "Sample metadata key 3",
                "Value": "Sample metadata value 3",
            },
            {
                "Key": "Sample metadata key 4",
                "Value": "Sample metadata value 4",
            },
            {
                "Key": "Sample metadata key 5",
                "Value": "Sample metadata value 5",
            }
        ]);

        var expectedSuccess = (metadataList: Array<Models.Management.Company.Metadata>) => {
            expect(metadataList.length).toEqual(5);
            expect(metadataList[0].Key).toEqual("Sample metadata key 1");
            expect(metadataList[0].Value).toEqual("Sample metadata value 1");
            expect(metadataList[1].Key).toEqual("Sample metadata key 2");
            expect(metadataList[1].Value).toEqual("Sample metadata value 2");
            expect(metadataList[2].Key).toEqual("Sample metadata key 3");
            expect(metadataList[2].Value).toEqual("Sample metadata value 3");
            expect(metadataList[3].Key).toEqual("Sample metadata key 4");
            expect(metadataList[3].Value).toEqual("Sample metadata value 4");
            expect(metadataList[4].Key).toEqual("Sample metadata key 5");
            expect(metadataList[4].Value).toEqual("Sample metadata value 5");
        };

        var testClient = new Xomni.Management.Company.DeviceMetadata.DeviceMetadataClient();
        testClient.get(validLicenceId, TestHelpers.uniqueId, expectedSuccess, err => { });
    });
});
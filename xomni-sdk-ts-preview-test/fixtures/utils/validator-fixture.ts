var sampleArgName: string = "sampleArgName";
var sampleArgValue: number = 0;
var sampleBound: number = 7;
var sampleMinParameterName: string = "sampleMinParameterName";
var sampleMinParameter: number = -1;
var sampleMaxParameterName: string = "sampleMaxParameterName";
var sampleMaxParameter: number = 5;

describe('Validator.isDefined', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isDefined(sampleArgName, null) })
            .toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isDefined(sampleArgName, undefined) })
            .toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isDefined(null, sampleArgValue) })
            .toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isDefined(undefined, sampleArgValue) })
            .toThrow(new Error("Argument name could not be null or empty"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isDefined(sampleArgName, sampleArgValue) })
            .not.toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isDefined(sampleArgName, sampleArgValue) })
            .not.toThrow(new Error("Argument name could not be null or empty"));
    });
});

describe('Validator.isGreaterThanOrEqual', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, null, sampleBound) })
            .toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, undefined, sampleBound) })
            .toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(null, sampleArgValue, sampleBound) })
            .toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(undefined, sampleArgValue, sampleBound) })
            .toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, null) })
            .toThrow(new Error("bound could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, undefined) })
            .toThrow(new Error("bound could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleMaxParameter) })
            .toThrow(new Error("sampleArgName must be greater than or equal to 5"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleBound) })
            .not.toThrow(new Error("sampleArgName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleBound) })
            .not.toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleBound) })
            .not.toThrow(new Error("bound could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleBound) })
            .toThrow(new Error("sampleArgName must be greater than or equal to 7"));

        expect(() => { Xomni.Utils.Validator.isGreaterThanOrEqual(sampleArgName, sampleArgValue, sampleBound) })
            .not.toThrow(new Error("sampleArgName must be greater than or equal to -1"));
    });
});

describe('Validator.isLessThan', () => {
    it("Should throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMinParameter, null, sampleMaxParameter, sampleMaxParameterName) })
            .toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMinParameter, undefined, sampleMaxParameter, sampleMaxParameterName) })
            .toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isLessThan(null, sampleMinParameterName, sampleMaxParameter, sampleMaxParameterName) })
            .toThrow(new Error("sampleMinParameterName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isLessThan(undefined, sampleMinParameterName, sampleMaxParameter, sampleMaxParameterName) })
            .toThrow(new Error("sampleMinParameterName could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMaxParameter, sampleMinParameterName, sampleMinParameter, sampleMaxParameterName) })
            .toThrow(new Error("sampleMinParameterName could not be greater than sampleMaxParameterName"));
    });

    it("Should not throw could not be null or empty exception", () => {
        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMinParameter, sampleMinParameterName, sampleMaxParameter, sampleMaxParameterName) })
            .not.toThrow(new Error("Argument name could not be null or empty"));

        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMinParameter, sampleMinParameterName, sampleMaxParameter, sampleMaxParameterName) })
            .not.toThrow(new Error("sampleMinParameterName could not be null or empty"));
    });

    it("Should not throw could not be greater than exception", () => {
        expect(() => { Xomni.Utils.Validator.isLessThan(sampleMinParameter, sampleMinParameterName, sampleMaxParameter, sampleMaxParameterName) })
            .not.toThrow(new Error("sampleMinParameterName could not be greater than sampleMaxParameterName"));
    });
}); 
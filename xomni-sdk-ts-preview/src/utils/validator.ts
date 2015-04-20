module Xomni.Utils {
    export class Validator {
        static isDefined(argName: string, argValue: any): void {
            if (!argName) {
                throw new Error("Argument name could not be null or empty");
            }
            if ((typeof (argValue) === "string" || argValue != 0) && !argValue) {
                throw new Error(argName + " could not be null or empty");
            }
        }

        static isGreaterThanOrEqual(argName: string, argValue: number, bound: number): void {
            this.isDefined(argName, argValue);
            this.isDefined("bound", bound);
            if (argValue < bound) {
                throw new Error(argName + " must be greater than or equal to " + bound);
            }
        }

        static isLessThan(minValue: number, minParameterName: string, maxValue: number, maxParameterName?: string): void {
            this.isDefined(minParameterName, minValue);

            if (maxParameterName) {
                this.isDefined(maxParameterName, maxValue);
                if (minValue > maxValue) {
                    throw new Error(minParameterName + " could not be greater than " + maxParameterName);
                }
            }
            else {
                this.isDefined("maxParameter", maxValue);
                if (minValue > maxValue) {
                    throw new Error(minParameterName + " could not be greater than " + maxValue);
                }
            }
        }

        static isDateValid(argName: string, date: string) {
            this.isDefined(argName, date);
            if (isNaN(Date.parse(date))) {
                throw new Error(argName + " format is invalid");
            }
        }
    }
}  
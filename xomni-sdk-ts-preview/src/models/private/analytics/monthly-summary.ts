/// <reference path="yearly-summary.ts" />
module Models.Private.Analytics {
    export interface MonthlyCountSummary extends YearlyCountSummary {
        Month: number;
    }
}   
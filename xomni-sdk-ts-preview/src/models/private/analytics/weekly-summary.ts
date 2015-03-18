/// <reference path="monthly-summary.ts" />
module Models.Private.Analytics {
    export interface WeeklyCountSummary extends MonthlyCountSummary {
        WeekOfYear : number;
    }
}  
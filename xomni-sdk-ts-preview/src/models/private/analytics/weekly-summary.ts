module Models.Private.Analytics {
    export interface WeeklyCountSummary extends MonthlyCountSummary {
        WeekOfYear : number;
    }
}  
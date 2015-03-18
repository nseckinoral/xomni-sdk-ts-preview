/// <reference path="base-analytics-summary.ts" />
module Models.Private.Analytics {
    export interface YearlyCountSummary extends BaseAnalyticsCountSummary {
        Year: number;
    }
}  
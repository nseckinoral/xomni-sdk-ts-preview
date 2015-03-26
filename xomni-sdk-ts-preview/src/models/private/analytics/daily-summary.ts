module Models.Private.Analytics {
    export interface DailyCountSummary extends WeeklyCountSummary {
        Day: number;
    }
}   
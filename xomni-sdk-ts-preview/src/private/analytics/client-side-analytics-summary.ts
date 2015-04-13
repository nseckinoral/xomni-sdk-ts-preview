/// <reference path="../../xomni.ts" />
module Xomni.Private.Analytics.ClientSideAnalyticsSummary {
    export class ClientSideAnalyticsLogSummaryClient extends BaseClient {
        private weeklyLogSummaryUri: string = '/private/analytics/clientcounters/{counterName}/summary/weekly';
        private dailyLogSummaryUri: string = '/private/analytics/clientcounters/{counterName}/summary/daily';
        private monthlyLogSummaryUri: string = '/private/analytics/clientcounters/{counterName}/summary/monthly';
        private yearlyLogSummaryUri: string = '/private/analytics/clientcounters/{counterName}/summary/yearly';

        getDailyLogs(counterName: string, startOADate: number, endOADate: number, success: (result: Models.Private.Analytics.DailyCountSummary[]) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("counterName", counterName);
            Xomni.Utils.Validator.isGreaterThanOrEqual("startOADate", startOADate, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("endOADate", endOADate, 1);
            Xomni.Utils.Validator.isLessThan(startOADate,"startOADate", endOADate, "endOADate" );
            var uri = this.PrepareUri(this.dailyLogSummaryUri, counterName, startOADate, endOADate);
            this.httpProvider.get(uri, success, error);
        }

        getWeeklyLogs(counterName: string, startOADate: number, endOADate: number, success: (result: Models.Private.Analytics.WeeklyCountSummary[]) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("counterName", counterName);
            Xomni.Utils.Validator.isGreaterThanOrEqual("startOADate", startOADate, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("endOADate", endOADate, 1);
            Xomni.Utils.Validator.isLessThan(startOADate, "startOADate", endOADate, "endOADate");
            var uri = this.PrepareUri(this.weeklyLogSummaryUri, counterName, startOADate, endOADate);
            this.httpProvider.get(uri, success, error);
        }

        getMonthlyLogs(counterName: string, startOADate: number, endOADate: number, success: (result: Models.Private.Analytics.MonthlyCountSummary[]) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("counterName", counterName);
            Xomni.Utils.Validator.isGreaterThanOrEqual("startOADate", startOADate, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("endOADate", endOADate, 1);
            Xomni.Utils.Validator.isLessThan(startOADate, "startOADate", endOADate, "endOADate");
            var uri = this.PrepareUri(this.monthlyLogSummaryUri, counterName, startOADate, endOADate);
            this.httpProvider.get(uri, success, error);
        }

        getYearlyLogs(counterName: string, startOADate: number, endOADate: number, success: (result: Models.Private.Analytics.YearlyCountSummary[]) => void, error: (error: Models.ExceptionResult) => void) {
            Xomni.Utils.Validator.isDefined("counterName", counterName);
            Xomni.Utils.Validator.isGreaterThanOrEqual("startOADate", startOADate, 1);
            Xomni.Utils.Validator.isGreaterThanOrEqual("endOADate", endOADate, 1);
            Xomni.Utils.Validator.isLessThan(startOADate, "startOADate", endOADate, "endOADate");
            var uri = this.PrepareUri(this.yearlyLogSummaryUri, counterName, startOADate, endOADate);
            this.httpProvider.get(uri, success, error);
        }

        private PrepareUri(baseUri: string, counterName: string, startOADate: number, endOADate: number): string {
            var uri = baseUri.replace("{counterName}", counterName);
            uri = Xomni.Utils.UrlGenerator.PrepareOperationUrlWithMultipleParameters(uri, new Dictionary<string, string>([
                { key: "startOADate", value: startOADate.toString() },
                { key: "endOADate", value: endOADate.toString() }
            ]));
            return uri;
        }
    }
}

/// <chutzpah_reference path="../../src/client-side-analytics-summary.ts" />
/// <chutzpah_reference path="../../definitions/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="../../definitions/jquery/jquery.d.ts" />
/// <chutzpah_reference path="../test-helpers.ts" />

TestHelpers.InitalizeTestContext();
var validCounterName: string = "test";
var validStartOADate: number = 49720;
var validEndOADate: number = 49721;
var validUriForDailyLogs: string = "/private/analytics/clientcounters/" + validCounterName + "/summary/daily?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForWeeklyLogs: string = "/private/analytics/clientcounters/" + validCounterName + "/summary/weekly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForMonthlyLogs: string = "/private/analytics/clientcounters/" + validCounterName + "/summary/monthly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForYearlyLogs: string = "/private/analytics/clientcounters/" + validCounterName + "/summary/yearly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;

describe('ClientSideAnalyticsLogSummaryClient.getDailyLogs', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForDailyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(() => { testClient.getDailyLogs(null, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getDailyLogs("", validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getDailyLogs(undefined, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getDailyLogs(validCounterName, 0, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be less than 1"));

        expect(() => { testClient.getDailyLogs(validCounterName, validStartOADate, 0, suc => { }, err => { }) })
            .toThrow(new Error("endOADate could not be less than 1"));

        expect(() => { testClient.getDailyLogs(validCounterName, validEndOADate, validStartOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($,
            [
                {
                    "Day": 21,
                    "WeekOfYear": 12,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 91
                },
                {
                    "Day": 22,
                    "WeekOfYear": 12,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 135
                },
                {
                    "Day": 23,
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 106
                },
                {
                    "Day": 24,
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 139
                },
                {
                    "Day": 25,
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 81
                }
            ]);

        var expectedSuccess = (dailySummary: Xomni.Private.Analytics.ClientSideAnalyticsSummary.DailyCountSummary[]) => {
            expect(dailySummary[0].Day).toEqual(21);
            expect(dailySummary[0].WeekOfYear).toEqual(12);
            expect(dailySummary[0].Month).toEqual(3);
            expect(dailySummary[0].Year).toEqual(2015);
            expect(dailySummary[0].TotalCount).toEqual(91);
            expect(dailySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, err => { });
    });
});


describe('ClientSideAnalyticsLogSummaryClient.getWeeklyLogs', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForWeeklyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(() => { testClient.getWeeklyLogs(null, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getWeeklyLogs("", validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getWeeklyLogs(undefined, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getWeeklyLogs(validCounterName, 0, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be less than 1"));

        expect(() => { testClient.getWeeklyLogs(validCounterName, validStartOADate, 0, suc => { }, err => { }) })
            .toThrow(new Error("endOADate could not be less than 1"));

        expect(() => { testClient.getWeeklyLogs(validCounterName, validEndOADate, validStartOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($,
            [
                {
                    "WeekOfYear": 12,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 91
                },
                {
                    "WeekOfYear": 12,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 135
                },
                {
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 106
                },
                {
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 139
                },
                {
                    "WeekOfYear": 13,
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 81
                }
            ]);

        var expectedSuccess = (weeklySummary: Xomni.Private.Analytics.ClientSideAnalyticsSummary.WeeklyCountSummary[]) => {
            expect(weeklySummary[0].WeekOfYear).toEqual(12);
            expect(weeklySummary[0].Month).toEqual(3);
            expect(weeklySummary[0].Year).toEqual(2015);
            expect(weeklySummary[0].TotalCount).toEqual(91);
            expect(weeklySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, err => { });
    });
});

describe('ClientSideAnalyticsLogSummaryClient.getMonthlyLogs', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForMonthlyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(() => { testClient.getMonthlyLogs(null, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getMonthlyLogs("", validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getMonthlyLogs(undefined, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getMonthlyLogs(validCounterName, 0, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be less than 1"));

        expect(() => { testClient.getMonthlyLogs(validCounterName, validStartOADate, 0, suc => { }, err => { }) })
            .toThrow(new Error("endOADate could not be less than 1"));

        expect(() => { testClient.getMonthlyLogs(validCounterName, validEndOADate, validStartOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($,
            [
                {
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 91
                },
                {
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 135
                },
                {
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 106
                },
                {
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 139
                },
                {
                    "Month": 3,
                    "Year": 2015,
                    "TotalCount": 81
                }
            ]);

        var expectedSuccess = (monthlySummary: Xomni.Private.Analytics.ClientSideAnalyticsSummary.MonthlyCountSummary[]) => {
            expect(monthlySummary[0].Month).toEqual(3);
            expect(monthlySummary[0].Year).toEqual(2015);
            expect(monthlySummary[0].TotalCount).toEqual(91);
            expect(monthlySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, err => { });
    });
});

describe('ClientSideAnalyticsLogSummaryClient.getYearlyLogs', () => {
    it("Should hit correct url", () => {
        TestHelpers.RequestUriTest($, validUriForYearlyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http method", () => {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should use correct http headers", () => {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, suc => { }, err => { });
    });

    it("Should raise exception with invalid parameters", () => {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(() => { testClient.getYearlyLogs(null, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getYearlyLogs("", validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getYearlyLogs(undefined, validStartOADate, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("counterName could not be null or empty"));

        expect(() => { testClient.getYearlyLogs(validCounterName, 0, validEndOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be less than 1"));

        expect(() => { testClient.getYearlyLogs(validCounterName, validStartOADate, 0, suc => { }, err => { }) })
            .toThrow(new Error("endOADate could not be less than 1"));

        expect(() => { testClient.getYearlyLogs(validCounterName, validEndOADate, validStartOADate, suc => { }, err => { }) })
            .toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", () => {
        TestHelpers.ResponseParseTest($,
            [
                {
                    "Year": 2015,
                    "TotalCount": 91
                },
                {
                    "Year": 2015,
                    "TotalCount": 135
                },
                {
                    "Year": 2015,
                    "TotalCount": 106
                },
                {
                    "Year": 2015,
                    "TotalCount": 139
                },
                {
                    "Year": 2015,
                    "TotalCount": 81
                }
            ]);

        var expectedSuccess = (yearlySummary: Xomni.Private.Analytics.ClientSideAnalyticsSummary.YearlyCountSummary[]) => {
            expect(yearlySummary[0].Year).toEqual(2015);
            expect(yearlySummary[0].TotalCount).toEqual(91);
            expect(yearlySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, err => { });
    });
});
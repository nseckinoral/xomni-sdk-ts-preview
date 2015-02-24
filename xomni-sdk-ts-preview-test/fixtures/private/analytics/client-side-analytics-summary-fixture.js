TestHelpers.InitalizeTestContext();
var validCounterName = "test";
var validStartOADate = 49720;
var validEndOADate = 49721;
var validUriForDailyLogs = "/private/analytics/clientcounters/" + validCounterName + "/summary/daily?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForWeeklyLogs = "/private/analytics/clientcounters/" + validCounterName + "/summary/weekly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForMonthlyLogs = "/private/analytics/clientcounters/" + validCounterName + "/summary/monthly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;
var validUriForYearlyLogs = "/private/analytics/clientcounters/" + validCounterName + "/summary/yearly?startOADate=" + validStartOADate + "&endOADate=" + validEndOADate;

describe('ClientSideAnalyticsLogSummaryClient.getDailyLogs', function () {
    it("Should hit correct url", function () {
        TestHelpers.RequestUriTest($, validUriForDailyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should raise exception with invalid parameters", function () {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(function () {
            testClient.getDailyLogs(null, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getDailyLogs("", validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getDailyLogs(undefined, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getDailyLogs(validCounterName, 0, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be less than 1"));

        expect(function () {
            testClient.getDailyLogs(validCounterName, validStartOADate, 0, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("endOADate could not be less than 1"));

        expect(function () {
            testClient.getDailyLogs(validCounterName, validEndOADate, validStartOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", function () {
        TestHelpers.ResponseParseTest($, [
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

        var expectedSuccess = function (dailySummary) {
            expect(dailySummary[0].Day).toEqual(21);
            expect(dailySummary[0].WeekOfYear).toEqual(12);
            expect(dailySummary[0].Month).toEqual(3);
            expect(dailySummary[0].Year).toEqual(2015);
            expect(dailySummary[0].TotalCount).toEqual(91);
            expect(dailySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getDailyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, function (err) {
        });
    });
});

describe('ClientSideAnalyticsLogSummaryClient.getWeeklyLogs', function () {
    it("Should hit correct url", function () {
        TestHelpers.RequestUriTest($, validUriForWeeklyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should raise exception with invalid parameters", function () {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(function () {
            testClient.getWeeklyLogs(null, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getWeeklyLogs("", validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getWeeklyLogs(undefined, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getWeeklyLogs(validCounterName, 0, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be less than 1"));

        expect(function () {
            testClient.getWeeklyLogs(validCounterName, validStartOADate, 0, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("endOADate could not be less than 1"));

        expect(function () {
            testClient.getWeeklyLogs(validCounterName, validEndOADate, validStartOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", function () {
        TestHelpers.ResponseParseTest($, [
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

        var expectedSuccess = function (weeklySummary) {
            expect(weeklySummary[0].WeekOfYear).toEqual(12);
            expect(weeklySummary[0].Month).toEqual(3);
            expect(weeklySummary[0].Year).toEqual(2015);
            expect(weeklySummary[0].TotalCount).toEqual(91);
            expect(weeklySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getWeeklyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, function (err) {
        });
    });
});

describe('ClientSideAnalyticsLogSummaryClient.getMonthlyLogs', function () {
    it("Should hit correct url", function () {
        TestHelpers.RequestUriTest($, validUriForMonthlyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should raise exception with invalid parameters", function () {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(function () {
            testClient.getMonthlyLogs(null, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getMonthlyLogs("", validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getMonthlyLogs(undefined, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getMonthlyLogs(validCounterName, 0, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be less than 1"));

        expect(function () {
            testClient.getMonthlyLogs(validCounterName, validStartOADate, 0, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("endOADate could not be less than 1"));

        expect(function () {
            testClient.getMonthlyLogs(validCounterName, validEndOADate, validStartOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", function () {
        TestHelpers.ResponseParseTest($, [
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

        var expectedSuccess = function (monthlySummary) {
            expect(monthlySummary[0].Month).toEqual(3);
            expect(monthlySummary[0].Year).toEqual(2015);
            expect(monthlySummary[0].TotalCount).toEqual(91);
            expect(monthlySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getMonthlyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, function (err) {
        });
    });
});

describe('ClientSideAnalyticsLogSummaryClient.getYearlyLogs', function () {
    it("Should hit correct url", function () {
        TestHelpers.RequestUriTest($, validUriForYearlyLogs);
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http method", function () {
        TestHelpers.RequestHttpMethodTest($, "Get");
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should use correct http headers", function () {
        TestHelpers.RequestHttpHeadersTest($);

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, function (suc) {
        }, function (err) {
        });
    });

    it("Should raise exception with invalid parameters", function () {
        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        expect(function () {
            testClient.getYearlyLogs(null, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getYearlyLogs("", validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getYearlyLogs(undefined, validStartOADate, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("counterName could not be null or empty"));

        expect(function () {
            testClient.getYearlyLogs(validCounterName, 0, validEndOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be less than 1"));

        expect(function () {
            testClient.getYearlyLogs(validCounterName, validStartOADate, 0, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("endOADate could not be less than 1"));

        expect(function () {
            testClient.getYearlyLogs(validCounterName, validEndOADate, validStartOADate, function (suc) {
            }, function (err) {
            });
        }).toThrow(new Error("startOADate could not be greater than endOADate"));
    });

    it("Should parse response successfully", function () {
        TestHelpers.ResponseParseTest($, [
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

        var expectedSuccess = function (yearlySummary) {
            expect(yearlySummary[0].Year).toEqual(2015);
            expect(yearlySummary[0].TotalCount).toEqual(91);
            expect(yearlySummary.length).toEqual(5);
        };

        var testClient = new Xomni.Private.Analytics.ClientSideAnalyticsSummary.ClientSideAnalyticsLogSummaryClient();
        testClient.getYearlyLogs(validCounterName, validStartOADate, validEndOADate, expectedSuccess, function (err) {
        });
    });
});
//# sourceMappingURL=client-side-analytics-summary-fixture.js.map

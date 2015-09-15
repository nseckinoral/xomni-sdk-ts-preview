var centralAmericaTime = "Thu Apr 23 2015 04:44:53 GMT-0600 (Central America Standard Time)";
describe("UTCDate", () => {
    it("Should throw date format is invalid exception", () => {
        expect(() => { new Models.UTCDate("Thu Apr 23 2015 11:43-48 GMT+0300 (Turkey Daylight Time)") })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate("Thu Apr 232015") })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate("2015-04-22-21:00:00.000Z") })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate("23.04-2015") })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate("23.04.2015 00/00/00") })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toLocaleTimeString()) })
            .toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toTimeString()) })
            .toThrow(new Error("date format is invalid"));
    });

    it("Should not throw date format is invalid exception", () => {
        expect(() => { new Models.UTCDate(new Date().toString()) })
            .not.toThrow(new Error("date format is invalid .toString()"));

        expect(() => { new Models.UTCDate(new Date().toDateString()) })
            .not.toThrow(new Error("date format is invalid .toDateString()"));

        expect(() => { new Models.UTCDate(new Date().toISOString()) })
            .not.toThrow(new Error("date format is invalid .toISOString()"));

        expect(() => { new Models.UTCDate(new Date().toJSON()) })
            .not.toThrow(new Error("date format is invalid .toJSON()"));

        expect(() => { new Models.UTCDate(new Date().toLocaleDateString()) })
            .not.toThrow(new Error("date format is invalid .toLocaleDateString()"));

        expect(() => { new Models.UTCDate(new Date().toLocaleString()) })
            .not.toThrow(new Error("date format is invalid .toLocaleString()"));

        expect(() => { new Models.UTCDate(new Date().toUTCString()) })
            .not.toThrow(new Error("date format is invalid .toUTCString()"));

        expect(() => { new Models.UTCDate(new Date().toLocaleString("en-us")) })
            .not.toThrow(new Error("date format is invalid .toLocaleString(\"en- us\")"));

        expect(() => { new Models.UTCDate(centralAmericaTime) })
            .not.toThrow(new Error("date format is invalid centralAmericaTime"));
    });

    it("Should timezone convertion correct", () => {
        var date = new Models.UTCDate(centralAmericaTime);
        var timezoneOffsetInHour = date.getDate().getTimezoneOffset() / 60 * -1;
        var expectedTimeZone = "";
        if (timezoneOffsetInHour.toString().length > 2) {
            if (timezoneOffsetInHour < 0) {
                expectedTimeZone = timezoneOffsetInHour + ":00";
            }
            else {
                expectedTimeZone = "+" + timezoneOffsetInHour + ":00";
            }
        }
        else {
            if (timezoneOffsetInHour < 0) {
                expectedTimeZone = "-0" + timezoneOffsetInHour.toString()[1] + ":00";
            }
            else {
                expectedTimeZone = "+0" + timezoneOffsetInHour + ":00";
            }
        }
        
        expect(date.getTimeZone()).toEqual(expectedTimeZone);
    });

    it("Should UTC format correct", () => {
        var date = new Models.UTCDate(centralAmericaTime);

        var re1 = '((?:2|1)\\d{3}(?:-|\\/)(?:(?:0[1-9])|(?:1[0-2]))(?:-|\\/)(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1]))(?:T|\\s)(?:(?:[0-1][0-9])|(?:2[0-3])):(?:[0-5][0-9]):(?:[0-5][0-9]))';	// Time Stamp 1
        var re2 = '(\\.)';	// Any Single Character 1
        var re3 = '(\\d)';	// Any Single Digit 1
        var re4 = '(\\+)';	// Any Single Character 2
        var re5 = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)';	// HourMinuteSec 1

        var p = new RegExp(re1 + re2 + re3 + re4 + re5);
        var m = p.exec(date.toUTCString());

        expect(m).not.toBeNull();
    });

    it("Should dates be equal", () => {
        var utcDate = new Models.UTCDate(centralAmericaTime);
        var date = new Date(centralAmericaTime);
        expect(utcDate.getDate()).toEqual(date);
    });

    it("Should throw date could not be null or empty exception", () => {
        expect(() => {
            new Models.UTCDate().setDate(null);
        }).toThrow(new Error("date could not be null or empty"));

        expect(() => {
            new Models.UTCDate().setDate(undefined);
        }).toThrow(new Error("date could not be null or empty"));
    });

    it("Should correct parse the excees milliseconds", () => {
        var date = new Models.UTCDate("2014-08-08T12:37:28.8573855+03:00");
        var testDate = new Date(date.toUTCString());
        expect(date.toUTCString()).toContain("8573855");
    });
});

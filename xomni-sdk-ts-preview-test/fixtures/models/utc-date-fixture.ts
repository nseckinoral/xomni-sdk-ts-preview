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
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toDateString()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toISOString()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toJSON()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toLocaleDateString()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toLocaleString()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toUTCString()) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(new Date().toLocaleString("en-us")) })
            .not.toThrow(new Error("date format is invalid"));

        expect(() => { new Models.UTCDate(centralAmericaTime) })
            .not.toThrow(new Error("date format is invalid"));
    });

    it("Should timezone convertion correct", () => {
        var date = new Models.UTCDate(centralAmericaTime);
        expect(date.getTimeZone()).toEqual("+03:00");
    });

    it("Should UTC format correct", () => {
        var date = new Models.UTCDate(centralAmericaTime);
        expect(date.toUTCString()).toEqual("2015-04-23T13:44:53.0+03:00");
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
        expect(date.toUTCString()).toEqual("2014-08-08T12:37:28.8573855+03:00");

        date.setDate("2014-08-08T12:37:28.8573855-03:00");
        expect(date.toUTCString()).toEqual("2014-08-08T18:37:28.8573855+03:00");
    });

    it("Should produce correct json", () => {
        var date = new Models.UTCDate();
        expect(date.toJSON()).toEqual(null);

        date.setDate(centralAmericaTime);
        expect(date.toJSON()).toEqual("2015-04-23T13:44:53.0+03:00");
    });
});

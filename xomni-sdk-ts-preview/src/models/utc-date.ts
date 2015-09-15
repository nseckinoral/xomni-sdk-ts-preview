module Models {
    export class UTCDate {
        private date: Date;
        private excessMillisecond: string;

        constructor(date?: string) {
            if (date) {
                this.setDate(date);
            }
        }

        toJSON() {
            return this.toUTCString()
        }

        getDate() {
            return this.date;
        }

        setDate(date: string) {
            Xomni.Utils.Validator.isDateValid("date", date);
            this.keepExcessMillisecond(date);
            this.date = new Date(date);
            this.date.toJSON = this.toJSON;
        }

        toUTCString() {
            if (this.date) {
                var combinedDate = this.date.toISOString().substr(0, 11) +
                    this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + "." +
                    this.date.getUTCMilliseconds() + this.excessMillisecond +
                    this.getTimeZone();
                return combinedDate;
            }
            else {
                return null;
            }
        }

        private keepExcessMillisecond(date: string) {
            Xomni.Utils.Validator.isDateValid("date", date);
            this.excessMillisecond = "";
            if (date.indexOf("T") != -1 && (date.indexOf("+") != -1 || date.indexOf("-") != -1)) {
                var dateAndTime = date.split("T");
                var time = dateAndTime[1];
                var index = time.indexOf("+");
                index = index < 0 ? time.indexOf("-") : index;
                time = time.substring(index - 4, index);
                this.excessMillisecond = time;
            }
        }

        getTimeZone() {
            if (this.date) {
                var splittedDate = this.date.toString().split(" ");
                var timeZone = splittedDate[5];
                timeZone = timeZone.substring(3, 8);
                timeZone = timeZone.slice(0, 3) + ":" + timeZone.slice(3, 5);
                return timeZone;
            }
        }
    }
}

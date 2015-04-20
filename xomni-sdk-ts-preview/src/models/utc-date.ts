module Models {
    export class UTCDate {
        private date: Date;
        private excessMillisecond: string = "0000";

        constructor(date?: string) {
            this.setDate(date);
        }

        toJSON(key?: any) {
            return this.toUTCString()
        }

        getDate() {
            return this.date;
        }

        setDate(date?: string) {
            if (date) {
                Xomni.Utils.Validator.isDateValid("date",date);
                this.keepExcessMillisecond(date);
                this.date = new Date(date);
                this.date.toJSON = this.toJSON;
            }
        }

        toUTCString() {
            if (this.date) {
                var dateAndTime = this.date.toString().split("T");
                var timeZone = dateAndTime[1];
                timeZone = timeZone.substr(0, 5);
                var combinedDate = this.date.toISOString().substr(0, 11) +
                    this.date.toLocaleTimeString() + "." +
                    this.date.getMilliseconds() + this.excessMillisecond + "" +
                    timeZone.substr(0, 3) + ":" +
                    timeZone.substr(3, 5);

                return combinedDate;
            }
            else {
                return null;
            }
        }

        private keepExcessMillisecond(date: string) {
            Xomni.Utils.Validator.isDateValid("date", date);
            var dateAndTime = date.split("T");
            var date = dateAndTime[0];
            var time = dateAndTime[1];
            var index = time.indexOf("+") || time.indexOf("-");
            time = time.substring(index - 4, index);
            this.excessMillisecond = time;
        }
    }
}

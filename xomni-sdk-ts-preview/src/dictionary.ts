module Xomni {
    export class Dictionary<K, V> {
        private keyArray: K[] = [];
        private valueArray: V[] = [];

        constructor(init?: { key: K; value: V; }[]) {
            if (init) {
                for (var i = 0; i < init.length; i++) {
                    this.keyArray.push(init[i].key);
                    this.valueArray.push(init[i].value);
                }
            }
        }

        add(key: K, value: V) {
            this.keyArray.push(key);
            this.valueArray.push(value);
        }

        remove(key: K) {
            var index = this.keyArray.indexOf(key, 0);
            this.keyArray.splice(index, 1);
            this.valueArray.splice(index, 1);
        }

        keys(): K[] {
            return this.keyArray;
        }

        values(): V[] {
            return this.valueArray;
        }

        containsKey(key: K) {
            if (this.keyArray.indexOf(key) === undefined) {
                return false;
            }
            return true;
        }
    }
} 
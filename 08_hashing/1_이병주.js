class HashTable {
        constructor(text="") {
            this.table = new Array(137);
            this.values = [];

            this.parseText(text);
        }

        parseText(text=""){
            const textArray = text.split("/");

            textArray.forEach((v) => {
                let thisStr = v.split(" : ");
                this.put(thisStr[0],thisStr[1]);
            });
            console.log(this.table)
        }

        betterHash(string) {
            const H = 37;
            let total = 0;
            for (var i = 0; i < string.length; ++i) {
                total += H * total + string.charCodeAt(i);
            }
            total = total % this.table.length;
            if (total < 0) {
                total += this.table.length-1;
            }
            return parseInt(total);
        }

        put(key, data) {
            let pos = this.betterHash(key);
            if (this.table[pos] == undefined) {
                this.table[pos] = key;
                this.values[pos] = data;
            }
            else {
                while (this.table[pos] != undefined) {
                    pos++;
                }
                this.table[pos] = key;
                this.values[pos] = data;
            }
        }
        get(key) {
            let hash = -1;
            hash = this.betterHash(key);
            if (hash > -1) {
                for (var i = hash; this.table[hash] != undefined; i++) {
                    if (this.table[hash] == key) {
                        return this.values[hash];
                    }
                }
            }
            return undefined;
        }

        show(key){
            let thisValue = this.get(key);

            if(thisValue){
                console.log(key+"은 영어로 : "+thisValue+" 입니다")
            }else{
                console.log(key+"의 검색결과가 없습니다")
            }

        }

    }

    const str = "경제 개발 : economic development/국토 개발 : land development/기술 개발 : technical development/능력 개발 : manpower development/도시 개발 : urban development/산업 개발 : industrial development";
    let hashTable = new HashTable(str);

    hashTable.show("경제 개발");

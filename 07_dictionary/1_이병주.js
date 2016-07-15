class Dictionary {
        constructor() {
            this.obj = {};
        }

        add(key, value) {
            this.obj[key] = value;
        }

        find(key) {
            return this.obj[key];
        }

        remove(key) {
            delete this.obj[key];
        }
        sort(){
            const thisObj = this.obj;
            let sortedArray = Object.keys(this.obj).sort((a,b) => {
                return thisObj[b]-thisObj[a];
            });

            sortedArray.forEach((v) => {
                console.log(v+ " -> " + thisObj[v]);
            })



        }
        showAll(){
            const thisObj = this.obj;
            Object.keys(thisObj).forEach(function(key){
                console.log(key+ " -> " + thisObj[key]);
            });
        }
    }

    class AddressBook{
        constructor(str){
            this.dictionary = new Dictionary();
            this.targetString = str;
            this.toDictionary();
        }
        toDictionary(){
            let dic = this.dictionary;
            let stringArray = this.targetString.split("\n");

            stringArray.forEach((v) => {
                if(v != ""){
                    let thisMan = v.split(" : ");
                    this.dictionary.add(thisMan[0],thisMan[1]);
                }

            })
        }

        addNumber(name,number){
            this.dictionary.add(name,number);
        }

        deleteNumber(name){
            this.dictionary.remove(name)
        }

        showResult(){
            this.dictionary.showAll();
        }

    }

    let demoString = "이병주 : 010-6506-2402";
    demoString    += "\n";
    demoString    += "김병주 : 010-6506-2403";
    demoString    += "\n";
    demoString    += "나병주 : 010-6506-2404";
    demoString    += "\n";
    demoString    += "박병주 : 010-6506-2405";
    demoString    += "\n";
    demoString    += "최병주 : 010-6506-2406";
    demoString    += "\n";
    demoString    += "허병주 : 010-6506-2407";
    demoString    += "\n";
    demoString    += "문병주 : 010-6506-2408";
    demoString    += "\n";
    demoString    += "황병주 : 010-6506-2409";
    demoString    += "\n";
    demoString    += "강병주 : 010-6506-2400";
    demoString    += "\n";

    let test = new AddressBook(demoString);
    test.showResult();
    console.log("\n")
    console.log("----------------------")
    console.log("\n");
    console.log("황병주 추가");
    test.addNumber("황병주","010-5050-5123");
    test.showResult();
    console.log("\n")
    console.log("----------------------")
    console.log("\n")
    console.log("이병주 삭제");
    test.deleteNumber("이병주");
    test.showResult();

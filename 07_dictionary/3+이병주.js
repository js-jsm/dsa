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
            this.targetString = this.regExp(str);
            this.toDictionary();
        }
        toDictionary(){
            let dic = this.dictionary;
            let stringArray = this.targetString.split(" ");
            stringArray.forEach((v) => {
                if(dic.find(v)){
                let count = dic.find(v)
                  dic.add(v , count+1);
                }else{
                  dic.add(v, 1);
                }
            })

        }

        showResult(){
            this.dictionary.sort();
        }

        regExp(str){
            const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
            let result = "";

            if(regExp.test(str)){
                result = str.replace(regExp,"");
            }else{
                result = str;
            }
            return result;
        }

        readString(){

        }
    }

    const demoString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const demoString2 = "the brown fox jumped over the blue fox";

    let test = new AddressBook(demoString2);
    test.showResult();

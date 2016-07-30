  class List{
        constructor(){
            this.listSize = 0;
            this.pos = 0;
            this.dataStore = [];
        }
        add(value){
            this.dataStore.push(value);
        }
        addMaxValue(value) {
            let result = true;

            if (typeof value === 'number' || typeof value ==='string') {

                this.dataStore.forEach((v) => {
                    if(v > value){
                    result = false;
                }
                });

                if(result){
                    this.add(value);
                    console.log(value+" 추가")
                }else{
                    console.log("최대값이 아닙니다")
                }
            }

        }

        addMinValue(value){
            let result = true;

            if (typeof value === 'number' || typeof value === 'string') {
                this.dataStore.forEach((v) => {
                    if(v < value){
                    result = false;
                }
            });

                if(result){
                    this.dataStore.push(value);
                    console.log(value+" 추가")
                }else{
                    console.log("최소값이 아닙니다")
                }
            }
        }
    }

let test = new List();
    test.add("b")
    test.add("c")
    test.add("d")
    test.add("e")
    test.addMaxValue("f")
    test.addMaxValue("g");

    test.addMinValue("a")
    test.addMinValue("g");

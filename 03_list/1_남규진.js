class List {
    constructor() {
        this.dataStore = [];
    }

    add(data) {
        this.dataStore.push(data);
    }

    addMaxVal(data) {
        let isBiggest = true;

        if (typeof data === 'number' || typeof data === 'string') {
            for (let i=0, end=this.dataStore.length; i<end; ++i)
                if (this.dataStore[i] > data) {
                    isBiggest = false;
                    break;
                }

        } else {
            console.log("Not valid data type");
            return false;
        }

        if(isBiggest) this.add(data);
    }

    addMinVal(data) {
        let isSmallest = true;

        if (typeof data === 'number' || typeof data === 'string') {
            for (let i=0, end=this.dataStore.length; i<end; ++i)
                if (data > this.dataStore[i]) {
                    isSmallest = false;
                    break;
                }

        } else {
            console.log("Not valid data type");
            return false;
        }

        if(isSmallest) this.add(data);
    }
}

// Test Function
function addMaxValFailTest(dataList, addVal) {
    dataList.addMaxVal(addVal);

    if (-1 == numberList.dataStore.indexOf(2)) {
        console.log("addMaxValFailTest() Success");
    }  else {
        console.log("addMaxValFailTest() Failed: addMaxVal(" + addVal + ")");
    }
}

function addMaxValSuccessTest(dataList, addVal) {
    dataList.addMaxVal(addVal);

    if (dataList.dataStore[dataList.dataStore.length-1] == addVal) {
        console.log("addMaxValSuccessTest() Success");
        console.log()
    }  else {
        console.log("addMaxValSuccessTest() Failed: addMaxVal(" + addVal + ")");
    }
}

// Test
let numberList = new List();
numberList.add(1);
numberList.add(3);
numberList.add(4);
numberList.add(5);
numberList.add(8);
addMaxValFailTest(numberList, 2);
addMaxValSuccessTest(numberList, 10)
addMaxValSuccessTest(numberList, 1) // 실패해야 할 테스트
console.log(numberList.dataStore);

let alphabetList = new List();
alphabetList.add("a");
alphabetList.add("b");
alphabetList.add("e");
alphabetList.add("f");
addMaxValFailTest(alphabetList, "c");
addMaxValSuccessTest(alphabetList, "z");
addMaxValSuccessTest(alphabetList, "y"); // 실패해야 할 테스
console.log(alphabetList.dataStore);


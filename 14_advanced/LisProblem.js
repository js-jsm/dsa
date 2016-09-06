function Lis(arr) {
    let lisArr = new Array(arr.length).fill(0),
        result = -1,
         index = -1,
         i,j;
    
    for (i = 0; i < arr.length; i++) {
        let seq = -1;
        for (j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                if (seq == -1 || seq < lisArr[j] + 1) { //연속되는지 확인
                    seq = 1 + lisArr[j];  //몇번 연속인지 저장
                }
            }
        }
        if (seq == -1) {
            seq = 1; // 초기값
        }
        lisArr[i] = seq; //해당 위치에 순서를 저장
    }
    
    //최대 몇까지 증가되었는지의 경우 체크
    for (i = 0; i < lisArr.length; i++) {
        if (result < lisArr[i]) {
            result = lisArr[i];
            index  = i;
        }
    }
    //연속되는 값 추출
    let path = arr[index] + " ";
    let res =  result - 1;
    for (i = index - 1; i >= 0; i--) {
        if (lisArr[i] == res) {
            path = arr[i] + " " + path;
            res--;
        }
    }

    console.log(`lis :${result}`);
    console.log(`elements : ${path}`);
    
}

Lis([2,10,6,1,21,9,55,34,67,71,89,0]);

//2,6,9,34,67,71,89   lis : 7

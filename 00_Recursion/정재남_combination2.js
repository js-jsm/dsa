/* DSA - 정재남 @160615 */

/**
 * [ 조합(combination) ]
 * n개에서 r개를 꺼내는 모든 경우의 수
 * n_C_r = n-1_C_r + n-1_C_r-1
 * n_C_1 = n
 */

/**
 * [ IDEA ]
 * queue에서 데이터를 꺼내어(shift)
 * n - r > n / 2 인 경우 r = n - r로 치환(nCr = nCn-r)한 뒤
 * r이 1인 경우 n 반환 (nC1 = n)
 * r이 1 미만인 경우 및 r이 n보다 큰 경우 버림.
 * r이 1보다 큰 경우 뒤쪽에 push
 * queue에 아무 값도 남지 않으면 종료하고 result return
 */

/**
 * [ example) 5C3 의 경우 재귀함수 호출회수에 따른 결과값 ]
 * 01 : [5,3]
 * 02 : [5,2] => [4,2][4,1]
 * 03 : [4,1][3,2][3,1]
 * 04 : [3,2][3,1]          // result += 4
 * 05 : [3,1][2,2][2,1]
 * 06 : [2,2][2,1]          // result += 3
 * 07 : [2,1][1,2][1,1]
 * 08 : [1,2][1,1]          // result += 2
 * 09 : [1,1]               // result += 0
 * 10 :                     // result += 1
 */

/**
 * [ Binary Recursion ]
 */
function combination(n, r) {
    if(r > n / 2) r = n - r;
    if(n - r === 1 || r === 1) return n;
    if(r > n || r < 1) return 0;
    return combination(n-1, r) + combination(n-1, r-1);
}

/**
 * [ Tail Recursion ]
 */
function combiFunc(n, r) {
    let queue = [[n, r]];
    let result = 0;
    const push = (a, b) => {
        queue.push([a, b]);
    };
    const loop = () => {
        let [num, re] = queue.shift();
        if(re > num / 2) re = num - re;
        if(re === 1) {
            result += num;
        } else if(re > 1) {
            push(num-1, re);
            push(num-1, re-1);
        }
        if(!queue.length) return;
        loop();
    };
    loop();
    return result;
}


/**
 * [ convert to Loop ]
 */
function combiLoop(n, r) {
    let queue = [[n, r]];
    let result = 0;
    const push = (a, b) => {
        queue.push([a, b]);
    };
    do {
        let [num, re] = queue.shift();
        if(re > num / 2) re = num - re;
        if(re === 1) {
            result += num;
        } else if(re > 1) {
            push(num-1, re);
            push(num-1, re-1);
        }
    } while(queue.length);
    return result;
}
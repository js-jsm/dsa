/* DSA - 정재남 @160614 */

/**
 * [ 조합(combination) ]
 * n개에서 r개를 꺼내는 모든 경우의 수
 * n_C_r = n-1_C_r + n-1_C_r-1
 */

/**
 * [ IDEA ]
 * queue에서 데이터를 꺼내어(shift) 함수를 실행하고 그 결과를 뒤쪽에 push
 * queue의 첫 데이터의 n 값이 1이 되면 재귀를 종료하고 최종 결과 계산 수행
 * r이 음수이거나 n보다 큰 경우는 0이므로 제외.
 * 1C0 === 1C1 === 1
 */

/**
 * [ example) 5C3 의 경우 재귀함수 호출회수에 따른 결과값 ]
 * 01 : [5,3]
 * 02 : [4,3][4,2]
 * 03 : [4,2][3,3][3,2]
 * 04 : [3,3][3,2][3,2][3,1]
 * 05 : [3,2][3,2][3,1][xxx][2,2]
 * 06 : [3,2][3,1][2,2][2,2][2,1]
 * 07 : [3,1][2,2][2,2][2,1][2,2][2,1]
 * 08 : [2,2][2,2][2,1][2,2][2,1][2,1][2,0]
 * 09 : [2,2][2,1][2,2][2,1][2,1][2,0][xxx][1,1]
 * 10 : [2,1][2,2][2,1][2,1][2,0][1,1][xxx][1,1]
 * 11 : [2,2][2,1][2,1][2,0][1,1][1,1][1,1][1,0]
 * 12 : [2,1][2,1][2,0][1,1][1,1][1,1][1,0][xxx][1,1]
 * 13 : [2,1][2,0][1,1][1,1][1,1][1,0][1,1][1,1][1,0]
 * 14 : [2,0][1,1][1,1][1,1][1,0][1,1][1,1][1,0][1,1][1,0]
 * 15 : [1,1][1,1][1,1][1,0][1,1][1,1][1,0][1,1][1,0][1,0][xxx]
 * 10개.
 */


/**
 * [ Binary Recursion ]
 */
function combination(n, r) {
    if(r > n || r < 1) return 0;
    if(r === 1) return n;
    return combination(n-1, r) + combination(n-1, r-1);
}


/**
 * [ Tail Recursion ]
 */
function combiFunc(n, r) {
    let queue = [[n, r]];
    const push = (a, b) => {
        if(a >= b && b >= 0) queue.push([a, b]);
    };
    const loop = () => {
        if(queue[0][0] === 1) return;
        let [num, re] = queue.shift();
        push(num-1, re);
        push(num-1, re-1);
        loop();
    };
    loop();

    let result = 0;
    for(let [n, r] of queue) {
        if(n > 0 && (r === 0 || r === 1)) result++;
    }
    return result;
}


/**
 * [ convert to Loop ]
 */
function combiLoop(n, r) {
    let queue = [[n, r]];
    const push = (a, b) => {
        if(a >= b && b >= 0) queue.push([a, b]);
    };
    do {
        if(queue[0][0] === 1) return;
        let [num, re] = queue.shift();
        push(num-1, re);
        push(num-1, re-1);
    } while(queue[0][0] > 1);

    let result = 0;
    for(let [n, r] of queue) {
        if(n > 0 && (r === 0 || r === 1)) result++;
    }
    return result;
}

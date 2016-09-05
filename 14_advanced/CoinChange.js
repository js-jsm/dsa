function CoinChange(cost) {
    let  coin = [100, 50, 10],
        count = [0, 0, 0],
            i = 0,
         flag = false;

        while(i < 3) {
            if(coin[i] > cost) {
                i++;
            } else if (coin[i] < cost) {
                cost -= coin[i];
                count[i]++;
            } else {
                flag = true;
                count[i]++;
                break;
            }
        }
        if(flag) {
        console.log(`${coin[0]}원 동전 ${count[0]} 개 ${coin[1]}원 동전 ${count[1]} 개 ${coin[2]}원 동전 ${count[2]} 개`)
        } else {
            console.log("stop")
                flag = false;
        }
}

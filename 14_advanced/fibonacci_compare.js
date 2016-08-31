function re_fb(n) {
        if (n < 2) {
            return n;
        } else {
            return re_fb(n-1) + re_fb(n-2);
        }
    }

    function dy_fb(n) {
        let val;
        if ((n-2) <= 0) {
            return 1;
        } else {
            val = [1, 1,...new Array(n-2).fill(0)];
                for (let i = 2; i <= n; ++i) {
                    val[i] = val[i-1] + val[i-2];
                }
            return val[n-1];
        }
    }

    function getPerf(method,v) {
        var start = performance.now();
        (method)(v)
        var end   = performance.now();
        return (end - start).toFixed(3);
    }

    function comparePerf(n) {
        var recursion = getPerf(re_fb, n);
        var dynamic   = getPerf(dy_fb, n);
        var str;       
        
        recursion > dynamic ? 
        str = `dynamic ${dynamic} m/s recursion ${recursion} m/s gap ${(recursion - dynamic).toFixed(3)}` :                    
        str = `recursion ${recursion} m/s dynamic ${dynamic} m/s gap ${(dynamic - recursion).toFixed(3)}` 
        return str;
    }

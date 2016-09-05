class Search {

    seqSearch(arr=[], val='') {
        let data = [];
        arr.forEach( (v, i) => {
            if ( v == val ) {
                data.push({k:i, v:v});
            }
        });

        return data.pop();
    }

    test(name) {
        let test = {
            'seqSearch' : function(){
                var nums = [];
                for ( var i = 0; i < 100; i++ ) {
                    nums[i] = Math.floor(Math.random() * 101);
                }

                var num = Math.floor(Math.random() * 101);
                this.display(nums, num);
                console.log(this.seqSearch(nums, num));
            }.bind(this)
        };

        return test[name]();
    }

    display(arr, num) {
        var buff = [];
        for ( var i = 0; i < arr.length; i++ ) {
            arr[i] == num ? buff.push('['+arr[i]+']\t') : buff.push(arr[i] + '\t\t');
            if ( i % 10 == 9 ) {
                buff.push('\n');
            }
        }
        if ( i % 10 != 0 ) {
            buff.push('\n');
        }
        console.log(buff.join(''));
    }
}

new Search().test('seqSearch');

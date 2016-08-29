const quickSort = list => {
    const result = new Array(list.length);
    const sort = (arr, start) => {
        const length = arr.length;
        if(length === 0 ) return;

        const lesser = [],
              greater = [],
              pivot = arr[0];

        for(var i = 1; i < length; i++){
            if(arr[i] < pivot) {
                lesser.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }

        const pivotPos = start + lesser.length;
        result[pivotPos] = pivot;
        sort(lesser, start);
        sort(greater, pivotPos + 1);
    }
    sort(list, 0);
    return result;
}

var a = [];
for ( var  i=0; i<10; ++i){
    a[i] = Math.floor((Math.random()*100)+1);
}

console.log(a);
console.log(quickSort(a));
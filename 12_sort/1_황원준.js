/* 컬렉션 클래스로 병합중..
*
*
*미완성 소스 입니다.*/


class SortCollections {
    constructor() {
        this.array = [];
        this.gaps = [5, 3, 1]; //used shell
    }

    swap(sortName, index1, index2) {
        let temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
        console.log(`sort by ${sortName} swap ${this.array[index1]} to ${this.array[index2]}`)
    }
    
    bubbleSort(items) {
        this.array = [...items];
        
        let len = this.array.length,
             i,
             j,
             stop;

         for (i = 0; i < len; i++) {
            for (j = 0, stop = len - i; j < stop; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap('bubble',j, j+1);
                }
            }
         }
    return `completed bubbleSorting${this.array}`;
    }

    selectionSort(items) {
        this.array = [...items];

        let len = this.array.length,
            i,
            j,
            indexMin;

        for (i = 0; i < len - 1; i++) {
            indexMin = i;
            for (j = i; j < len; j++) {
                if(this.array[indexMin] > this.array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                this.swap('selection',i, indexMin)
            }
        }
    }

    shellInsertionSort(items) {
        this.array = [...items];

        let len = this.array.length,
            g,
            i,
            j;

        for (g = 0; g < this.gaps.length; ++g) {
            for (i = this.gaps[g]; i < len; ++i) {
                let tempData = this.array[i];
                for (j = i; j >= this.gaps[g] && this.array[j - this.gaps[g]] > tempData; j -= this.gaps[g]) {
                    this.array[j] = this.array[j - this.gaps[g]]
                }
                this.array[j] = tempData;
            }
        }
        
    }

    mergeSort(items) {
        this.array = [...items];

        let len = this.array.length;
        if (len === 1) {
            return this.array;
        }

        let mid = Math.floor(len / 2),
            left = this.array.slice(0, mid),
            right = this.array.slice(mid, len);
        console.log(mid,left,right)
        return this.merge(this.mergeSort(left), this.mergeSort(right)); 
    }

    merge(left, right) {
        let result = [],
        il = 0,
        ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }

        return result;
    }
    
    quickSort() {
        this.quick(this.array, 0, this.array.length - 1);
    }

    quick(array, left, right) {
        let index;

        if (array.length > 1) {
            index = this.partition(array, left, right);

            if (left < index - 1) {
                this.quick(array, left, index - 1);
            }

            if(index < right) {
                this.quick(array, index, right);
            }
        }
    }

    partition(array, left ,right) {

        let pivot = array[Math.floor((right + left) / 2)],
                i = left,
                j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[i] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swapQuickSort(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    swapQuickSort(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
    
}

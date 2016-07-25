function Set() {
    this.dataStore = [];

    // 집합은 고유의 멤버만 추가할 수 있다.
    this.add = function( data ) {
        if ( this.dataStore.indexOf(data) < 0 ) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    // 존재여부 확인 후 삭제 처리.
    this.remove = function( data ) {
        var pos = this.dataStore.indexOf(data);
        if ( pos > -1 ) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    this.size = function() {
        return this.dataStore.length;
    }

    // 특정 멤버가 집합에 포함되어 있는지 여부를 알려준다.
    this.contains = function(data) {
        if ( this.dataStore.indexOf(data) > -1 ) {
            return true;
        } else {
            return false;
        }
    }

    // 합집합
    this.union = function(set) {
        var tempSet = new Set();
        for ( var i = 0; i < this.dataStore.length; ++i ) {
            tempSet.add(this.dataStore[i]);
        }
        for ( var i = 0; i < set.dataStore.length; ++i ) {
            if ( !tempSet.contains(set.dataStore[i]) ) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    // 교집합
    this.intersect = function(set) {
        var tempSet = new Set()
        for ( var i = 0; i < this.dataStore.length; ++i ) {
            if ( set.contains(this.dataStore[i]) ) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
    // 부분집합
    this.subset = function(set) {
        if ( this.size() > set.size() ) {
            return false;
        } else {
            for( var k in this.dataStore ) {
                if ( !set.contains(this.dataStore[k]) ) {
                    return false;
                }
            }
            return true;
        }
    }
    //차집합
    this.difference = function(set) {
        var tempSet = new Set();
        for ( var i = 0; i < this.dataStore.length; ++i ) {
            if ( !set.contains(this.dataStore[i]) ) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    this.show = function() {
        return this.dataStore;
    }
}

// 출력 테스트
var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

console.log('=== names.add("Mike") ===');
if ( names.add("Mike") ) {
    console.log("Mike added");
} else {
    console.log("Can`t add Mike, must already be in set");
}
console.log(names.show().join());

console.log('=== removed = "Mike" ===');
var removed = "Mike";
if ( names.remove(removed) ) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}

console.log('=== names.add("Clayton"); ===');
names.add("Clayton");
console.log(names.show().join());

console.log('=== removed = "Alisa" ===');
var removed = "Alisa";
if ( names.remove(removed) ) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}
# 9 집합
고유(유일)한 요소의 모임을 집합이라 하고, 집합의 요소를 멤버라 한다.

## 9.1 집합의 핵심 정의, 동작, 속성
- 집합의 멤버는 순서가 없으며 유일하다.
- 모든 멤버가 한 번씩만 나타난다면 어떤 순서로 표현해도 상관없다.
- ex ) {0, 9, 2, 4, 6, 1, 5}

### 9.1.1 집합의 정의
- 빈 집합(empty set) 맴버가 하나도 없는 집합,
- 전체 집합(universe set) 집합에 포함될 수 있는 모든 멤버를 포함하는 집합
- 두 집합의 멤버가 정확하게 같을 때만 같은 집합으로 간주
- 한 집합의 모든 멤버가 다른 집합에 포함되어 있을 때 이집합을 다른 집합의 서브집합(subset)으로 간주 한다.

### 9.1.2 집합 동작
- 합집합
    한 집합의 멤버와 다른 집합의 멤버를 합쳐 새로울 집합을 만든다.
- 교집합
    한 집합과 다른 집합 모두에 존재하는 멤버로 새로운 집합을 만든다.
- 차집합
    한 집합의 멤버 중 다른 집합에 존재하지 않는 멤버로만 새로운 집합을 만든다.

## 9.2 Set 클래스 구현
```js
function Set() {
    this.dataStore = [];
    this.add = function( data ) {
        if ( this.dataStore.indexOf(data) < 0 ) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }
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
    /**
     * 특정 멤버가 집합에 포함되어 있는지 여부를 알려준다.
     */
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
if ( names.add("Mike") ) {
    console.log("Mike added");
} else {
    console.log("Can`t add Mike, must already be in set");
}
console.log(names.show().join());

var removed = "Mike";
if ( names.remove(removed) ) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}

names.add("Clayton");
console.log(names.show().join());

var removed = "Alisa";
if ( names.remove(removed) ) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed.");
}

```

## 9.3 집합의 추가 동작
- union() : 합집합
    첫 번째 집합의 모든 멤버를 새로운 집합으로 추가한다.
    두 번째 집합에서 각 멤버가 첫 번째 집합에 존재하는지 확인한다.
    첫 번째 집합에 존재하는 멤버는 그냥 넘기고 존재하지 않으면 추가한다.
- intersect() : 교집합
- subset() : 서브집합
    인자로 제공한 집합의 크기가 비교 대상 집합의 크기보다 큰 지 확인,    
    비교대상 집합의 모든 멤버가 인자집합의 멤버여야 한다.
    인자집합 < 비교대상 보다 크기가 작으면 서브집합이 아니다.
- difference() : 차집합


```js
/**
 * 특정 멤버가 집합에 포함되어 있는지 여부를 알려준다.
 * @param  string
 * @return boolean
 */
function contains(data) {
    if ( this.dataStore.indexOf(data) > -1 ) {
        return true;
    } else {
        return false;
    }
}

// 합집합
function union(set) {
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

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");

var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");

var it = new Set();
it = cis.union(dmp);
console.log(it.show());

// ===================================
//
/**
 * 교집합 계산
 * @return object
 */
function intersect(set) {
    var tempSet = new Set()
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        if ( set.contains(this.dataStore[i]) ) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");

var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");

var it = new Set();
it = cis.intersect(dmp);
console.log(it.show());

// ===================================

// 부분 집합
function subset(set) {
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

var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");

var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");

if ( dmp.subset(it) ) {
    console.log('dmp is a subset of it');
} else {
    console.log('dmp is not a subset of it');
}

// ===================================

// 차집합
function difference(set) {
    var tempSet = new Set();
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        if ( !set.contains(this.dataStore[i]) ) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

var cis = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");

var it = new Set();
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");

var diff = new Set();
diff = cis.difference(it);

console.log(cis.show());
console.log(it.show());
console.log(diff.show());

```

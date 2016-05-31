#03 List

##3.2 List 클래스 구현
```js
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}
```

###3.2.1 Append: 리스트에 요소 추가
```js
function append(element) {
  this.dataStore[this.listSize++] = element;
}
```

###3.2.2 Find: 리스트의 요소 검색
```js
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}
```

###3.2.3 Remove: 리스트의 요소 삭제
```js
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1); --this.listSize;
    return true;
  }
  return false;
}
```

###3.2.4 Length: 리스트의 요소 개수
```js
function length() { return this.listSize; }
```

###3.2.5 toString: 리스트의 요소 확인
```js
function toString() { return this.dataStore; }
```

###3.2.6 Insert: 리스트에 요소 삽입
```js
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element); ++this.listSize;
    return true;
  }
  return false;
}
```

###3.2.7. Clear: 리스트의 모든 요소 삭제
```js
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}
```

###3.2.8 Contains: 리스트에 특정값이 있는지 판단
```js
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) return true;
  }
  return false;
}
```

###3.2.9 리스트 탐색
```js
function front() { this.pos = 0; }
function end() { this.pos = this.listSize - 1; }
function prev() { if (this.pos > 0) --this.pos; }
function next() { if (this.pos < this.listSize-1) ++this.pos; }
function currPos() { return this.pos; }
function moveTo(position) { this.pos = position; }
function getElement() { return this.dataStore[this.pos]; }
```

### >> 전체 코드
```js
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = function (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  };
  this.toString = function () { return this.dataStore; };
  this.insert = function (element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  };
  this.append = function (element) {
    this.dataStore[this.listSize++] = element;
  };
  this.remove = function (element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
    }
    return false;
  };
  this.clear = function () {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };
  this.contains = function (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) return true;
    }
    return false;
  };
  this.front = function () { this.pos = 0; };
  this.end = function () { this.pos = this.listSize - 1; };
  this.prev = function () { if (this.pos > 0) --this.pos; };
  this.next = function () { if (this.pos < this.listSize-1) ++this.pos; };
  this.currPos = function () { return this.pos; };
  this.moveTo = function (position) { this.pos = position; };
  this.getElement = function () { return this.dataStore[this.pos]; };
  this.length = function () { return this.listSize; };
}


/* :: ES6 :: */
const List = (_=>{
  const dataStore = Symbol('');
  class List {
    constructor(...a) {
      this[dataStore] = a || [];
      this.curr = 0;
    }
    [Symbol.iterator](){
      this.curr = 0;
      return this;
    }
    find(element) { return this[dataStore].indexOf(element); }
    toString() { return this[dataStore]; }
    append(element) {
      this[dataStore].push(element);
      return this;
    }
    insert(element, after) {
      var insertPos = this.find(after);
      if (insertPos > -1) {
        this[dataStore].splice(insertPos + 1, 0, element);
        return true;
      }
      return false;
    }
    remove(element) {
      var foundAt = this.find(element);
      if (foundAt > -1) {
        this[dataStore].splice(foundAt,1);
        return true;
      }
      return false;
    }
    clear() {
      delete this[dataStore];
      this[dataStore] = [];
      this.curr = 0;
    }
    contains(element) { return this.find(element) > -1 ? true : false; }
    front() { this.curr = 0; }
    end() { this.curr = this[dataStore].length - 1; }
    prev() {
      let res = this.getElem();
      if(!res.done) this.curr--;
      return res;
    }
    next() {
      let res = this.getElem();
      if(!res.done) this.curr++;
      return res;
    }
    currPos() { return this.curr; }
    moveTo(pos) { this.curr = pos; }
    getElem() {
      if(this.curr >= 0 && this.curr < this.length()){
        return {
          done : false,
          value : this[dataStore][this.curr]
        };
      }
      return {
        done: true,
        value: undefined
      };
    }
    length() { return this[dataStore].length; }
  }
  return List;
})();
```


##3.3 리스트와 반복
```js
for(names.front(); names.currPos() < names.length(); names.next()){
  console.log(names.getElement());
} // => 무한루프에 빠짐..

/* :: ES6 :: */
names.front();
do{
  let res = names.next();
  if(res.done) break;
  console.log(res.value);
} while(true);
```

```js
for(names.end(); names.currPos() >= 0; names.prev()){
  console.log(names.getElement());
} // => 무한루프에 빠짐..

/* :: ES6 :: */
names.end();
do{
  let res = names.prev();
  if(res.done) break;
  console.log(res.value);
} while(true);
```


##3.4 리스트 기반 애플리케이션
###3.4.1 텍스트 파일 읽기
[jx - simple ajax library](http://www.openjs.com/scripts/jx)
```text
--- films.txt ---
The Shqwshank Redemption
The Godfather
The Godfather: Part II
Pulp Fiction
The Good, the Bad, and the Ugly
12 Angry Men
Schindler's List
The Dark Knight
The Lord of the Rings: The Return of the King
Fight Club
Star Wars: Episode V - The Empire Strikes Back
One Flew Over the Cuckoo's Nest
The Lort of the Rings: The Fellowship of the Ring
Inception
Goodfellas
Star Wars
Seven Samurai
The Matrix
Forrest Gump
City of God
```

```js
var movies = read(films.txt).split('\n');
```

```js
function createArr(file){
  var arr = read(file).split('\n');
  for(var i = 0 ; i < arr.length ; ++i) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

/* :: ES6 :: */
function createArr(file){
  return read(file).split('\n').map(_=> _.trim());
}
```

###3.4.2 리스트로 상점 관리하기
```js
var movieList = new List();
for(var i = 0 ; i < movies.length ; ++i) {
  movieList.append(movies[i]);
}

/* :: ES6 :: */
const movieList = new List(...movies);
```

```js
function displayList(list){
  for(list.front(); list.currPos() < list.length(); list.next()) {
    console.log(list.getElement());
  }
}
```

```js
function displayList(list){
  for(list.front(); list.currPos() < list.length(); list.next()) {
    if(list.getElement() instanceof Customer) {
      console.log(list.getElement().name + ", " + list.getElement().movie);
    } else {
      console.log(list.getElement());
    }
  }
}

/* :: ES6 :: */
const displayList = list => {
  for(let o of list){
    if(Customer && o instanceof Customer) console.log(`${o.name}, ${o.movie}`);
    else console.log(o);
  }
}
```

```js
function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}
```

```js
function checkOut(name, movie, filmList, customerList) {
  if(movieList.contains(movie)){
    var c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
  } else {
    console.log(movie + ' is not available');
  }
}
```

```js
var movies = createArr('films.txt');
var movieList = new List();
var customers = new List();
for(var i = 0 ; i < movies.length ; ++i) movieList.append(movies[i]);
console.log('Available Movies : \n');
displayList(movieList);
var name = prompt('Enter your name');
var movie = prompt('What movie would you like?');
checkOut(name, movie, movieList, customers);
console.log('\nCustomer Rentals: \n');
displayList(customers);
console.log('\nMovies Now Available\n');
displayList(movieList);
```

#07 Dictionary

##7.1 Dictionary 클래스

```js
function Dictionary(){
    this.datastore = new Array();
}
```

```js
function add(key , value){
    this.datastore[key] = value;
}
```

```js
function find(key){
    return this.datastore[key];
}
```

```js
function remove(key){
    delete this.datastore[key];
}
```

```js
function showAll(){
    for each (var key in Object.keys(this.datastore)){
        console.log(key+ " -> " + this.datastore[key]);
    }
}
```

[예제 7-1] Dictionary 클래스
```js
function Dictionary(){
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key , value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

//function showAll(){
//    for each (var key in Object.keys(this.datastore)){
//        console.log(key+ " -> " + this.datastore[key]);
//    }
//}

function showAll(){
    var thisDataStore = this.datastore;
    Object.keys(thisDataStore).forEach(function(key){
       console.log(key+ " -> " + thisDataStore[key]);
    })
}
```

[예제 7-2] Dictionary 클래스 사용하기
```js
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David","345");
pbook.add("Cynthia","456");
console.log("David's extension : "+ pbook.find("David"));
```

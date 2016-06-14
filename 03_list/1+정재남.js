const   List = require('./classes/List'),
        ut = require('./utils/unit-test');

class ListExtreme extends List {
    constructor() { super(); }
    isExtreme(extreme, elem) {
        let isExtreme = true;
        for(let e of this) {
            if((extreme === 'min' && e < elem) || (extreme === 'max' && e > elem)) {
                isExtreme = false;
                console.log(elem, e, extreme, isExtreme);
                break;
            }
        }
        return isExtreme;
    }
    append(extreme, elem) {
        if(this.isExtreme(extreme, elem)) super.append(elem);
        return this;
    }
    insert(extreme, elem, after) {
        if(this.isExtreme(extreme, elem)) return super.insert(elem, after);
        return false;
    }
}

/* unit tests */

let list;
ut.title('리스트 - Extreme : Biggest');
ut.log(function(){
    list = new ListExtreme();
    list.append('max', 'a').append('max', 'b').append('max', 'c');
    return list.toString();
});
ut.equal(_=> list.insert('max', 'e', 'c'), true);
ut.equal(_=> list.insert('max', 'd', 'c'), false);
ut.equal(_=> list.length(), 4);

ut.log(function(){
    list = new ListExtreme();
    list.append('max', 10).append('max', 30).append('max', 50);
    return list.toString();
});
ut.equal(_=> list.insert('max', 70, 30), true);
ut.equal(_=> list.insert('max', 40, 10), false);
ut.equal(_=> list.length(), 4);

ut.title('리스트 - Extreme : Smallest');
ut.log(function(){
    list = new ListExtreme();
    list.append('min', 'g').append('min', 'e').append('min', 'c');
    return list.toString();
});
ut.equal(_=> list.insert('min', 'a', 'e'), true);
ut.equal(_=> list.insert('min', 'f', 'g'), false);
ut.equal(_=> list.length(), 4);
ut.log(function(){
    list = new ListExtreme();
    list.append('min', 200).append('min', 150).append('min', 100);
    return list.toString();
});
ut.equal(_=> list.insert('min', 50, 150), true);
ut.equal(_=> list.insert('min', 170, 150), false);
ut.equal(_=> list.length(), 4);

ut.title('리스트 - Extreme : Biggest or Smallest');
ut.log(function(){
    list = new ListExtreme();
    list.append('max', 'c').append('max', 'd').append('min', 'b');
    return list.toString();
});
ut.equal(_=> list.insert('max', 'e', 'd'), true);
ut.equal(_=> list.insert('min', 'a', 'c'), true);
ut.equal(_=> list.length(), 5);

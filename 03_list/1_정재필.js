function List() {
    this.listSize = 0;
    this.pop = 0;
    this.dataStore = [];
    this.find = function(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    };
    this.toString = function() {
        return this.dataStore;
    };
    this.insert = function(element, atfer) {
        var insertPos = this.find(after);
        if ( insertPos > -1 ) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    this.append = function(element) {
        this.dataStore[this.listSize++] = element;
    };
    this.remove = function(element) {
        var fountAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --list.listSize;
            return true;
        }
        return false;
    };
    this.clear = function() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };
    this.contains = function(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) return true;
        }
        return false;
    };
    this.front = function () {
        this.pos = 0;
    };
    this.end = function() {
        this.pos = this.listSize - 1;
    };
    this.prev = function() {
        if(this.pos > 0) {
            --this.pos;
        }
    };
    this.next = function() {
        if(this.pos < this.listSize) {
            ++this.pos;
        }
    };
    this.curPos = function() {
        this.post;
    };
    this.moveTo = function(position) {
        this.pos = position;
    };
    this.getElement = function() {
        return this.dataStore[this.pos];
    };
    this.length = function() {
        return this.listSize;
    }
}

const films =
`The Shqwshank Redemption
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
City of God`;

function createArr(text) {
    var arr = text.split('\n');
    for(var i =0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

// 3.4.2 리스트로 상점 관리하기

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

var movies = createArr(films);
var movieList = new List();
for(var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for(list.front(); list.curPos() < list.length(); list.next()) {
        if( list.getElement() instanceof Customer ) {
            console.log(list.getElement().name + ", " + list.getElement().movie);
        } else {
            console.log(list.getElement());
        }
    }
}

function checkOut(name, movie, filmList, customerList) {
    if(filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + 'is not available');
    }
}

var movies = createArr(films);
var movieList = new List();
var customers = new List();

for( var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

console.log('Available Movies : \n');
displayList(movieList);

// var name = prompt('Enter your name');
// var movie = prompt('What movie would you list?');
var name = 'user1',
    movie = 'Goodfellas'
;
// checkOut(name, movie, movieList, customers);
//
// console.log('\nCustomer Rentals: \n');
// displayList(customers);
//
// console.log('\nMovies Now Available\n');
// displayList(movieList);

// ============================================================================

/**
 * 현재 리스트의 모든 요소보다 클 때에만 새로운 요소를 삽입한디.
 * 크다란 숫자의 경우 값의 크기, 텍스트의 경우 알파벳순서.
 */
function addMovie(title, list, condi) {

    var
        titleAscii = convertAsciiArray([title])[0],
        listAascii = convertAsciiArray(list.dataStore),
        calcVal = 0;
        ;

    if ( condi == 'max' ) {
        calcVal = Math.max.apply(null, listAascii);
        //console.log(titleAscii, calcVal);
        if( titleAscii <= calcVal ) {
            console.log('not bigger');
            return;
        }
    } else if ( condi == 'min' ) {
        calcVal = Math.min.apply(null, listAascii);
        //console.log(titleAscii, calcVal);
        if( titleAscii >= calcVal ) {
            console.log('not smaller');
            return;
        }
    }

    if (list.dataStore.indexOf(title) > -1) {
        console.log('duplication title');
        return;
    }

    list.append(title);
    console.log(list);

}

function convertAsciiArray(values) {
    var
        asciiList = [],
        str = '',
        sum = 0
    ;
    for(var i=0, len = values.length; i<len; i++) {
        for(var j=0, vLen = values[i].length; j<vLen; j++) {
            sum += values[i].charCodeAt(j);
        }
        // console.log(sum + ' >> ' + values[i]);
        asciiList.push(sum);
        sum = 0;
    }
    return asciiList;
}
//addMovie('aaaaaa', movieList, 'max') ;
//addMovie('123', movieList, 'min') ;

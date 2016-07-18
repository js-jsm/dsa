class HashTable
{
    constructor() {
        this.table = new Array(137);
    }

    simpleHash(data) {
        let total = 0;
        for ( var i = 0; i < data.length; i++ ) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    betterHash(string) {
        const H = 37;
        let total = 0;
        for ( var i = 0; i < string.length; ++i ) {
            total += (H * total) + string.charCodeAt(i);
        }
         console.log('Hash value : ' + string + ' -> ' + total, ' => ', total % this.table.length);
        total = total % this.table.length;
        return Number(total);
    }
    showDistro() {
        var n = 0;
        for ( var i = 0; i < this.table.length; ++i ) {
            if ( this.table[i] != undefined ) {
                console.log( i + ' : ' + this.table[i] );
                n++
            }
        }
        console.log(' total : ' + n);
    }
    put(key, data) {
        let pos = this.betterHash(key);
        if( this.table[pos] == undefined ) {
            this.table[pos] = key;
            this.values[pos] = data;
        } else {
            while ( this.table[pos] != undefined ) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }

    get(key) {
        return this.table[this.betterHash(key)] || '';
    }

    bindChains() {
        for ( let i = 0; i < this.table.length; i++ ) {
            this.table[i] = new Array();
        }
    }
}

class LinearProbing extends HashTable
{
    constructor() {
        super();
        this.table =  new Array(137);
        this.values = []
    }

    put(key, data) {
        let pos = this.betterHash(key);
        if( this.table[pos] == undefined ) {
            this.table[pos] = key;
            this.values[pos] = data;
        } else {
            while ( this.table[pos] != undefined ) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }

    get(key) {
        var hash = -1;
        hash = this.betterHash(key);
        if ( hash > -1 ) {
            for ( var i = hash; this.table[i] != undefined; i++ ) {
                if ( this.table[i] == key ) {
                    return this.values[i];
                }
            }
        }
        return undefined;
    }

}

let text =`from:[전치사](출발지) …에서(부터) , (시작 시각) …부터
close:[형용사](시간적・공간적으로) 가까운 , 거의 …할 것 같은 [부사]가까이, 바싹
make:[동사]만들다 , 만들다 [명사]제품, …제
sure:[형용사]확신하는, 확실히 아는 , 확실히 ~을 받을/~을 할 [부사]그럼(요) (=yes) , (강조의 의미로) 정말
see:[동사](눈으로) 보다, (보고) 알다, 목격하다 , (시력을 이용하여) 앞을 보다 [명사]주교의 관구
old:[형용사]나이가 …인 , 늙은, 나이 많은
with:[전치사]…와 함께 , …을 가진, …이 달린
dol:[형용사]나이가 …인 , 늙은, 나이 많은 22222
esson:[명사]수업 (시간) , 과, 가르침(의 내용)
point:[명사]의견 , (말・행동의) 요점 [동사](손가락 등으로) 가리키다 , (~을 ~에) 겨누다`;
let words = text.split('\n');
let row;
let lp = new LinearProbing();
words.map( word => {
    row = word.split(':');
    lp.put( row[0].trim(), row[1].trim() ) ;
});
lp.get('make');

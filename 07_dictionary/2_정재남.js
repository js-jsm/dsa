const Dictionary = (()=>{                                                            
    const DictData = Symbol('DictData');
    return class {
        constructor(){
            this[DictData] = {};
        }
        add(word){
            let count = this[DictData][word];
            this[DictData][word] = count ? count + 1 : 1;
        }
        getAllData(){
            return Object.keys(this[DictData]).map(k => [k, this[DictData][k]]);
        }
    }
})();
const wordCount = sentence => {
    const dict = new Dictionary();
    sentence.split(' ').forEach(v=> dict.add(v));
    return dict.getAllData().reduce((p, c) => 
`${p}
${c[0]} : ${c[1]}`
    , '== result ==');
}

console.log(wordCount('the brown fox jumped over the blue fox'));

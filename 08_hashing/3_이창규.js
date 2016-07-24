class Hash {

    constructor(){
        this.map = {};
    }

    put(data) {
        let pos = this.makeHash(data);
        let indata  = [data];
        if(this.map[pos] == data){
            this.map[pos].push(data);
        }else{
            this.map[pos] = indata;
        }
    }

    makeHash(data) {
        let total = 0;
        const length = data.length;
        for ( var i = 0; i < length; ++i ) {
            total += data.charCodeAt(i);
        }
        return total;
    }

    result(word){
        let pos = this.makeHash(word);
        console.log(`${word}의 중복 갯수는 ${this.map[pos].length} 입니다.`)

    }
}
const wordHash = new Hash();
const bringitback_lyrics = 'baby baby bring it back baby baby bring it back';
const lyrics = bringitback_lyrics.split(' ');

lyrics.forEach((v)=>{
    wordHash.put(v);
});
wordHash.result("baby");
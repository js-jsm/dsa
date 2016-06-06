function wordTemps(){
  this.words = [];
  this.wordAdd = wordAdd;
  this.wordPrint = wordPrint;
  this.wordReversePrint = wordReversePrint;
  
  function wordAdd(word){
    this.words.push(word);
  };
  
  function wordPrint(){
    return this.words.toString();
  };
  
 function wordReversePrint(){
  var words_r=[];
  var words_leng = this.words.length;
  
  
  for(var i = this.words.length; i>0; i--){
    words_r[words_leng-i] = this.words.pop();
    }
    return words_r.toString();
  };
  
};

var thisWord = new wordTemps();

thisWord.wordAdd("the");
thisWord.wordAdd("quick");
thisWord.wordAdd("brown");
thisWord.wordAdd("fox");

console.log(thisWord.wordPrint());
console.log(thisWord.wordReversePrint());
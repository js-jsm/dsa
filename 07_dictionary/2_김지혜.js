 function Dictionary(){
   this.add = add;
   this.datastore = new Array();
   this.showAll = showAll;
 }


 function add(key){
   if(this.datastore[key]){
      this.datastore[key] += 1;
    }else{
      this.datastore[key] = 1;
      }
 }

function showAll(){
    var thisDataStore = this.datastore;
    Object.keys(thisDataStore).forEach(function(key){
       console.log(key + ":" + thisDataStore[key]);
    })
}


 var sentence = "the brown fox jumped over the blue fox.";
 sentence = sentence.replace(/\./g,''); //문장의 끝 특수문자 '.' 대체
 var voca = sentence.split(' '); //단어와 단어의 구분자 ' '(공백) 으로 split

var countVoca = new Dictionary();

//console.log(voca.length);

for(var i=0;i<voca.length;i++){
  countVoca.add(voca[i]);
}

countVoca.showAll();
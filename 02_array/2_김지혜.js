var words = ['the ', 'quick ', 'brown ', 'fox '];

  
  function wordPrint(){
  console.log(words.toString());
  }
  
 function wordReversePrint(){
  var words_r=[];
  var words_leng = words.length;
  
  for(var i = words.length; i>0; i--){
    words_r[words_leng-i] = words.pop();
    }
    console.log(words_r.toString());
  }
  

wordPrint();
wordReversePrint();
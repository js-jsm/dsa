
  var candykind = ['red','yellow','white'];
  var c_stack = new Stack();
  var n_stack = new Stack();
  var e_stack = new Stack();

    for ( var i = 0 ; i < 20 ; i ++){
        c_stack.push(candykind[Math.floor(Math.random() * 3)])
    }

    console.log("~before~ \n" + c_stack.dataStore);

    while(c_stack.length() > 0){
        if( c_stack.peek() ==='yellow'){
            c_stack.pop();
        }else{
            n_stack.push(c_stack.peek());
            c_stack.pop();
        }
    }
    //n_stack.dataStore.reverse(); //리버스를 사용할수도 있지만..
    while(n_stack.length() >0 ){
        e_stack.push(n_stack.peek());
        n_stack.pop();
    }

    console.log("~after~ \n" +e_stack.dataStore);

    return e_stack.dataStore;

}

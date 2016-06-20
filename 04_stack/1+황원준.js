function blockScopeCheck(modify){

    var m_stack = new Stack();
    var maps = { "(" : ") " , "[" : "]" , "{" : "}" };

    for( var i = 0 ;  i <modify.length; i++){
        if( modify[i] ==="(" || modify[i] ==="[" || modify[i] ==="{" ){
            m_stack.push( { type : modify[i] , index : i } );
        }else{
            var check  = m_stack.pop();
                if( modify[i] !== maps[check.type]){
                    return check.index;
                }
        }
    }

    if( m_stack.length() !== 0 ){
        return m_stack.peek() +" 닫는 괄호가 없습니다."
    }

    return "문제없음";
  //뭔가...좀...대충 짜서 ㅜㅜ 
}

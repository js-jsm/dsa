function bracketCheck(text) {
    var text = text || '2.3 + 23 / 12 + (3.14159 * .24',
        idxOpen = text.indexOf('('),
        idxClose = text.indexOf(')'),
        stackOpen = [],
        stackClose = [],
        openBracketSize = 0,
        closeBracketSize = 0,
        pos = -1
    ;

    while ( idxOpen > -1 ) {
        stackOpen.push(idxOpen);
        idxOpen = text.indexOf('(', idxOpen + 1);
    }

    while ( idxClose > -1 ) {
        stackClose.push(idxClose);
        idxClose = text.indexOf(')', idxClose + 1);
    }

    //console.log(stackOpen, stackClose);
    if( stackOpen.length > stackClose.length ) {
        console.log( stackOpen.shift() + '번째 괄호가 닫히지 않았다.');
    } else if ( stackClose.length > stackOpen.length ) {
        console.log( stackClose.pop() + '번째 괄호가 열리지 않았다.');
    }
}

bracketCheck('2.3 + 23 / (12 + (3.14159 * .24');
bracketCheck('2.3 + 23 / 12 + 3.14159) * .24');
bracketCheck('2.3 + 23 / ((12) + (3.14159 * .24');

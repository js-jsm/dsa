var StringPrinter = function(){
    var StringArray = [];

    this.add = function(score){
        StringArray.push(score);
    }

    this.print = function(){
        console.log(StringArray.toString());

    }

    this.backwardsPrint = function(){
        console.log(StringArray.reverse().toString())
    }
    return {
        add : this.add,
        print : this.print,
        backwardsPrint : this.backwardsPrint
    }
}

var stringPrinter = new StringPrinter();

stringPrinter.add("hello");
stringPrinter.add("world");
stringPrinter.add("ByungJu");
stringPrinter.add("Lee");

stringPrinter.print();
stringPrinter.backwardsPrint();






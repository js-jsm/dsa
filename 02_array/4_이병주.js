var CharPrinter = function(){
    var CharArray = [];

    this.add = function(char){
        CharArray.push(char);
    }

    this.print = function(){

        console.log(CharArray.join(""));

    }

    return {
        add : this.add,
        print : this.print
    }
}

var charPrinter = new CharPrinter();

charPrinter.add("h");
charPrinter.add("e");
charPrinter.add("l");
charPrinter.add("l");
charPrinter.add("o");
charPrinter.add(" ");
charPrinter.add("w");
charPrinter.add("o");
charPrinter.add("r");
charPrinter.add("l");
charPrinter.add("d");

charPrinter.print();






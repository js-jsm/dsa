class Person {
    constructor(){
        this.persons = [];
    }
    addPerson(sex,name){
        this.persons.push( {sex : sex , name: name} );
    }
    sameSexToString(sex){
       var newPerson =  this.persons.filter( x => x.sex==sex);
    return newPerson;

    }
}

var petest = new Person();

petest.addPerson("female","A")
petest.addPerson("female","B")
petest.addPerson("female","C")
petest.addPerson("female","D")
petest.addPerson("female","E")
petest.addPerson("male","F")
petest.addPerson("male","G")
petest.addPerson("male","H")
petest.addPerson("male","I")
petest.addPerson("male","J")

petest.sameSexToString("male");

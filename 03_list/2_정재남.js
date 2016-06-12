// 성별 대신 '홀짝'으로 바꿨습니다.

const   List = require('./classes/List'),
        ut = require('./utils/unit-test');

class People extends List {
    constructor(){ super(); }
    filterOddEven(oddeven){
        let result = [];
        for(let person of people) {
            if(person.oddeven === oddeven) result.push(person.name);
        }
        return result;
    }
}
class Person {
    constructor(n, oe){
        this.name = n;
        this.oddeven = oe || 'even';
    }
}

/* unit tests */
let people = new People();

ut.log(_=>{
    people
    .append(new Person('정재남', 'odd'))
    .append(new Person('김지혜', 'even'))
    .append(new Person('남규진', 'odd'))
    .append(new Person('노준혁', 'even'))
    .append(new Person('이병주', 'odd'))
    .append(new Person('이창규', 'even'))
    .append(new Person('정재필', 'odd'))
    .append(new Person('천명기'))
    .append(new Person('최태산'))
    .append(new Person('황원준'));
});
ut.equal(_=> people.filterOddEven('odd').toString(), '정재남,남규진,이병주,정재필');
ut.equal(_=> people.filterOddEven('even').toString(), '김지혜,노준혁,이창규,천명기,최태산,황원준');

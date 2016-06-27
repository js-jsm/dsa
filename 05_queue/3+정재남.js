const dataStore = Symbol('queue');

class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}
class PriorQueue {
    constructor(){
        this[dataStore] = [];
    }
    [Symbol.iterator](){
        let data = Object.assign([], this[dataStore]);
        return {
            next(){
                return {
                    done: data.length <= 0,
                    value: data.shift()
                }
            }
        };
    }
    enqueue(element) {
        this[dataStore].push(element);
    }
    dequeue(){
        let entry = 0;
        for (let i=0; i<this[dataStore].length; ++i) {
            if (this[dataStore][i].code < this[dataStore][entry].code) {
                entry = i;
            }
        }
        return this[dataStore].splice(entry,1);
    }
    toString() {
        return this[dataStore].reduce((p, c) => `${p}[#${c.code}] ${c.name}\n`, '');
    }
    front() {
        return this[dataStore][0];
    }
    back() {
        return this[dataStore][this[dataStore].length - 1];
    }
    isEmpty() {
        if (this[dataStore].length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

const queue = new PriorQueue();

const template =
`<div style="text-align:center">
    <fieldset style="margin:10px; width:300px; border:2px solid #000;">
        <legend>접수실</legend>
        <form id="form" name="registerPatient">
            <input name="registerName" type="text" placeholder="이름을 입력하세요" style="height:30px; margin-bottom:5px;"/>
            <input name="registerPriority" type="number" placeholder="우선순위" style="height:30px; margin-bottom:5px;"/>
            <button type="submit" style="padding:5px 10px; background-color:#cff; border:1px solid #ccc">등록하기</button>
        </form>
    </fieldset>
    <fieldset style="margin:10px; padding:10px; border:2px solid #c33; width:300px;">
        <legend>진료실</legend>
        <button id="btnTreat" type="button" style="padding:5px 10px; background-color:#fdd; border:1px solid #ccc">진찰하기</button>
        <div id="treatingPatient"></div>
    </fieldset>
    <fieldset style="margin:10px; padding:10px; border:2px solid #07c; width:300px;">
        <legend>대기실</legend>
        <pre id="waitingList"></pre>
    </fieldset>
</div>
`;
document.body.innerHTML += template;

const [$form, $btnTreat, $treating, $waiting] = [
    document.getElementById('form'),
    document.getElementById('btnTreat'),
    document.getElementById('treatingPatient'),
    document.getElementById('waitingList')
];

const showWaitingList = function(){
    $waiting.innerText = queue.toString();
};
const showTreating = function(treatee){
    $treating.innerText = treatee ? treatee.name : '';
};

$form.addEventListener('submit', function(e){
    e.preventDefault();
    queue.enqueue(new Patient(this[0].value, this[1].value));
    showWaitingList();
    this[0].value = '';
    this[1].value = '';
});

$btnTreat.addEventListener('click', function(){
    const treatee = queue.dequeue()[0];
    showTreating(treatee);
    showWaitingList();
});
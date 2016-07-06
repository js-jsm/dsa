const [NODE_ELEM, NODE_NEXT] = [
    {[Symbol('NODE_ELEMENT')]: 'elements'},
    {[Symbol('NODE_NEXT')]: 'next'}
];
const Node = class {
    constructor(elem){
        this.info = new WeakMap();
        this.info.set(NODE_ELEM, elem);
    }
    get elem()      { return this.info.get(NODE_ELEM); }
    set elem(elem)  { this.info.set(NODE_ELEM, elem); }
    get next()      { return this.info.get(NODE_NEXT); }
    set next(node)  { this.info.set(NODE_NEXT, node); }
};

const [HEAD, CURR] = [
    {[Symbol('HEAD')]: 'headItem'},
    {[Symbol('CURR')]: 'currentItem'}
];
const LinkedList = class {
    constructor(){
        const head = new Node('head');
        this.info = new WeakMap();
        this.info.set(HEAD, head).set(CURR, head);
    }
    get head()              { return this.info.get(HEAD); }
    get current()           { return this.info.get(CURR); }
    set current(elem)       { this.info.set(CURR, elem); }
    next() {
        const nextNode = this.current.next;
        if(nextNode) this.current = nextNode;
    }
    add(newElem) {
        let prevNode = this.current;
        let newNode = new Node(newElem);
        prevNode.next = newNode;
        this.current = newNode;
        return this;
    }
    display(){
        let string = '';
        let currNode = this.head;
        while(currNode.next){
            currNode = currNode.next;
            string += currNode.elem + '<br/>';
        }
        return string;
    }
}

const list = new LinkedList();
const template =
`<div style="text-align:center">
    <fieldset style="margin:10px; width:300px; border:2px solid #000;">
        <legend>성적입력</legend>
        <form id="form" name="gradeForm">
            <input name="grade" type="number" placeholder="성적입력" style="height:30px; margin-bottom:5px;"/>
            <button type="submit" style="padding:5px 10px; background-color:#cff; border:1px solid #ccc">등록</button>
        </form>
    </fieldset>
    <fieldset style="margin:10px; padding:10px; border:2px solid #07c; width:300px;">
        <legend>성적일람</legend>
        <pre id="gradeList" style="font-size:12px;"></pre>
    </fieldset>
</div>
`;
document.body.innerHTML += template;

const [$form, $grades] = [
    document.getElementById('form'),
    document.getElementById('gradeList')
];

const showList = function(){
    $grades.innerHTML = list.display();
};

$form.addEventListener('submit', function(e){
    e.preventDefault();
    if(this[0].value){
        list.add(this[0].value);
        showList();
        this[0].value = '';
    }
});
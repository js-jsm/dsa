#10 이진 트리와 이진 검색 트리
##10.2 이진 트리와 이진 검색 트리
- 이진 트리란 자식의 수가 두개 이하인 트리를 의미한다.
- 이진 트리에서는 부모 노드의 자식 노드를 왼쪽(left)노드와 오른쪽(right) 노드로 표현한다.
- 이진 검색 트리(BST)는 자식 노드의 순서가 중요한 의미를 갖는다. 
- 이진 검색 트리는 작은 값을 왼쪽 노드에, 큰 값을 오른쪽 노드에 저장한다.

###10.2.1 이진 검색 트리 구현하기
```js
function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

fucntion show(){
	return this.data;
}
```
```
Node 클래스와 BST클래스

1. 루트 노드를 current 노드로 설정한다.
2. 삽입할 노드의 값이 current 노드의 값보다 작으면 새로운 current 노드를 current 노드의 왼쪽 자식으로 설정한다. 삽입하려는 노드의 값이 current 노드의 값보다 크다면 4번 과정을 생략한다.
3. current 노드의 왼쪽 자식의 값이 null이면 새로운 노드를 왼쪽 자식으로 삽입한 다음 루프를 종료한다.
  current 노드의 왼쪽 자식의 값이 null이 아니면 다음 루프를 진행한다.
4. current 노드를 현재 노드의 오른쪽 자식으로 설정한다.
5. current 노드의 오른쪽 자식의 값이 null이면 새로운 노드를 현재 노드의 오른쪽 자식으로 설정하고 루프를 종료한다. current 노드의 오른쪽 자식의 값이 null이 아니면 다음 루프를 진행한다.
```
```js
function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data){
	var n = new Node(data, null, null);
	if(this.root == null){
		this.root = n;
	}
	else{
		var current = this.root;
		var parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			}
			else{
				current = current.right;
				if(current == null){
					parent.right = n;
					break;
				}
			}
		}
	}
}
``` 
###10.2.2 이진 검색 트리 탐색
```js
//중위 탐색 inOrder() 함수 코드
function inOrder(node){
	if(node !== null){
		inOrder(node.left);
		console.log(node.show());
		inOrder(node.right);
	}
}
``` 

```js
//BST의 중위 탐색 함수
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder trabersal: ");
inOrder(nums.root);
```

```js
//전위 탐색 preOrder() 함수 정의
function preOrder(node){
	if(node !== null){
		console.log(node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
}
```
```js
//후위탐색 postOrder()함수 정의
function postOrder(node){
	if(node !== null){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show());
	}
}
```
```js
//중위탐색, 전위탐색, 후위탐색 호출추가
Inorder traversal :
3 16 22 23 37 45 99

Preorder traversal :
23 16 3 22 45 37 99

Postorder traversal :
3 22 16 37 99 45 23
```

##10.3 BST 검색
```
보통 BST에서는 다음과 같은 세가지 검색을 수행한다.
1. 특정값 검색
2. 최솟값 검색
3. 최댓값 검색
```

```js
function getMin(){
	var current = this.root;
	while(current.right !== null){
		current = current.left;
	}
	return current.data;
}
//getMin()함수는 BST에서 left가 null이 나올 때 까지 각 노드의 left링크를 따라가며 탐색한다.

current.left = null;
```

```js
function getMax(){
	var current = this.root;
	while(current.right !== null){
		current = current.right;
	}
	return current.data;
}
```

```js
//getMin(), getMax() 함수테스트
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var min = nums.getMin();
console.log('The minimum Value of the BST is: ' + min);

var max = nums.getMax();
console.log('The maximum Value of the BST is: ' + max);
```

```js
//getMin(), getMax() 함수 출력 결과
The minimum Value of the BST is: 3
The maximum Value of the BST is: 99
```

###10.3.2특정값 검색
```js
function find(data){
	var current = this.root;
	while(current.data != data){
		if(data < current.data){
			current = current.left;
		}
		else{
			current = current.right;
		}
		if(current == null){
			return null;
		}
	}
	return current;
}
```

```js
load("BST");
var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);

var searchStr = prompt('Enter a value to search for:');

var value = Number(searchStr);
var found = nums.find(value);
if(found != null){
	console.log('Found ' + value + ' in the BST');
}
else{
	console.log(value + ' was not found in the BST');
}
```

```js
3 16 22 23 37 45 99

Enter a value to search for: 23
Found 23 in the BST.
```

##10.4 BST의 노드 삭제하기
```js
function getSmallest(node) {
    if (node.left == null) {
        return node;
    } else {
        return getSmallest(node.left);
    }
}

function remove(data){
	root = removeNode(this.root, data);
}

function removeNode(node, data){
	if(node == null){
		return null;
	}
	if (data == node.data){
		//자식이 없는 노드
		if(node.left == null & node.right == null){
			return null;
		}
		//왼쪽 자식이 없는 노드
		if(node.left == null){
			return node.right;
		}
		//오른쪽 자식이 없는 노드	
		if(node.right == null){
			return node.left;
		}
		//두 자식이 모두 존재하는 노드
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}
	else if(data < node.data){
		node.left = removeNode(node.left, data);
		return node;
	}
	else{
		node.right = removeNode(node.right, data);
		return node;
	}
}
```

##10.5발견 횟수 계산
```js
function Node(data, left, right){
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}
```

```js
function update(data){
	var grade = this.find(data);
	grade.count++;
	return grade;
}
```

```js
var str = readline();
function prArray(arr){
	putstr(arr[0].toSting()+ ' ');
	for(var i = 1; i < arr.length; ++i){
		str = prompt(arr[i].toString()+' ');
		if(i % 10 == 0){
			//putstr('\n');
		}
	}
}
function genArray(length){
	var arr = [];
	for (var i=0; i< length; ++i){
		arr[i] = Math.floor(Math.random * 101);
	}
	return arr;
}
```
```js
var str = readline();
function preArray(arr){
	str = prompt(arr[0].toSting()+' ');
	for(var i =1; i < arr.length; ++i){
		str = prompt(arr[0].toSting()+' ');
		if(i % 10 == 0){
			//putstr('\n');
		}
	}
}

function genArray(length){
	var arr = [];
	for (var i=0; i< length; ++i){
		arr[i] = Math.floor(Math.random * 101);
	}
	return arr;
}
load("BST"); //BST정의에 +update()+ 를 추가

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for(var i = 0; i < grade.length; ++i){
	var g = grades[i];
	var grade = gradedistro.find(g);
	if(grade == null){
		gradedistro.insert(g);
	}
	else{
		gradedistro.update(g);
	}
}
var cont = "y";

while(cont == 'y'){
	str = prompt('\n\nEnter a grade:');
	var g = parseInt(readLine());
	var aGrade = gradedistro.find(g);
	if(aGrade == null){
		console.log('No occurrences of' + g);
	}
	else{
		console.log('Occurrences of ' + g +':'+aGrade.count);
	}
	str = prompt('Look at another grade (y/n)?');
	cont = readline();
}
```
```js
25 32 24 92 80 46 21 85 23 22 3
24 43 4 100 34 82 76 69 51 44
92 54 1 88 4 66 62 74 49 18
15 91 95 80 4 64 13 30 51 21
12 64 82 81 38 100 17 76 62 32
3 24 47 86 49 100 49 81 100 49
80 0 28 79 34 64 40 81 35 23
95 90 92 13 28 88 31 82 16 93
12 92 52 41 27 53 31 35 90 21
22 66 87 80 83 66 3 6 18

Enter a grade: 78
No occurrences of 78
Look at another grade (y/n)?y

Enter a grade: 65
No occurrences of 65
Look at another grade (y/n)?y

Enter a grade: 23
Occurrences of 23: 2
Look at another grade (y/n)?y

Enter a grade: 89
No occurrences of 89
Look at another grade (y/n)?y

Enter a grade: 100
Occurrences of 100: 4
Look at another grade (y/n)?n
```

#04 Stack

## Exercise

###1.
스택은 수식의 괄호쌍이 제대로 갖춰졌는지를 확인하는 데에도 이용할 수 있다. 수식을 인자로 받아 수식 내에 열거나 닫는 괄호가 없을 때 해당 위치를 반환하는 함수를 구현하시오. 예를 들어 `2.3 + 23 / 12 + (3.14159 * .24.` 에는 닫는 괄호가 없다.
> A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the postion in the expression where a parenthesis is missing. An example of an arithmetic expression with unbalanced parentheses is `2.3 + 23 / 12 + (3.14159 * .24.`

```
// 1. 여는괄호마다 push
// 2. 닫힌괄호에서 pop인데, 바로앞이 같은 종류의 여는괄호여야함. 아니면 에러!
// 3. 마지막에 남아있는게 없으면 OK!
```


###2.
다음과 같은 형식의 후위연산표기를 처리하는 후위연산 평가자를 구현하시오.
`op1 op2 operator`
:: 두 개의 스택(피연산자 스택과 연산자 스택)을 활용하여 전위연산표기를 후위연산표기로 전환하고, 이를 표현식을 연산하는 데에 도입하는 함수를 작성하시오.
> A postfix expression evaluator works on arithmetic expressions taking the following form:
`op1 op2 operator`
Using two stacks—one for the operands and one for the operators—design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression.


###3.
X사의 캔디통 `A`에는 딸기맛, 레몬맛, 커피맛 사탕들이 무작위로 섞여 들어가 있으며, 버튼을 누를 때마다 가장 마지막에 담겼던 사탕이 튀어나온다. 같은 구조로 생긴 비어있는 캔디통들(수량은 제한이 없다)을 이용하여, `A` 캔디통의 다른 사탕들의 순서는 바꾸지 않은 채 레몬맛 사탕만 제거하는 프로그램을 구현하시오.
> An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.
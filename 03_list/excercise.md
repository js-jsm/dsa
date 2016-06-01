#03 List

## Excercise

###1.

#####1-1)
현재 리스트의 모든 요소보다 클 때에만 새로운 요소를 삽입하는 함수를 구현하시오. 여기서 '크다'란, 숫자의 경우 값의 크기를, 텍스트의 경우 '알파벳순서'를 의미한다.
> Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.

#####1-2)
현재 리스트의 모든 요소들보다 작을 떄에만 새로운 요소를 삽입하는 함수를 구현하시오.
> Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.

###2.
사람의 이름과 성별을 저장하는 `Person`클래스를 구현하시오. 최소 10개 이상의 `Person` 객체를 포함하는 리스트를 만드시오. 리스트에서 같은 성별을 가진 사람을 모두 출력하는 함수를 구현하시오.
> Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.


###3.

#####3-1)
비디오 대여상점 프로그램을 수정하여, 고객이 어떤 영화를 대여하면 그 영화를 '대여된 영화' 리스트에 추가하도록 구현하시오. 고객이 영화를 대여할 때마다 '대여된 영화' 리스트를 출력하시오.
> Modify the video-rental kiosk program so that when a movie is checked out it is added to a list of rented movies. Display this list whenever a customer checks out a movie.

#####3-2)
비디오 대여상점 프로그램에 반납 함수를 추가하시오. 고객이 영화를 반납하면 해당 영화를 '대여된 영화' 리스트에서 영화를 삭제하고, '대여가능한 영화' 리스트에 추가하시오.
> Create a check-in function for the video-rental kiosk program so that a returned movies is deleted from the rented movies list and is added back to the available movies list.
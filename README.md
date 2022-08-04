# To Do List 2주차 과제

![React App - Chrome 2022-08-04 15-30-21](https://user-images.githubusercontent.com/72599761/182779856-58255d8b-793c-4d86-85dd-c31cb39542ca.gif)


## 디렉토리 구조


![image](https://user-images.githubusercontent.com/72599761/182780465-6ebf104a-8a30-4c30-9e1f-a85a0ba2c8d9.png)

<br/>

## 디렉토리 구조 및 기능 상세 설명

## Pages <br/>
- Home :
유저들이 todo를 생성(Create), 읽기(Read), 수정(Update - 할 일 완료/취소), 삭제(Delete)가 가능하다. 각각의 todo를 클릭하면 /detail/:todo_id로 리다이렉트 된다. <br/>

- Detail :
각각의 todo 페이지마다 id, title, contents 읽기(Read)가 가능하다. 
이전 버튼을 누르면 이전 페이지로 돌아간다. <br/>

- Not Found :
잘못된 주소를 입력했을 시 404 Not Found

<br/>

## Components 
### UI <br/>
UI는 모든 페이지에서 적용이 가능한 컴포넌트들을 모아놓은 폴더이다. <br/>
Home, Detail, Not Found 페이지 모두 다 Layout과 Header가 존재한다. <br/><br/>
- Layout : 레이아웃, max-size, min-size 모든 페이지 동일하게 적용 <br/>
- Header : 프로젝트 이름 명시하고, Home으로 가는 링크 적용 <br/>

### Home <br/>
Home 페이지에서 사용되는 컴포넌트들을 모아놓은 폴더이다. <br/><br/>
- Form : 새로운 todo를 만들 수 있다. <br/>
input에 값을 입력하지 않는 경우 폼 전송이 불가능하다. 생성된 todo는 store에 저장된다. <br/>
- List : Working과 Done 2개의 카테고리가 존재한다. <br/>
Working은 할 일을 완료 하기 전 상태 (isDone: false) <br/>
Done은 할일을 완료한 상태 (isDone : true) <br/>

- Todo : todo title, contents를 보여준다. <br/>
완료나 취소버튼을 누르면 todo의 isDone 상태가 true/false로 바뀐다.(toggle) <br/>
삭제 버튼을 누르면 리덕스 스토어에 저장된 todo list에서 삭제 된다. <br/>
todo의 title이나 contents를 클릭하면 /detail/:todo_id로 리다이렉트 된다. <br/>

<br/>

## Router <br/>
- Router : react-router-dom(v6)를 사용 <br/>
Home, Not Found, Detail로 가는 Route들 존재한다. <br/>

<br/>

## Redux <br/>
- todos : todos 모듈에는 todolist의 CRUD에 해당되는 ACTION, ACTION CREATOR, INITIAL STATE, REDUCER이 생성되어 있다. <br/>
- configureStore : todos 모듈을 포함한 root reducer 생성<br/>

<br/>

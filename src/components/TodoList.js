import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo";

const TodoList = props => {
	const todoListElements = props.list.map(element => (
		<Todo
			key={element.id}
			id={element.id}
			remove={props.rem.bind(this)}
			name={element.text}
		/>
	));
	return <ul className={style.TodoList}>{todoListElements}</ul>;
};

export default TodoList;

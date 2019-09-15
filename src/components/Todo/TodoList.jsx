import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

const todosData = [
	{
		id: 1,
		name: 'Bosser react ',
		isDone: false
	},
	{
		id: 2,
		name: 'Faire ménage',
		isDone: false
	},
	{
		id: 3,
		name: 'Chill as fuck',
		isDone: false
	}
]

const TodoList = () => {
	const [todos, setTodos] = useState(todosData)

	const todoIsDone = (id) => {
		const newTodos = todos.map((todo) => {
			return todo.id === id
				? { ...todo, isDone: !todo.isDone }
				: todo
		} )

		setTodos(newTodos)
	}

	const addTodo = (name) => {
		const newTodos = [
			...todos,
			{
				id: todos.length + 1,
				name,
				isDone: false
			}
		]

		setTodos(newTodos)
	}

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id)

		setTodos(newTodos)
	}

	return(
		<ul className="todoList" style={ulStyle}>
			{todos.map((todo) => <TodoItem key={todo.id} todo={todo} todoIsDone={todoIsDone} deleteTodo={deleteTodo} />)}
			<AddTodo addTodo={addTodo} />
		</ul>
	)
}

const ulStyle = {
	padding: '1rem',
	width: '10rem'
}

export default TodoList
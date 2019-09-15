import React from 'react'
import PropTypes from 'prop-types'



const TodoItem = ({ todo, todoIsDone, deleteTodo }) => {

	return(
		<li className="todoItem" style={liStyle}>
			<span style={{textDecoration: todo.isDone ? 'line-through' : '' }}>
				{ todo.name }
			</span>
			<input
				style={inputStyle}
				type="checkbox"
				checked={todo.isDone}
				onChange={() => todoIsDone(todo.id)}
			/>
			<button onClick={() => deleteTodo(todo.id)}>X</button>
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	todoIsDone: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

const inputStyle = {
	// float: 'right'
}

const liStyle = {
	listStyle: 'none',
	margin: '.6rem 0'
}

export default TodoItem
import React from 'react'
import TodoList from '../Todo/TodoList'

const Home = () => {
	return (
		<div className="container" style={containerStyle}>
			<h2>Todo list</h2>
			<TodoList />
		</div>
	)
}

// styles

const containerStyle = {
	margin: '2rem'
}

export default Home
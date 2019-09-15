import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const submitForm = (e) => {
		e.preventDefault()
		if (!value) return
		addTodo(value)
		setValue('')
	}

	return(
		<form onSubmit={submitForm}>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
		</form>
	)
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default AddTodo
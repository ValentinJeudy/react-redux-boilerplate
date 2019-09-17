import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ addUser }) => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
	})

	const inputChange = (e, name) => {
		const newForm = { ...form }
		newForm[name] = e.target.value

		setForm(newForm)
	}

	return(
		<form onSubmit={(e) => addUser(e, form)}>
			<div className="form-field">
				<label>
      First name
					<input
						className="firstName"
						type="text"
						name="firstName"
						value={form.firstName}
						onChange={(e) => inputChange(e, 'firstName')}
					/>
				</label>
			</div>
			<div className="form-field">
				<label>
      Last name
					<input
						className="lastName"
						type="text"
						name="lastName"
						value={form.lastName}
						onChange={(e) => inputChange(e, 'lastName')}
					/>
				</label>
			</div>
			<div className="form-field">
				<label>
      Email
					<input
						className="email"
						type="text"
						name="email"
						value={form.email}
						onChange={(e) => inputChange(e, 'email')}
					/>
				</label>
			</div>
			<button>Add a user</button>
		</form>
	)
}

Form.propTypes = {
	addUser: PropTypes.func.isRequired
}

export default Form
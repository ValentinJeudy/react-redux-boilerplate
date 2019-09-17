import React, { useState } from 'react'
import Form from '../Form'
import UserList from '../UserList'

import './contact.scss'

const Contact = () => {
	const [users, setusers] = useState([
		{
			firstName: 'user 1',
			lastName: 'User 1',
			email: 'user@mail.com'
		}
	])

	const addUser = (e, user) => {
		e.preventDefault()

		setusers([...users, user])
	}

	return(
		<div className="container">
			<h2>Contact form</h2>
			<Form addUser={addUser} />
			<UserList users={users} />
		</div>
	)
}

export default Contact
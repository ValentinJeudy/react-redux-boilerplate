import React from 'react'
import PropTypes from 'prop-types'

import User from '../User'

const UserList = ({ users }) => {
	return(
		<ul className='userList'>
			{ users.map((user, i) => <User key={i} user={user} />) }
		</ul>
	)
}

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			email: PropTypes.string
		})
	)
}

export default UserList
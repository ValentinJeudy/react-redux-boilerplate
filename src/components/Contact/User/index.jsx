import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => {
	return(
		<div className='user'>
			<h3>{ user.firstName } { user.lastName }</h3>
			<p>{ user.email }</p>
		</div>
	)
}

User.propTypes = {
	user: PropTypes.exact({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
	})
}

export default User
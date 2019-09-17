import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Common/Header'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

const App = () => {
	return (
		<Router>
			<Header />
			<Route
				path="/"
				exact
				component={Home} />
			<Route
				path="/contact"
				component={Contact} />
		</Router>
	)
}

export default App
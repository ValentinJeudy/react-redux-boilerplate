import React, {} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from "./views/Home";
import Page from "./views/Page";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/page" component={Page} />
    </Router>
  )
}

export default App;

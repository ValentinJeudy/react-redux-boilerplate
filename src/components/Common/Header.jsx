import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    menuItems : [
      {
        name: 'item 1',
        link: '/page'
      }
    ]
  }


  render () {
    const { menuItems } = this.state
    const items = menuItems.map((item, index) => {
      return  <li
                style={itemStyle}
                className="menu-item"
                key={index}
              >
                <Link style={{ color: '#fff'}} to={item.link}>
                  { item.name }
                </Link>
              </li>
    })

    return (
      <div style={headerStyle} className="header">
        <Link to="/">
          <h2 style={titleStyle}>Home</h2>
        </Link>
        <ul style={menuStyle} className="menu">
          { items }
        </ul>
      </div>
    )
  }
}

// Styles
const headerStyle = {
  position: 'relative',
  height: '2rem',
  lineHeight: '2rem',
  padding: '1rem .5rem',
  backgroundColor: '#000',
  color: "#fff"
}

const titleStyle = {
  display: 'inline',
  color: '#fff'
}

const menuStyle = {
  float: 'right',
  color: '#fff'
}

const itemStyle = {
  display: 'inline-block',
  margin: '0 1rem',
  cursor: 'pointer',
  color: '#fff'
}
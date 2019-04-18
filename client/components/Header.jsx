import React from 'react'
import headerData from '../../data/header.js'

const Header = props => {
  return (
 <div className="Header">
    <h1>{headerData.title}</h1>
  </div>
 )
}




export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <label>Questions :</label>
    <ul>
        <li><NavLink to="/java">Java</NavLink></li>
        <li><NavLink to="/python">Python</NavLink></li>
        <li><NavLink to="/sql">SQL</NavLink></li>
    </ul>
    </div>
  )
}

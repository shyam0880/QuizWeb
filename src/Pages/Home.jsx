import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css';

export default function Home() {
  return (
    <div className='topic'>
    <label>Subject :</label>
    <ul className='list'>
        <li><NavLink to="/java" className={"hell"}>Java</NavLink></li>
        <li><NavLink to="/python" className={"hell"}>Python</NavLink></li>
        <li><NavLink to="/sql" className={"hell"}>SQL</NavLink></li>
    </ul>
    </div>
  )
}

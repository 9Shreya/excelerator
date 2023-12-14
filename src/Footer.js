import React from 'react'
import './App.css';
import {liElement,liElement2} from "./constant"
function Footer() {
const liElementMaper=liElement.map((data)=><span key={data}>{data} | </span> )
const liElementMap=liElement2.map((data)=><span key={data}>{data} | </span> )
  return (
    <footer className="footer">
<p>{liElementMaper}</p><p>{liElementMap}</p>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import lastimg from './assests/lastimg.jpg';
import P1 from './assests/Picture1.png';
import P2 from './assests/Picture2.png';
import P3 from './assests/Picture3.png';
import P4 from './assests/Picture4.png';

function RecommendedPackage() {
const [display,setDisplay]=useState(false);
  const handleChange=()=>{
    setDisplay(true)
  }
  return (
    <div style={{ marginTop: "190px", padding: '20px', minHeight: "51vh",marginLeft:'30px'}}>

      <div style={{display:'flex' ,marginLeft:'100px'}}>
      <div style={{display:'flex',flexDirection:"column"}}>
        <button style={{background:"white",border:"none",cursor:"pointer"}}onClick={handleChange}><img width='200px' src={P1}/></button>
       <button style={{background:"white",border:"none"}}><img width='200px' src={P2}/></button>
       <button style={{background:"white",border:"none"}} ><img  width='200px' height="120px" src={P3}/></button>
       <button style={{background:"white",border:"none"}} ><img  width='200px' height="120px" src={P4}/></button>
      </div>
    {display&&<div style={{marginLeft:"400px"}}><img height="700px" src={lastimg} /></div>}
    </div>
    </div>
  )
}

export default RecommendedPackage
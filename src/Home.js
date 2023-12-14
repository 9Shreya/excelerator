import './App.css';
import { textLabel } from './constant';
import React from 'react'

function Home() {

  const textLabel3 = textLabel.map((data) => {
    return (
      <div key={data.image + data.label} style={{
        width: "250px", height: "260px", alignItems: "center",
        justifyContent: 'center', margin: '28px 20px 20px 20px'
      }}>
        <img height='250px' width='250px' src={data.image} alt={data.label} />
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>{data.label}</span>
      </div>
    )
  })


  return (
    <div className="App">
      <div style={{ backgroundColor: "#f3f3f3",marginTop:"190px",padding:'20px',textAlign: "center" }}>
        <h2>PRODUCT CATEGORIES</h2>
        <div style={{
          display: 'flex', flexWrap: "wrap", marginLeft: "60px", alignItems: "center",
          justifyContent: 'center'
        }}>{textLabel3}</div>
      </div>
    </div>
  );
}

export default Home
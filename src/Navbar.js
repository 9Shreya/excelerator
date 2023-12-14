import React, { useState } from 'react'
import Footer from "./Footer";
import imag from "./assests/image4.png"
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import RecommendedPackage from './RecommendedPackage';

function Navbar() {
  const history = useNavigate();

  const [inpText, setInpText] = useState("");
  const handelSearch = () => {
    console.log("clicked");
    history(`./search/${inpText}`);

  }
  const handleClick=()=>{
    history(`./`);

  }

  const ddd = window.location.href; 
  console.log(ddd);

  return (
    <div className="App">   <div style={{ position: "fixed", width: "100%", top: 0 }}>
      <header className="App-header" >
        <img height="50px" width="300px" style={{ margin: "50px",cursor:"pointer" }} onClick={handleClick} alt="logo" src="https://exceleratorparts.com/medias/excelerator-logo-no-tag-White-with-blue-full-color.png?context=bWFzdGVyfHJvb3R8NjQxNDd8aW1hZ2UvcG5nfGg2Ny9oNmYvMTI2NjEyNDY5NTE0NTQucG5nfDYwOWY0NWU2MzNiNWI2NDMxNmY4YmY0Y2IwNTE3NGUzZGU3MWUwNmVjYjk1NDQ0MTg2ZjNlYWVjZDgxOGQ0Zjk" />
        <input placeholder="Search by part name or number" type="text" value={inpText} onChange={(e) => setInpText(e.target.value)}
          style={{ width: "550px", margin: "50px 0 50px 200px", height: "40px", borderRadius: "8px", padding: "5px", fontSize: "18px", paddingLeft: "15px", outline: "none", border: "none" }} />
        <img src={imag} alt='search' style={{ width: "50px", height: "46px", marginTop: "52px", marginLeft: "-60px",cursor:"pointer" }} onClick={() => handelSearch()} />
        <div style={{ marginLeft: "350px", marginTop: "25px" }}>
          <div style={{ fontSize: "18px" }} >Sign In</div>
          <br />
          <div style={{ fontSize: "25px" }}>Find My Dealer </div>
        </div>
      </header>
      <div className="div-header">
        <button style={{ marginLeft: "40px", backgroundColor: "#127db3", outline: "none", border: "none", borderRadius: "5px", color: "white", fontSize: "20px", padding: "10px", fontWeight: "bold" }} onClick={handleClick} >PRODUCT CATEGORIES</button>
        <button style={{ marginLeft: "40px", backgroundColor: "transparent", outline: "none", border: "none", borderRadius: "5px", color: "white", fontSize: "20px", padding: "10px", fontWeight: "bold" }}>RESOURCES</button>
      </div>
    </div>
      {!ddd.includes('search')&&!ddd.includes('recommendedPackage')&&<Home />}
      {ddd.includes('search')&&<Search/>}
      {ddd.includes('recommendedPackage')&&<RecommendedPackage/>}

      <Footer />
    </div>
  )
}

export default Navbar
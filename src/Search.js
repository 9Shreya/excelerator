import React from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {
  const history = useNavigate();
  const handelSearch = () => {
    console.log("clicked");
    history(`./recommendedPackage`);

  }
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>

      <div style={{ marginTop: "190px", padding: '20px', minHeight: "51vh" }}>
        <h3 style={{ marginLeft: "30px" }}> Home / Product Category / Steering / Power Steering Hoses / TANK - OIL PUMP / BODY - RESERVOIR, 2QT, POWER STEERING
        </h3>
        <div style={{ display: 'flex', marginLeft: "30px" }}>
          <div style={{ background: "white", height: '550px', width: '900px', border: '1px solid #b5b2b2', marginTop: "50px", textAlign: 'center' }}>
            <img width="550px" src="https://exceleratorparts.com/medias/14-17925-000-6d831b31270ad5663159d7cff6921658-AEMDAM-MEDIA-BaseFormat-Annotation-515Wx515H?context=bWFzdGVyfHByb2R1Y3RzfDI4NTY5fGltYWdlL2pwZWd8cHJvZHVjdHMvaGM1L2g4NC8xMjcxOTEyMzg5MDIwNi5qcGd8ZjAxOTdmNzYxN2FkMTI3MDM3ZTYyMDJmODliNDcyY2Y5NWNiNThkYzdiMDEyYWQyZTZiYzMyZGQwZWY5YjI0ZQ" />
          </div>
          <div style={{ width: "800px", height: "300px", background: "white", marginLeft: "50px", border: '1px solid #b5b2b2', marginTop: "50px", padding: "30px" }}>
            <h2>14-17925-000</h2>
            <h2>BODY - RESERVOIR, 2QT, POWER STEERING
            </h2>
            <button style={{
              backgroundColor: "#0e98de",
              color: "#fff",
              border: "1px solid #0e98de", fontSize: "18px", borderRadius: "5px", padding: "20px"
            }}>Find My Dealer</button>
            <p style={{ fontSize: "18px" }}>VMRS: 015-005-028 - TANK - OIL PUMP</p>
            <hr />
            <h2 style={{ color: "#5da9b0", fontWeight: "bold" }}>
              + &nbsp;&nbsp;Alternatives (0)
            </h2>
          </div>

        </div>
<br/><br/>
        <div >
          <button style={{border:"none",background:"#353e41",color:'white',fontWeight:'bold',fontSize:"18px",width:'25%',padding:"20px"}}>Frequently Brought Together</button>
          <button style={{border:"none",background:"#353e41",color:'white',fontWeight:'bold',fontSize:"18px",width:'25%',padding:"20px"}}>Description</button>
          <button style={{border:"none",background:"#353e41",color:'white',fontWeight:'bold',fontSize:"18px",width:'25%',padding:"20px"}}>Features</button>
          <button style={{border:"none",background:"#353e41",color:'white',fontWeight:'bold',fontSize:"18px",width:'25%',padding:"20px",cursor:"pointer"}} onClick={handelSearch} >Recommended Package</button>
<hr/>
        </div>
      </div>
    </div>
  )
}

export default Search
import React from "react";

const First =() =>{
    return(
<>
  {/* 1st page */}
  <div>
    <header
      style={{ backgroundColor: "rgb(34,94,0)", width: "auto", height: "5%" }}
    >
      <div className="headerinfo">
        <div>
          <div className="search-container">
            <input type="text" placeholder="Search here" name="Search" />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <div>
          <img src="image/Logo.png" height="40px" />
        </div>
        <div className="color1">
          <span style={{ marginRight: "2vh"}}><a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AaSxoQzgUXVlPfQ2d_OE_LfnsdYMAqjg_dHwOLrNXN39mjDuJHblSp625bp7NMCQ4UaA9RtcXoy4Vg&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-418950928%3A1716105590285424&ddm=0" style={{ color:'white'}}>Register/Login</a></span>
          <img src="image/Shape (1).png" />
          <img src="image/Shape (3).png" />
        </div>
      </div>
    </header>
  </div>
  <br />
  <div className="navbar">
    <a href="#">HOME</a>
    <a href="#a">ABOUT US</a>
    <a href="#s">SERVICE</a>
    <a href="#p">PRICING</a>
    <a href="#b">BLOG</a>
    <a href="#c">CONTACT</a>
  </div>
  <br />
  <div>
    <img src="image/Shape (2).png" height="80%" width="100%" />
  </div>
  <br />
  <br />
  <br />
</>

    )
}
export default First
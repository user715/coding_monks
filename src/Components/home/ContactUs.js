import React from 'react'
import logo from "../../Images/logo.png";
import {Button} from 'reactstrap';
import gmail from "../../Images/gmail.png";
function Contact() {
    
    return(
          <div className="contact row justify-content-between" style={{margin:"0px",padding:"0px 30px 50px 30px"}}>
                <div style={{display:"inline-block",marginTop:"50px"}}><img src={logo} alt="logo" width="70px"/>
                  <h4 style={{color:"rgb(255,255,255)"}}>Codingmonks</h4>
                </div>

                <div style={{marginTop:"50px"}}>
                  <div>
                    <p className="" style={{color:"rgb(255,255,255)",margin:"auto 0px",display:"inline"}}>Enroll Course:  </p>
                    <Button className="align-self-end" style={{margin:"0px 0px 0px 0px"}} 
                    href="/coding_monks"
                    >Join Us</Button>
                  </div>
                  <div  style={{padding:"0px 30px 0px 0px"}}>
                    <img src={gmail} alt="gmail" style={{width:"25px",marginRight:"15px"}} />
                    <p style={{color:"rgb(255,255,255)",padding:"0px",margin:"auto 0px",display:"inline"}}>codingmonks@gmail.com</p>
                  </div>
                  <a style={{color:"rgb(255,255,255)",padding:"0px 30px 0px 0px"}} href="/coding_monks">Terms and Conditions</a>
                </div>

          </div>
    )
}

export default Contact
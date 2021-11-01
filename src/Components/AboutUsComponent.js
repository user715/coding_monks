import React from 'react';
import {FOUNDER,WEBDEVELOPERS,INSTRUCTORS} from '../data/aboutus';

function DisplayPerson({person})
{
  return (
    <div style={{boxSizing:"border-box",height:"200px",margin:"10px",border:"2px solid black",borderRadius:"5px",backgroundColor:"rgb(220,220,220)"}}>
      <div style={{display:"flex"}}>
      <img src={require(""+person.image)} alt="img" height="40px" width="40px" style={{borderRadius:"100%"}} />
      <div style={{marginLeft:"10px",display:"inline"}}>
        <p style={{padding:"0px",margin:"0px"}}>{person.name}</p>
        <p style={{padding:"0px",margin:"0px",fontSize:"12px"}}>{person.job}</p>
      </div>
      </div>
      <p>{person.description}</p>
    </div>
  );
}


function AboutUs() {

    var founder=[],webDevelopers=[],instructors=[];
      founder = FOUNDER.map((founder) => {
      return(
        <div key={founder.id} className="col-12 col-sm-6 col-md-4  col-lg-3" style={{padding:"0px"}}>
          <DisplayPerson person={founder} />
        </div>
      );
    });
  
      webDevelopers = WEBDEVELOPERS.map((dev) => {
      return(
        <div key={dev.id} className="col-12 col-sm-6 col-md-4  col-lg-3" style={{padding:"0px"}}>
          <DisplayPerson person={dev} />
        </div>
      );
    });
  
      instructors = INSTRUCTORS.map((ins) => {
      return(
        <div key={ins.id} className="col-12 col-sm-6 col-md-4  col-lg-3" style={{padding:"0px"}}>
          <DisplayPerson person={ins} />
        </div>
      );
    });

    return(
      <div className="container-fluid">
        <div className="row"><p style={{margin:"auto",fontWeight:"bold"}}>FOUNDER</p></div>
        <div className="row" style={{margin:"auto"}}>
          {founder}
        </div>
        <div className="row"><p style={{margin:"auto",fontWeight:"bold"}}>WEB DEVELOPERS</p></div>
        <div className="row" style={{margin:"auto"}}>
          {webDevelopers}
        </div>
        <div className="row"><p style={{margin:"auto",fontWeight:"bold"}}>INSTRUCTORS</p></div>
        <div className="row" style={{margin:"auto"}}>
          {instructors}
        </div>
      </div>
    );
  }


export default AboutUs;   
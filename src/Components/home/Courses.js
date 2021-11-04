import React from 'react';
import { Button } from 'reactstrap';
import { CoursePoints } from '../../data/coursePagePoints';

function Point({point}) {
  return(
    <div className="row" style={{margin:"20px 0px"}}>
      <div className="col-2 col-sm-1" style={{padding:0,margin:0}}>
        <img src={point.image} width="100%"/>
      </div>

      <p className="col-10">
        {point.description}
      </p>
    </div>
  );
}


function Courses(){

  const points=CoursePoints.map((point) => {
    return <Point point={point} />
  });

    return(
        <div className="col-10" style={{margin:"10px auto 100px auto"}}>
          <h3 className='course-title' style={{textAlign:"center",marginBottom:"50px"}}>CODING MONKS INTERVIEW READY COURSE</h3>
          <div className='Courses row'>

            <div className="col-12 col-md-7" style={{padding:0}}>
                {points}
                <div className="row" style={{margin:"20px 0px"}}>
                  <p>
                    <span><a href="/coding_monks/course">Know more </a></span> about course. 
                  </p>
                </div>
            </div>
            
            <div className="col-12 col-md-5 ">
              <div>
              <img src=".." alt='poster for course' style={{margin:"20px 10px",padding:0}} width="100%"/>

                <div className="row" style={{margin:"20px 0px"}}>
                  <p className="col-8 d-flex align-items-center" style={{padding:0,margin:0}}>Join our Telegram channel to Enroll :</p>
                  <Button className="col-4 align-self-end" 
                  style={{}}
                   href="/coding_monks"
                  >Join Us</Button>
                </div>
                
                </div>
            </div>

        </div>
        </div>
    )
}

 //<img src={require("../images/coursepage/course-1.jpg")} style={{margin:"20px 10px",padding:0}} width="100%"/>

export default Courses;
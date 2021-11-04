import React,{Component} from "react";
import { Button ,Collapse} from "reactstrap";
import { Basic,Intermediate,Advanced } from "../data/courses";

function Benefits()
{
    const image = "hi";
    return(
        <div> 
            <h1 className="text-responsive" style={{textAlign: "center" ,margin: "60px auto"}}>Coding Monks provides you: </h1>
    <div className="col-10 row" style={{margin: "30px auto"}}>
        {/* complete dsa */}
        <div className="col-12 col-md-6" style={{ padding: "30px"}}>
            <h1 className="text-responsive">Complete DSA to ace Interviews at top tech companies</h1>
        </div>
        <div className="col-12 col-md-6" style={{ padding: "30px"}}>
            <img src={require("./images/coursepage/course-1.jpg")} width="100%" alt="DSA img"/>
        </div>
    </div>
        {/* 3 month live + doubt  */}
        <div className="col-10 row d-flex flex-row-reverse" style={{margin: "30px auto"}}>
            <div className="col-12 col-md-6" style={{padding: "30px"}}>
                <h1 className="text-responsive"> 4- month course with Live class and Doubt sessions </h1>
            </div>
            <div className="col-12 col-md-6" style={{ padding: "30px"}}>
                <img src={require("./images/coursepage/course-2.jpg")}  width="100%" alt="DSA img"/>
            </div>
        </div>
        {/*  weekly problem solving  */}
        <div className="col-10 row" style={{margin: "30px auto"}}>
            <div className="col-12 col-md-6" style={{padding: "30px"}}>
                <h1 className="text-responsive">Everyweek problem solving with leetcode</h1>
            </div>
            <div className="col-12 col-md-6" style={{padding: "30px"}}>
                <img src={require("./images/coursepage/course-3.jpg")} width="100%" alt="DSA img"/>
            </div>
        </div>
        </div>
    );
}


class NewSyllabus extends Component
{
    constructor(props){
        super(props);
        this.state={curr: -1};
        this.toggle=this.toggle.bind(this);
    }

    toggle(index){
            if(this.state.curr==index)
            {
                this.setState({curr: -1});
            }
            else
            {
                this.setState({curr: index});
            }
    }
    render() 
    {
    const basic =Basic.map((topic)=>{
        return (
            <div >
                <Button className="col-10 my-2" onClick={()=>{this.toggle(topic.id)}} style={{ fontSize: "25px"}}>{topic.topic}</Button>
                
                <Collapse className="col-10"  isOpen={this.state.curr==topic.id} style={{margin: "auto",backgroundColor: "rgb(200,200,200)"}}>
                    <div style={{padding: "10px 0"}}>
                        {topic.subtopics.map((sub)=><p style={{fontSize: "18px",textAlign: "center"}}>{sub}</p>)}
                    </div>
                </Collapse>
                

            </div>
        );
    });

    const intermediate =Intermediate.map((topic)=>{
        return (
            <div style={{textAlign: "center"}}>
                <Button className="col-10 my-2"  onClick={()=>{this.toggle(topic.id)}} style={{fontSize: "25px"}} >{topic.topic}</Button>
                
                <Collapse className="col-10" isOpen={this.state.curr==topic.id} style={{margin: "auto",backgroundColor: "rgb(200,200,200)"}}>

           <div style={{padding: "10px 0"}}>
          {topic.subtopics.map((sub)=><p style={{fontSize: "18px",textAlign: "center"}}>{sub}</p>)}
          </div>
        </Collapse>

            </div>
        );
    });

    const advanced =Advanced.map((topic)=>{
        return (
            <div style={{textAlign: "center"}}>
                <Button className="col-10 my-2"  onClick={()=>{this.toggle(topic.id)}} style={{fontSize: "25px"}}>{topic.topic}</Button>
                <Collapse className="col-10" isOpen={this.state.curr==topic.id} style={{margin: "auto",backgroundColor: "rgb(200,200,200)"}}>
                    <div style={{padding: "10px 0"}}>
          {topic.subtopics.map((sub)=><p style={{fontSize: "18px",textAlign: "center"}}>{sub}</p>)}
          </div>
        </Collapse>

            </div>
        );
    });

   return (
       
       <div className="col-10" style={{margin: "60px auto", align: "center"}}>
           <h1 style={{fontSize: "40px",textAlign: "center",marginBottom: "30px"}}>Syllabus</h1>
           <div className="row">
            <div className="col-12 col-lg-4" >
                <h3 style={{fontSize: "30px",textAlign: "center"}}>Basic</h3>
                <div style={{textAlign: "center"}}>
                    {basic}
                </div>
            </div>
            <div className="col-12 col-lg-4" >
                <h3 style={{fontSize: "30px",textAlign: "center"}}>Intermediate</h3>
                <div style={{textAlign: "center"}}>
                    {intermediate}
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <h3 style={{fontSize: "30px",textAlign: "center"}}>Advanced</h3>
                <div style={{textAlign: "center"}}>
                    {advanced}
                </div>
            </div> 
            </div>
       </div>


   );
   }

}

function CourseComponent(props)
{
    return <>
    <Benefits/>
    
    <NewSyllabus  />

    </>
}


export default CourseComponent;
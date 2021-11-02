import React from 'react';
import {REVIEWS} from "../../data/studentReviews";

function ShowReview({student})
{
    return (
        <div style={{boxSizing:"border-box",border:"1px solid black",borderRadius:"10px"}} >
          
          <img src={student.image} alt="img" width="100%" style={{borderRadius:"10px"}} />
          
        </div>
      );
}

const reviews=REVIEWS.map((review) => {
  return(
    <div key={review.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" style={{float:"left",padding:"15px"}}>
      <ShowReview student={review} />
    </div>
  );
});

function Render(activeIndex,num){
  const sol=[];
  for(var i=activeIndex;i<activeIndex+num;i++)
  {
    sol[i-activeIndex]=reviews[i];
  }
  return sol;
}


var autoSlide;
class StudentReviews extends React.Component{

  constructor(props){
    super(props);
    this.state={
      activeIndex:0,
      isAnimating:false,
      num:3
    }
  }

  handleResize = () => {
    if(parseInt(document.documentElement.clientWidth)<768)this.setState({num:1});
    else if(parseInt(document.documentElement.clientWidth)<992)this.setState({num:2});
    else this.setState({num:3});
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    autoSlide=setInterval(() => {this.next();}, 6000);
    var Cards=document.getElementById("reviewCard");
    Cards.addEventListener("mouseenter",()=>{console.log("entered");clearInterval(autoSlide)});
    Cards.addEventListener("mouseleave",()=>{console.log("leaved");autoSlide=setInterval(() => {this.next();}, 3000);});
  }

  componentWillUnmount() {
    clearInterval(autoSlide);
    window.removeEventListener('resize', this.handleResize);
  }

  prev=() => {
    if(this.state.activeIndex==0 || this.state.isAnimating)return;
    this.setState({isAnimating:true});
    var Cards=document.getElementById("reviewCard");
    Cards.style.opacity=1;
    var myanim1=setInterval(() => { Cards.style.opacity=parseFloat(Cards.style.opacity)-0.05; }, 25);
    setTimeout(() => {
      clearInterval(myanim1);
      if(this.state.activeIndex<this.state.num) this.setState({activeIndex:0});
      else this.setState({activeIndex:this.state.activeIndex-this.state.num});
      Cards.style.opacity=0;
      var myanim=setInterval(() => { 
        Cards.style.opacity=parseFloat(Cards.style.opacity)+0.05;
      }
      , 25);

      
      setTimeout(() => {clearInterval(myanim);this.setState({isAnimating:false});
      } ,500);} ,500);

  }

  next=() => {
    if(this.state.isAnimating)return;
    this.setState({isAnimating:true});
    var Cards=document.getElementById("reviewCard");
    Cards.style.opacity=1;
    var myanim1=setInterval(() => { Cards.style.opacity=parseFloat(Cards.style.opacity)-0.05; }, 25);
    setTimeout(() => {
      clearInterval(myanim1);
      if(this.state.activeIndex+this.state.num>=reviews.length) this.setState({activeIndex:0});
      else this.setState({activeIndex:this.state.activeIndex+this.state.num});
      Cards.style.opacity=0;
      var myanim=setInterval(() => { 
        Cards.style.opacity=parseFloat(Cards.style.opacity)+0.05;
      }
      , 25);
      setTimeout(() => {clearInterval(myanim);this.setState({isAnimating:false});
    } ,500);} ,500);
  }

  render(){

    return(
    <div className="row justify-content-center d-flex align-items-stretch" style={{backgroundColor:"rgb(114, 133, 151)"}} id="reviewSlider">
      <div className="col-1 d-flex align-items-center" style={{padding:"0px"}}>
        <img className="SliderControls" style={{margin:"auto",height:"40px",width:"20px"}} src={require("../images/leftarrow.png")} alt="prev" onClick={this.prev}/>
      </div>
        <div id="reviewCard"  style={{padding:"0px",float:"left"}}  className="col-10">
          <span className="d-flex justify-content-around align-items-stretch">{Render(this.state.activeIndex,this.state.num)}</span>
        </div>
      <div className="col-1 d-flex align-items-center" style={{padding:"0px"}}>
        <img className="SliderControls" style={{margin:"auto",height:"40px",width:"20px"}} src={require("../images/rightarrow.png")} alt="next" onClick={this.next}/>
      </div>
    </div>
    );
  }
}

export default StudentReviews;
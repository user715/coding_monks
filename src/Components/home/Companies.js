import React from 'react';
import gs from  '../../Images/gs.png' 
import curefit from  '../../Images/curefit.png'
import adobe from  '../../Images/adobe.jpg'
import qualcom from  '../../Images/qualcom.png'
import microsoft from  '../../Images/microsoft.svg'
import oracle from  '../../Images/oracle-6.svg'
import samsung from  '../../Images/samsung-9534.svg'
import morgan from  '../../Images/jp-morgan.svg'
import amazon from  '../../Images/amazon-9538.svg'



function Companies(){

    return(
        <div className='Companies' id="about" style={{margin:"70px"}}>
            <br/>
            <p  className='companies-heading text-responsive' style={{textAlign:"center",marginBottom:"40px"}}>Our last batch placement Highlights</p>
            <div  className="company-grid row justify-content-around" style={{margin:"auto"}}>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%"  src={gs} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={curefit} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={adobe} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-3" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={qualcom} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={amazon} alt="" /></div>
            
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={microsoft} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={oracle} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={samsung} alt="" /></div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" style={{padding:"0px"}}><img style={{maxWidth:130,margin:"20px 0px"}} width="100%" src={morgan} alt="" /></div>
            </div>
        </div>
    )
}

export default Companies;
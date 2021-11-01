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
        <div>
        <div className='Companies' id="about">
            <br/>
            <div  class='companies-heading'>Our last batch placement Highlights</div>
            <div  className="company-grid">
                <div><img style={{maxWidth:130,margin:30}}  src={gs} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={curefit} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={adobe} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={qualcom} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={amazon} alt="" /></div>
            </div>
            <div className="company-grid-2">
                <div><img style={{maxWidth:130,margin:30}}src={microsoft} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={oracle} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={samsung} alt="" /></div>
                <div><img style={{maxWidth:130,margin:30}}src={morgan} alt="" /></div>
            </div>
        </div>
        </div>
    )
}

export default Companies;
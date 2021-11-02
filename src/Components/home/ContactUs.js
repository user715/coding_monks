import React from 'react'

function Contact() {
    
    return(
            <div className="contact row" style={{margin:"0px",padding:"0px"}}>
                
<form id="msform" className="col-12 col-sm-8 col-md-6" style={{margin:"30px auto",padding:"0px"}}>
 
  <fieldset>
    <h2 class="fs-title">We Would Love to Hear From You</h2>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Contact.No" />
    <textarea type="textarea" rows={5} name="Message" placeholder="Message" />
	<button className="action-button">Submit</button>
  </fieldset>
  
  
</form>

            </div>
    )
}

export default Contact
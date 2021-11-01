import React from 'react'

function Contact() {
    
    return(
        <div>
            <div className="contact">
                
<form id="msform">
 
  <fieldset>
    <h2 class="fs-title">We Would Love to Hear From You</h2>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Contact.No" />
    <textarea type="textarea" rows={5} name="Message" placeholder="Message" />
	<button className="action-button">Submit</button>
  </fieldset>
  
  
</form>

            </div>
        </div>
    )
}

export default Contact
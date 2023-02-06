import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='header'>
            <h2 className='fw-bold'>Contact us</h2>
            <p className='contact'>We are here to answer any question you may have while experiencing Xentice We love to receive feedback about the site and always work towards improving ourselves to serve you the best. Reach out to us and we'll respond as soon as we can.</p>
             <h2></h2>
             <div className='form'>
                <input type="text" class="form-control mt-2" id='inlineFormInputGroup'placeholder='Name'></input><br></br>
                <input type="email" class="form-control mt-2" id='inlineFormInputGroup'placeholder='Email'></input><br></br>
                <input type="number" class="form-control mt-2" id='inlineFormInputGroup'placeholder='Phone Number'></input><br></br>
                <textarea rows="5"class="form-control mt-2"id='inlineFormInputGroup'placeholder='Message'></textarea><br></br>
                
                <input type="submit" class="form-control mt-2" id='inlineFormInputGroup1'value="Submit"></input>
                <br></br>
                <br></br>
                <br></br>

             </div>
        </div>
    </div>
  )
}

export default Contact
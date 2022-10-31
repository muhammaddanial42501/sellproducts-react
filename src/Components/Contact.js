import React from 'react'
import Email from '../Components/Images/mail.png'
import Phone from '../Components/Images/phone.png'
const Contact = () => {
  return (
    <>
    <div className='bg-light d-flex align-items-center flex-column '>
      <h5 className='mt-5'>Get in touch with us</h5>
      <p>React out to us throughour contact details below and we'll get back to you as sson as you can.</p>
      <div className='row '>
        <div className='col '>
            <img src={Email} alt="Image" />
            <h6>Email</h6>
            <p>fnac@yahoo.com</p>

        </div>
        <div className="col  ">
            <img src={Phone} alt="Image" />
            <h6>Phone</h6>
            <p>123 456 789</p>
        

        </div>

      </div>
      <div className='d-flex align-items-center flex-column '>
        <h6 >You may also send us a direct message.</h6>
        <input className='mt-1 mb-2 'size="35"  type="text" class="form-control" placeholder="Full Name" />
        <input className='mt-1 mb-2' type="email" class="form-control" placeholder="Email" />
        <input className='mt-1 mb-2' type="number" class="form-control" placeholder="Phone Number" />
        <textarea className='mt-1 mb-2' name="" id="" cols="45" rows="10" placeholder='Message'></textarea>
        <button className='btn text-white  mt-2 mb-5' style={{backgroundColor: "#1F2937"}}>Send Message</button>
      </div>
      
    </div>
    <div className='d-flex align-items-center flex-column mb-5' style={{backgroundColor: "#1F2937"}}  >
        <h6 className='text-warning mt-3 mb-3' >Go Shop</h6>
        <h5 className='text-white mt-3 mb-3'>Get started today and set your way to financial freedom</h5>
        <button className='btn btn-warning mt-3 mb-5'>Get Started</button>
    </div>
    </>
  )
}

export default Contact

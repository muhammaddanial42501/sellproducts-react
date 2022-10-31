import React from 'react'
import video from '../Components/Images/video.png'
import light from '../Components/Images/light.png'
import dollar from '../Components/Images/dollar.png'
import pc from '../Components/Images/pc.png'
import Line from '../Components/Images/Line .png'

const Package = () => {
  return (
    <>
    <div className='d-flex  align-items-center flex-column '>
        
      <h4>Sell anytime and anywhere you want</h4>
      <p>Your business your idea.</p>
      <button className='btn btn-warning mt-3 mb-5'>Get Started</button>
      
      <div className='row'>
      <div className='col'>
        <img src={light} alt="Image" />
        <h5>Learn with Fnac and build your dream <br /> business</h5>
        
        <p>Tell you the most practical shopee&fnac strategy, make <br /> it easier to makeachivements with the most <br />easy way to earn money income.  </p>
        <img src={Line} alt="Image" />
      </div>
      <div className='col'>
        <img src={dollar} alt="Image" />
        <h5>Less hassle, earn more money, a after great work</h5>
        <p>Tell you the most practical shopee&fnac strategy, make <br /> it easier to makeachivements with the most <br />easy way to earn money income.  </p>
        <img src={Line} alt="Image" />
      </div>
      <div className='col'>
        <img src={pc} alt="Image" />
        <h5>All you need is a moblie phone and a simple laptop </h5>
        <p>Tell you the most practical shopee&fnac strategy, make <br /> it easier to makeachivements with the most <br />easy way to earn money income.  </p>
        <img src={Line} alt="Image" />
      </div>
      </div>
    </div>
    <div className='bg-light d-flex  align-items-center flex-column mb-5 mt-5 '>
        <h5 className=' mt-5'>Free 2 hours online session</h5>
        <p>In this 2 hours free online session, we will tell you how to solve the 3 problems faced by 95% of people. </p>
        <button className='btn btn-outline-dark mt-3 mb-5'>Contact us</button>
        <div>
      <img src={video} alt="Image" />
    </div>

    </div>
    <div className=' d-flex  align-items-center flex-column'>
        <h5>Frequently asked questions</h5>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

    </div>
    
    </>
  )
}

export default Package

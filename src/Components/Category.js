import React from 'react'
import category1 from '../Components/Images/category1.png'
import category2 from '../Components/Images/category2.png'
import category3 from '../Components/Images/category3.png'
import category4 from '../Components/Images/category4.png'
const Category = () => {
  return (
    <>
    <div className='bg-light d-flex justify-content-between align-items-center   flex-column'   >
    
      <h3 className=' mb-5'>Your Ideal Online Selling Platform</h3>
    
     <div className='row d-flex justify-content-evenly '>
     <div className=" col ">
       <h5>Restrore after the customer <br /> orders</h5>
       
       <p>No waiting! Restock right away complete  more orders</p>
     </div>
     <div className="col ">
     <img src={category1} alt="Image" />
     </div>     
   </div>
   <div className='row   '>
     <div className=" col  ">
       <img src={category2} alt="" />
     </div>
     <div className="col">
     <h5>Restrore after the customer <br /> orders</h5>
       <p>No waiting! Restock right away complete more orders <br /> more orders</p>
       
     </div>     
   </div>
   <div className='row  '>
     <div className=" col ">
     <h5>Restrore after the customer <br /> orders</h5>
       <p>No waiting! Restock right away complete more orders</p>
      
     </div>
     <div className="col">
     <img src={category3} alt="Image" />
     </div>     
   </div>
   <div className='row '>
     <div className=" col">
       <img src={category4} alt="Image" />
     </div>
     <div className="col">
     <h5>Restrore after the customer <br /> orders</h5>
       <p>No waiting! Restock right away complete <br /> more orders</p>
       <p></p>
     </div>     
   </div>

   </div>
   </>
  )
}

export default Category

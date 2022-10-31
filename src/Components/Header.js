import React from 'react'

class Header extends React.Component {
    render(){

     var {name}=this.props;
  return (
    <>
    <div>
       <li className="nav-item">
            <a className="nav-link text-black" href="#">
              {name}
            </a>
          </li> 
         
    </div>
   
    
        
         
    </>
    
  );
 }
}

export default Header;

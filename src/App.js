
import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Style.css"
import Category from './Components/Category';
import Package from './Components/Package';
import header1 from './Components/Images/header1.png'
import header2 from './Components/Images/header2.png'
import Contact from './Components/Contact';
import Vector from './Components/Images/Vector.png'

function App() {
  return (
    <>
    <div className='d-flex justify-content-end'>     
      <nav className="navbar navbar-expand-lg  ">   
      <ul className="navbar-nav " >
      <Header  className="text-warning" name="Go Shop"  />
      <Header name="Our Platform " />
      <button type='button' className='btn btn-warning  ' >Get Started</button>  
      </ul>
    </nav> 
    </div>    
    <div className='d-flex align-items-center flex-column'>
      <h2>A Convenient and secure platform to sell </h2>
      <h2> your products</h2>
      <img src={Vector} alt="Image" />
      <p>At present we helped over 3000 students to master the secretsof 5-6 digits</p>
      <p>performance. All of our mentors havepractical experienceand professional recognition</p>
      <button type='button' className='btn btn-warning  ' >Get Started</button>
    </div>
    <div className="d-flex justify-content-center  header1" style={{ backgroundImage: `url(${header2})` }}>
    <img src={header1}  alt="Responsive image" />  
    </div>
    <div>
      <Category/>
    </div>
    <div>
      <Package/>
    </div>
    <div>
      <Contact/>
    </div>

    </>

    
  );
}

export default App;

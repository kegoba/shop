import React from 'react';
//import AliceCarousel from 'react-alice-carousel'
//import 'react-alice-carousel/lib/alice-carousel.css'
//import logo from './logo.svg';
import './App.css';
import './animate.css';
//import Home from "./components/home/index.js"
import Footer from "./components/footer/footer"
//import Home from "./components/home/Home"
import Menu from "./components/menu/menu"

function App() {
  return (
    <div className="App" >
      
     <div className="">
       
       <Menu/>
      
     </div>
    


      <div className='footer'>
        <Footer />
      </div>
    </div>
     
    
  );
}

export default App;

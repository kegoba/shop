import React from 'react';
import './App.css';
import './animate.css';
import Footer from "./components/statics/footer"
import Menu from "./components/statics/menu"


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

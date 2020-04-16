import React from 'react';
import gallary from "./images/gallary.jpeg";
import gallary1 from "./images/gallary1.jpeg";
import gallary2 from "./images/gallary2.jpeg";
import gallary3 from "./images/gallary3.jpeg";
import gallary4 from "./images/gallary4.jpeg";
import gallary5 from "./images/gallary5.jpeg";


const Gallary = () => {
    return (  
      <div className="container">
        <div className="row ">
          <div className="col">
            <div id="slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img className="prevent products animated flip" src={gallary} alt={gallary} />
                  <p className="products">
                    
                    Shop And It Will Be Delivered At Your Door Step
                  </p>
                </div>
                <div className="carousel-item">
                  <img className="prevent" src={gallary1} alt={gallary1} />
                  <p className="products animated bounce "> Customer Satisfaction Is Our Concern </p>
                </div>
                <div className="carousel-item ">
                  <img className="prevent animated flip" src={gallary2} alt={gallary2} />
                  <p className="products  animated shake   "> E-commence application </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col ">
            <div id="slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img className="prevent" src={gallary3} alt={gallary3} />
                  <p className="products animated bounce">
    
                    E-commence solution with Payment Integration System
                  </p>
                </div>
                <div className="carousel-item">
                  <img className="prevent animated bounce" src={gallary4} alt={gallary4} />
                  <p className="products animated flip">
                    You Can make Payment With Your Card !
                  </p>
                </div>
                <div className="carousel-item">
                  <img className="prevent animated flip" src={gallary5} alt={gallary5} />
                  <p className="products animated shake"> Payment Gate way You Can Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Gallary

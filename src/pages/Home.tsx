import React from 'react';
import './Home.css'; // Import the corresponding CSS file

const Home = () => {
  return (
    <div className="home-container">
      
      
      <div className="first-block">
  <h1 className="headline first">iPhone 16e</h1>
  <h2 className="subhead first">Latest iPhone. Greatest price.</h2>

  <div className="button-container">
    <button className="blue-btn-home">Learn more</button>
    <button className="white-btn-home">Buy</button>
  </div>

  <h2 className="subhead rainbow">Built for Apple Intelligence.</h2>
</div>



      <div className="second-block">
        <h1 className="headline second">iPhone 16 Pro</h1>
        <h2 className="subhead second">Hello, Apple Intelligence.</h2>
        <div className="button-container">
    <button className="blue-btn-home">Learn more</button>
    <button className="white-btn-home">Buy</button>
  </div>
      </div>
      <div className="block">
      <img
        className="banner"
        src="/images/blue-ring.png"  
        alt="rainbow"
      />
      </div>
      
      
      
      

    </div>
  );
};

export default Home;
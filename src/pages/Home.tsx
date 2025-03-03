import React from 'react';
import './Home.css'; // Import the corresponding CSS file

const Home = () => {
  return (
    <div className="home-container">
      
      
      <div className="first-block">
        <h1 className="headline home">iPhone 16e</h1>
        <h2 className="subhead detail">Latest iPhone. Greatest Price.</h2>
        <button className="learn-more-btn">Learn More</button>
        <h2 className="subhead rainbow">Built for Apple Intelligence.</h2>
      </div>

      <div className="block">
      <img
        className="banner"
        src="public/images/metal11.jpeg"  
        alt="rainbow"
      />
      </div>
      <div className="block">
      <img
        className="banner"
        src="public/images/metal12.jpeg"   
        alt="rainbow"
      />
      </div>
      <div className="block">
      <img
        className="banner"
        src="public/images/metal13.jpeg"  
        alt="rainbow"
      />
      </div>
      
      
      
      
      

    </div>
  );
};

export default Home;
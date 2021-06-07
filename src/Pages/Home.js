import React from 'react';
import '../Styles/Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';

function Home() {
    return (
      <div className='background'>
          <Navbar/>
          <Footer/>
      </div>
    );
  }
  
  export default Home;
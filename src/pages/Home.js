import React from 'react';
import Navbar from '../components/Navbar';
import Slideshow from '../components/SlideShow';
import Formulaire from '../components/Formulaire';
import NavDown from '../components/NavDown';


const Home = () => {
  
    return (
        <div className="home ">
            <div>     
                <Navbar />
                <br />
            </div>
            <div className="containerSlide">
                <Slideshow />      
            </div>
            <Formulaire />
            <NavDown />
           
        </div>

    );
}

export default Home;
import React from 'react';
import ButtonsScroll from '../components/Buttons-scroll';
import DynamicText from '../components/DynamicText';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetworks';



const Home = () => {
    return (
        <div className="body">
            <div className="header"><Header />
            </div>
            <div className="navbar"><Navbar />
            </div>
            <div className="navigation"><Navigation />
                <div><DynamicText /> </div>
            </div>
            <div><SocialNetwork /></div>
            <div>      <ButtonsScroll left={"/contact"} right={"/projetFlag"} /></div>

        </div>


    );
};

export default Home;
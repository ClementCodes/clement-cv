
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsScroll from '../components/Buttons-scroll';
import Formulaire from '../components/Formulaire';
import Navbar from '../components/Navbar';


import SocialNetwork from '../components/SocialNetworks';

const Contact = () => {
    return (
        <main >
              
            <div className="contact">
                <Navbar />
                
                <br />
                <div className="contact-infos">
                    <div className="adress">
                        <div className="content">
                            <h4>email</h4>
                            <h4>adresse</h4>
                            <p> 16 rue Furtado</p>
                            <p>Bordeaux</p>
                            <h4>Telephone</h4>
                          
                        </div>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <CopyToClipboard text="06 71 77 81 35" >
                            <h3 style={{ cursor: "pointer" }}
                                className="clipboard"
                                onClick={() => {
                                    alert("telephone copié  !");
                                }} >06 71 77 81 35 </h3>
                        </CopyToClipboard>
                       
                    </div>
                </div>
                <div className="email">
                    <div className="email">
                        <CopyToClipboard text="mrdominiqueclement@gmail.com"
                            className="hover2">
                            <h3 style={{ cursor: "pointer" }}
                                className="clipboard reduire"
                                onClick={() => {
                                    alert("Email copié  !");
                                }} >  Mrdominiqueclement@gmail.com</h3>
                        </CopyToClipboard>
                        <SocialNetwork />
                        <Formulaire />
                    </div>
                </div>
                <div>
        <ButtonsScroll left={'/project-4'} /></div>
            </div>
           
        
        </main>
     
       
         
    );
};

export default Contact;
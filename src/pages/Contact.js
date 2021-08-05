
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsScroll from '../components/Buttons-scroll';
import Formulaire from '../components/Formulaire';

import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetworks';

const Contact = () => {
    return (
        <main>
            <div className="contact">
                <Navigation />
                contact
                <div className="contact-infos">

                    <div className="adress">
                        <div className="content">


                            <h4>adresse</h4>
                            <p> 16 rue fiurtados</p>
                            <p>bordeaux</p>
                        </div>
                    </div>
                </div>

                <div className="phone">
                    <div className="content">
                        <h4>Telephone</h4>
                        <CopyToClipboard text="06 71 77 81 35" className="hover">
                            <p style={{ cursor: "pointer" }}
                                className="clipboard"
                                onClick={() => {
                                    alert("telephone copié  !");
                                }} > 06 71 77 81 35</p>


                        </CopyToClipboard>
                        <Formulaire />

                    </div>
                </div>


                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text="mrdominiqueclement@gmail.com"
                            className="hover">
                            <p style={{ cursor: "pointer" }}
                                className="clipboard"
                                onClick={() => {
                                    alert("Email copié  !");
                                }} > Mrdominiqueclement@gmail.com</p>


                        </CopyToClipboard>
                        <SocialNetwork />
                        <ButtonsScroll left={'/project-4'} />
                    </div>
                </div>
            </div>



        </main>
    );
};

export default Contact;
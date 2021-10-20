
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
// import ButtonsScroll from '../components/Buttons-scroll';
import Formulaire from '../components/Formulaire';
import Navbar from '../components/Navbar';





const Contact = () => {
    return (
        <main >
           
            <div className="page-form">
                <br /><br /><br />
                <br />
                <br />
                <br />
            
                <div className="phone">
                    <div className="content">
                        <CopyToClipboard text="06 71 77 81 35" >
                            <h3 style={{ cursor: "pointer" }}
                                className="clipboard"
                                onClick={() => {
                                    alert("telephone copié  !");
                                }} > 06 71 77 81 35  </h3>
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
                                }} >   Mrdominiqueclement@gmail.com</h3>
                        </CopyToClipboard>
                        <Formulaire />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </main>
    )
}

export default Contact;
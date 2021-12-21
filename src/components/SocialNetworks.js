import React from 'react';

const SocialNetwork = () => {

    const anim = () => {

        let navLinks = document.querySelectorAll('.social-network a');
        navLinks.forEach(link => {

            link.addEventListener('mouseover', (e) => {

                let attrX = e.offsetX - 30;
                let attrY = e.offsetY - 3;
                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () => {

                link.style.transform = "";
            })
        })

    }

    //onMouseOver est une fonction de react qui te permet de déclencher un évènement

    return (
        <div className="social-network" >
            <ul className="content1">
                <a href="https://www.facebook.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}  >
                    <li>
                        <i className="fab fa-facebook color-white"></i>
                    </li>
                </a>
            </ul>
           
            <ul className="content2">
                <a href="https://www.linkedin.com/in/clement-dominique" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-linkedin-in color-lin hello"></i>

                        <i className="fab fa-linkedin-in color-lin"></i>

                    </li>
                </a>
            </ul>
            {/* <ul className="content">
                <a href="https://www.facebook.com" target="blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                </a>
            </ul> */}
        </div>
    );
};

export default SocialNetwork;
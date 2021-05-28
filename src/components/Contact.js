import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function Contact(){
    const linkedin = 'https://www.linkedin.com/in/surya-dana-4787271b1/';
    const github = 'https://github.com/surya-doc';
    const gmail = 'mailto:suryadanabnk@gmail.com';
    return(
        <div className="contactContainer" id="contact">
            <h2>Contact</h2>
            <div className="contact">
                <a href={github}><FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" size="2x"/></a>
                <a href={linkedin}><FontAwesomeIcon icon={faGithub} className="contact-icon" size="2x"/></a>
                <a href={gmail}><FontAwesomeIcon icon={faEnvelope} className="contact-icon" size="2x"/></a>
                <p style={{fontSize: "16px", paddingTop: "14px", margin: "0px", letterSpacing: "1px"}}>Made it with <FontAwesomeIcon icon={faHeart} style={{color: "#14fb0a"}}></FontAwesomeIcon> by surya</p>
            </div>
        </div>
    );
}

export default Contact;
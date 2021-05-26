import React, { useState } from 'react'
import MainPage from "./main-page-body";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import Profile from '../components/profile.jpg';

function Sidebar(){
    const [sidebar, changeSidebar] = useState(true);
    function createSidebar(){
        changeSidebar(!sidebar);
    }
    return (
        <div className="mainContainer">
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                    position: "absolute",
                    width: '100%'
                  }}                
                  />
        <div onClick={createSidebar} className="btn-toogle">{sidebar ? <FontAwesomeIcon icon={faBars} size="2x" color="#53A1F9"/> : <FontAwesomeIcon icon={faTimes} size="2x" color="#53A1F9" />}</div>
        <div className={sidebar ? 'vertical-nav sidebar' : 'vertical-nav sidebar active'}>

                <div className="media d-flex align-items-center">
                    <img src={Profile} alt="A" width="80" height="80"/>
                    <div className="media-body">
                        <h5 style={{textTransform: 'uppercase'}}>Surya Dana</h5>
                        {/* <p style={{color: '#53A1F9', fontSize: '14px'}}>Web-developper</p> */}
                        <div className="typed-cont">
                            <Typed 
                                strings={['Web developper', 'Compititive coder']}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </div>
                </div>
            <p className="text-grey small side-text">Lower part</p>
            <ul className="nav flex-column mb-0">
            <li className="nav-item">
                <a href="#about" className="nav-link" onClick={window.innerWidth <= 680 ? createSidebar: null}>
                    <p style={{margin: "0"}}><FontAwesomeIcon icon={faAddressCard} color='#53A1F9' size="sm" /><span className="side-btn">About</span></p>
                </a>
            </li>
            <li className="nav-item">
                <a href="#study" className="nav-link">
                    <p style={{margin: "0"}}><FontAwesomeIcon icon={faUniversity} color='#53A1F9' /><span className="side-btn">Study</span></p>
                </a>
            </li>
            <li className="nav-item">
                <a href="#skill" className="nav-link">
                    <p style={{margin: "0"}}><FontAwesomeIcon icon={faCubes} color='#53A1F9' /><span className="side-btn">Skills</span></p>
                </a>
            </li>
            <li className="nav-item">
                <a href="#project" className="nav-link">
                    <p style={{margin: "0"}}><FontAwesomeIcon icon={faDesktop} color='#53A1F9' /><span className="side-btn">Projects</span></p>
                </a>
            </li>
            </ul>
            <p className="text-grey small side-text" style={{marginTop: '28px'}}>Contact</p>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        <p style={{margin: "0"}}><FontAwesomeIcon icon={faReply} color='#53A1F9' /><span className="side-btn">Contact</span></p>
                    </a>
                </li>
            </ul>
        </div>
        
        <MainPage
            side={sidebar}
        />
        </div>
    );
}
export default Sidebar;
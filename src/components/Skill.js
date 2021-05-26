import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Skill(){
    return(
        <div className="mainSkillContainer" id="skill">
            <h4>Technologies I am familier with</h4>
            <div className="skill-icon">
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #fb8a4d, #ffa543, #ffc139, #ffe034, #ffff3c)"}}>
                            <FontAwesomeIcon icon={faHtml5} size="3x" color="#FFF"/>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #306efb, #009cff, #00c2ff, #00e2ff, #3cfff7)"}}>
                            <FontAwesomeIcon icon={faCss3} size="3x" color="#FFF"/>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #fbfb30, #feef31, #ffe334, #ffd738, #ffcc3c)"}}>
                            <FontAwesomeIcon icon={faJs} size="3x" color="#FFF"/>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #0e290d, #1b581c, #2a8d29, #3dc434, #55ff3c)"}}>
                            <FontAwesomeIcon icon={faNodeJs} size="3x" color="#FFF"/>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #0629aa, #0069d0, #009edf, #7acee7, #ddfafb)"}}>
                            <FontAwesomeIcon icon={faReact} size="3x" color="#FFF"/>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #078e1f, #3ba51f, #5fbd1e, #83d41a, #a8eb12)"}}>
                            <FontAwesomeIcon icon={faReact} size="3x" color="#FFF" style={{visibility: "hidden", width: "0px"}}/>
                            <p style={{textAlign: "center", fontWeight: "600", color: "#FFF"}}>Mongo DB</p>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #6d0202, #830d0e, #9b1817, #b22221, #cb2c2b, #d83d2b, #e64d2b, #f25d2b, #f37521, #f28b19, #eea017, #e9b420)"}}>
                            <FontAwesomeIcon icon={faReact} size="3x" color="#FFF" style={{visibility: "hidden", width: "0px"}}/>
                            <p style={{textAlign: "center", fontWeight: "600", color: "#FFF", fontSize: "40px"}}>C</p>
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #e52b7d, #e5168d, #e2009f, #db00b4, #ce00ca, #b83ce0, #9e56f1, #7e6aff, #648aff, #5fa4ff, #75bafe, #9acdf4)"}}>
                            <FontAwesomeIcon icon={faReact} size="3x" color="#FFF" style={{visibility: "hidden", width: "0px"}}/>
                            <p style={{textAlign: "center", fontWeight: "600", color: "#FFF", fontSize: "34px"}}>C++</p>
                        </div>
                    </div>
                    {/* <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #0629aa, #0069d0, #009edf, #7acee7, #ddfafb)"}}>
                            <p style={{fontSize: "20px", color: "#FFF"}}>Mongo</p>                    
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #0629aa, #0069d0, #009edf, #7acee7, #ddfafb)"}}>
                            <p style={{fontSize: "20px", color: "#FFF"}}>C</p>                    
                        </div>
                    </div>
                    <div className="separate-icon">
                        <div className="icon" style={{backgroundImage: "linear-gradient(to right top, #0629aa, #0069d0, #009edf, #7acee7, #ddfafb)"}}>
                            <p style={{fontSize: "20px", color: "#FFF"}}>C++</p>                    
                        </div>
                    </div> */}
            </div>
        </div>
    );
}

export default Skill;
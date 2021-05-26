import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

function Study(){
    return(
        <div className="study" id="study">
            <h4>Academics</h4>
            <div className="study row_1" style={{backgroundColor: '#FFF'}}>
                <div className="information-school col_1">
                    <div className="schoolCard">
                        <FontAwesomeIcon icon={faSchool} className="schoolIcon" size='4x' />
                        <h5 style={{textAlign: 'center', paddingBottom: '20px'}}>School life</h5>
                        <p>I have passed my 10th from J.G.M.G.S.V with 94.1% marks and have my 12th from Bankura Banga Vidyalay sequring 90.4% marks. My school life was not only just marks but also taught and inspired me to move forword. And I feel proud to say that I was a West bengal board student.</p>                        
                    </div>
                </div>
                <div className="information-university col_1">
                    <div className="universityCard">
                    <FontAwesomeIcon icon={faUniversity} className="universityIcon" size='5x' />
                        <h5 style={{textAlign: 'center', paddingBottom: '20px'}}>College life</h5>
                        <p>Currently I am in the 2nd year of my B.tech degree in Maulana Abul Kalam Azad University Of Technology. My college life becomes as a new chapter of my life with lots of exprriences and lessons. For the first time I could feel the strength within me. The hostel life is one of the beautiful experience in my college life. I must say that I am enjoying as well as exploring one of the best journey in my life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Study;
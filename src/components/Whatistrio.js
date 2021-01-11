import React from 'react'
import Logo from '../img/Newlogo2.gif';
import './Whatistrio.css';

function Whatistrio() {
    return (
        <div className="what__is__trio">
            <div className="trio">
                <div className="trio__container">
                    <img src={Logo} alt="trio" />
                    <h2>Trio Teacher</h2>
                    <h3>Break the chain</h3>
                </div>
                <div className="trio__dsc">
                    <h2>What is Trio?</h2>
                    <p>In todays pacing world, the traditional chalk board teaching is not sufficient to meet the demands of the students and their parent. A coordinator or facilitator is very much essential to coordinate and enhance a teacher-student activity so that the student gets the maximum benefit in quick time.</p>
                </div>
            </div>
            <h2>TRIO : A combo of Students, Teachers and Coordinators</h2>
        </div>
    )
}

export default Whatistrio

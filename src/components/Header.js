import React from 'react'
import "./Header.css";
import Navbar from "./Navbar";


function Header() {
    return (
        <div className="trio__header">
            <Navbar />
            <div className="header__container">
                <div className="container">

                    <h1>TUTOR PROVIDING PLATFORM</h1>
                    <h2>"Every teacher is a leader."</h2>
                    <p>NEED TUTOR FOR HOME / SCHOOL / COACHING?</p>
                    <div className="header__select">
                        <select className="city">
                            <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                        <select className="city__area">
                            <option value="paldi">Paldi</option>
                        </select>

                        <input type="submit" value="Enquire" />
                    </div>
                    <hr />
                    <h3>YOUR ACADEMIC SUCCESS BEGINS WITH US</h3>
                </div>

            </div>
        </div>
    )
}

export default Header

import React from 'react'
import "./Header.css";
import Logo from '../img/Newlogo2.gif';


function Header() {
    return (
        <div className="trio__header">
            <div className="header">
                <div className="header__logo">
                    <img src={Logo} alt="trio" />
                    <div className="header__logo__des">

                        <h5>Trio</h5>
                        <p>Break the chain</p>

                    </div>

                </div>
                <div className="header__activity">
                    <a href="/">About us</a>
                    <a href="/">Activity</a>
                    <a href="/">Free Education</a>
                    <a href="/">Blogs</a>
                    <a href="/" className="active">Apply for tutor</a>
                </div>
            </div>
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

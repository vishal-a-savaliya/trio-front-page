import React from 'react'

function Header() {
    return (
        <div className="trio__header">
            <div className="header">
                <div className="header__logo">
                    <img src="" alt="trio" />   
                    <h5>Trio</h5>
                    <p>Break the chain</p>

                </div>
                <div className="header__activity">
                    <a href="/">About us</a>
                    <a href="/">Activity</a>
                    <a href="/">Free Education</a>
                    <a href="/">Blogs</a>
                    <a href="/" className="active">Apply for tutor</a>
                </div>
                <div className="header__container">
                    <h1>TUTOR PROVIDING PLATFORM</h1>
                    <h3>"Every teacher is a leader."</h3>
                    <h3>NEED TUTOR FOR HOME / SCHOOL / COACHING?</h3>
                    <div className="header__select">
                        <select  className="city">
                            <option value="Ahmedabad">Ahmedabad</option>
                        </select>
                        <select  className="city__area">
                            <option value="paldi">Paldi</option>
                        </select>

                        <input type="submit" value="Enquire"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

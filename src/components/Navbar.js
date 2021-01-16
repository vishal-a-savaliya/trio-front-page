import React from 'react';
import './Navbar.css';
import Logo from '../img/Newlogo2.gif';

function Navbar() {

    
    return (
        <div className="trio__navbar">
            <div className="header">
                <div className="header__logo"
                    onClick={() => {
                        window.location.hash = "/";
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                    }}>
                    <img src={Logo} alt="trio" />
                    <div className="header__logo__des">

                        <h5>Trio</h5>
                        <p>Break the chain</p>

                    </div>

                </div>
                <div className="header__activity">

                    <div class="dropdown">
                        <button class="dropbtn">Exam Updates
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="../files/JEE_Main_2021.docx" target="_blank">JEE MAIN 2021 Latest Updates</a>
                        </div>
                    </div>

                    <a href="/">About us</a>
                    <a href="/">Activity</a>
                    <a href="/">Free Education</a>
                    <a href="/">Blogs</a>
                    <a href="/" className="active">Apply for tutor</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

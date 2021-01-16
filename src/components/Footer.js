import React from 'react';
import './Footer.css';
import Logo from '../img/Newlogo2.gif';

function Footer() {
    return (
        <div className="trio__footer">

            <div className="footer1">

                <div className="trio__footer__logo">
                    <img src={Logo} alt="trio" />
                    <div className="footer__logo__des">

                        <h1>Trio</h1>
                        <p>Break the chain</p>

                    </div>
                </div>
                <div className="footer_social__icon">

                    <a href="https://www.linkedin.com/company/trioteachers/" target="blank"> <i class="fab fa-linkedin-in"></i> </a>

                    <a href="https://twitter.com/TeachersTrio?s=08" target="blank"> <i class="fab fa-twitter"></i> </a>


                    <a href="https://www.instagram.com/trioteachers/" target="blank"> <i class="fab fa-instagram"></i> </a>

                    <a href="https://m.facebook.com/Trio-Teachers-364527030757298/?ref=bookmarks" target="blank"> <i class="fab fa-facebook-square"></i> </a>
                </div>
                <div className="quick__links">

                    <h4> Quick links</h4>
                    <div className="links">
                        <a href=""> About us </a>
                        <a href=""> Contact us </a>
                        <a href=" ">Activity </a>
                        <a href=" ">Blog </a>
                        <a href="">Careers </a>
                        <a href="">FAQ </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer2">
                <h5>© 2020 Trio teacher</h5>
                <div className="language">
                    <i class="fas fa-globe"></i>
                    <select className="dd__language">
                        <option value="English">English</option>
                        <option value="Gujarati">Gujarati</option>
                    </select>
                </div>
            </div>



        </div>
    )
}

export default Footer

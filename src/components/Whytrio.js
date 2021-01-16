import React from 'react';
import './Whytrio.css';

function Whytrio() {
    return (
        <div className="why__trio">
            <h2>Why Trio ?</h2>
            <hr />
            <div className="dsc">
                    Your Child should have the best possible teaching resource at his disposal, here are a few reasons why trio teachers can give you the best possible learning experience.
            </div>
            
            <div className="whytrio__container">
                <div className="container__dsc">
                    <i class="fas fa-laptop-code"></i>
                    <p>In this digital platform you can easily search for tutor for your child to get genuine education along with related skills through trained and experienced teachers who are associated with Trio Teachers.</p>
                </div>
                <div className="container__dsc">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    <p>According to your convenient need, you can join Trio for group tuitions as well as personal tuitions.</p>
                </div>
                <div className="container__dsc">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <p>You will be provided a tutor from all over the city area which really ends the trouble of yours searching for the tutors for your child.</p>
                </div>
                <div className="container__dsc">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <p>You will be connected through the contact of teachers of Trio.</p>
                </div>
                <div className="container__dsc">
                    <i class="far fa-comment-alt"></i>
                    <p>Your child’s monthly feedback will be taken and teachers can be replaced easily according to your demand.</p>
                </div>
            </div>
        </div>
    )
}

export default Whytrio

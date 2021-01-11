import React from 'react';
import "./Whatweoffer.css";

function Whatweoffer() {
    return (
        <div className="trio__whatweoffer">
            <h2>What we offer?</h2>
            <hr />
            <div className="whatweoffer">

                <div className="whatweoffer__icons">
                    {/* <div className="icons">
                <i class="fas fa-ribbon"></i>
                </div> */}
                    <div className="icons">
                        <i class="fas fa-award"></i>
                        <span>High Quality Teaching</span>
                    </div>
                    <div className="icons">
                        <i class="fas fa-undo-alt"></i>
                        <span>Replacement Guarantee</span>
                    </div>
                    <div className="icons">
                        <i class="fas fa-laptop-code"></i>
                        <span>Online Live Classes</span>
                    </div>
                    <div className="icons">
                        <i class="far fa-comment-alt"></i>
                        <span>Feedback Every Month</span>
                    </div>
                    <div className="icons">
                        <i class="fas fa-dice"></i>
                        <span>Fun Activities</span>
                    </div>
                    <div className="icons">
                        <i class="fas fa-globe-americas"></i>
                        <span>Online Doubt Solving</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatweoffer

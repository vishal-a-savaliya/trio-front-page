import React from 'react';
import "./Tuitionsondemand.css";
import Home from "@material-ui/icons/HomeOutlined";
import Group from "@material-ui/icons/Group";

function Tuitionsondemand() {
    return (
        <div className="trio__tod">
            <h2>Tuitions On Demand</h2>
            <hr />

            <div className="tod__group">
                <div className="tod__group__container">
                    <Home />
                    <div className="group__dsc">

                        <h4>Home Tutions</h4>
                        <p>Get the best teaching experience at Home</p>
                    </div>
                </div>
                <div className="tod__group__container">
                    <Group />
                    <div className="group__dsc">
                        <h4>Group Tutions</h4>
                        <p>Group Tution servies in all over city</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tuitionsondemand

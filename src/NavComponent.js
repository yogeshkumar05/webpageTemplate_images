import React from 'react';
import {Button} from 'react-bootstrap';
export default function NavComponent()
{
    return(
        <div className="row navBar">
            <div className="col-sm-1 col-md-1 col-lg-1">
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
                Hello World
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
                Home
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
                About
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
                Company
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
                <button className="transparent buttonMain">Contact Us</button>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
            </div>
        </div>

    )
}


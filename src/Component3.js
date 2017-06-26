import React from 'react';
import {Button} from 'react-bootstrap';
export default function Component3()
{
    return(
           <div className="row component3">
            <div className="col-sm-7 col-md-7 col-lg-7">
                <h3>heading heading heading heading heading heading heading heading heading heading heading heading heading headingheading
                    heading heading</h3>
                <p>some datasome datasome datasome datasome datasome datasome datasome datasome datasome data some datasome
                    datasome datasome datasome datasome datasome datasome data some datasome datasome datasome datasome datasome
                    datasome datasome datasome datasome data some datasome datasome datasome datasome datasome datasome datasome
                    data some datasome datasome datasome datasome datasome datasome datasome datasome datasome data some
                    datasome datasome datasome datasome datasome datasome datasome data</p>
                <Button className="noBorderbtn shadow">Learn More</Button>
            </div>
            {/*<div className="col-sm-1 col-md-1 col-lg-1">
                </div>*/}
            <div className="col-md-5 col-md-5 col-lg-5">
                <img src="../images/Mockup.png" alt="Mockup" />
            </div>
        </div>
    )
}
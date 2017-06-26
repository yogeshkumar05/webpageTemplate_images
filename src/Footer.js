import React from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
export default function Footer()
{
    return(
                <footer className="component6">



            <div className="row margintb">
                <div className="col-sm-2 col-md-2 col-lg-2">

                    <h3>Contact Us</h3>
                    <div>8939758254</div>
                    <div>yogeshkumar.05@live.in</div>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">

                    <h3>Follow Us</h3>
                    <div>LinkedIn</div>
                    <div>Facebook</div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5">
                    <h3>Join our monthly news letter</h3>
                    <div>You need a helping hand?</div>
                    <InputGroup>
                        <FormControl type="text" className="nooutline shadow" placeholder="Your Email here" />
                        <InputGroup.Button><Button className="nooutline shadow">Enter</Button></InputGroup.Button>
                    </InputGroup>
                    {/*<div className="row"><input className="nooutline shadow" type="text" placeholder="Your Email here"/><Button className="noBorderbtn shadow">Enter</Button></div>*/}
                </div>


            </div>
            <hr/>
            <div className="row margintb">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    &copy; 2017, Yogesh India
                </div>
                <div className="col-sm-7 col-md-7 col-lg-7">
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1">
                    Terms
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1">
                    Partners
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1">
                    Contact
                </div>
            </div>


        </footer>
    )
}
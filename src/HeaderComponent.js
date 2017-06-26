import React from 'react';
import NavComponent from './NavComponent';

export default function HeaderComponent()
{
    return(

               <div className="row headerSection">
                   <NavComponent/>
                   <MainHeading/>
                   <Introduction/>
                   <PlayVideo/>

    </div>

    )
}

function MainHeading()
{
    return(
        <div className="row heading">
            <div className="col-sm-1 col-md-1 col-lg-1">
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
                <h1>Main Heading Main Heading Main Heading Main Heading Main Heading Main Heading </h1>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
            </div>
        </div>
    )
}

function Introduction()
{
    return(
        <div className="row introduction">
            <div className="col-sm-1 col-md-1 col-lg-1">
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
                <p>Introduction data Introduction data Introduction data Introduction data Introduction data Introduction data
                    Introduction data Introduction data Introduction data </p>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
            </div>
        </div>
    )
}

function PlayVideo()
{
    return(
                <div className="row playVideo">
            <div className="col-sm-1 col-md-1 col-lg-1">
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
                <img src="../images/icons/play.png"/>Play Video
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
            </div>
        </div>
    )
}
import React from 'react';

export default function Component5()
{
    return(
        <div className="component5">
              <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
                <img src="../images/image1.jpg" className="imgwidth" alt="image1" />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
                
                    <img src="./images/image2.jpg" className="imgwidth" alt="image2" />
                    <h3>Heading heading</h3>
                    <div>some data some data some data</div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
                <img src="./images/image3.jpg" className="imgwidth" alt="image3" />
            </div>
        </div>
        <div className="row imagerow">
            <div className="col-sm-3 col-md-3 col-lg-3">
                <img src="./images/image4.jpg" className="imgwidth" alt="image1" />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <img src="./images/image5.jpg" alt="image2" className="imgwidth" />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
                <img src="./images/image6.jpg" alt="image3" className="imgwidth" />
            </div>
        </div>
        </div>
    )
}
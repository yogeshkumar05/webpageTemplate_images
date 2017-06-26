import React from 'react';
export default function Component2() {
    return (
        <div className="row component2">
            <div className="col-md-4 shadow">
                <div className="thumbnail">
                    <a href="assam.png" target="_blank">
                        <img src="../images/one.jpg" alt="Lights"/>
                        <div className="caption">
                            <h2>Heading 1</h2>
                            <p> some data some data some data some data some data some data some data some data
                                some data some data some data
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-4 shadow">
                <div className="thumbnail">
                    <a href="bengal.png" target="_blank">
                        <img src="../images/two.jpg" alt="Nature" />
                        <div className="caption">
                            <h3>Very very very very Long Heading </h3>
                            <p>some data some data some data some data some data</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-4 shadow">
                <div className="thumbnail">
                    <a href="jharkhand.png" target="_blank">
                        <img src="../images/three.jpg" alt="Fjords" className="" />
                        <div className="caption">
                            <h2>Another Heading</h2>
                            <p>some data some data some data some data some data some data some data some data
                                some data some data some data</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
                    )
}
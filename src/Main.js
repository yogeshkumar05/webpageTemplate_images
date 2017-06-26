import React from 'react';
import {Button} from 'react-bootstrap';
import HeaderComponent from './HeaderComponent';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component41 from './Component41';
import Component5 from './Component5';
import Component51 from './Component51';
import Component6 from './Component6';
import Component7 from './Component7';
import Footer from './Footer';

export default function Main()
{
    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <Component1/>
                <Component2/>
                <Component3/>
                <Component4/>
                <Component41/>
                <Component5/>
                <Component51/>
                <Component6/>
                <Component7/>
                <Footer/>
            </div>
        </div>
    )
} 
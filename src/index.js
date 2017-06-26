import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';
import '../styles/index.scss';


const container=document.getElementById("container");

ReactDOM.render(<Main/>, container);
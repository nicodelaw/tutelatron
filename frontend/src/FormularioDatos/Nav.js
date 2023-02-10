import React from "react";
import logo from './logo.png';
import './Nav.css';

function Nav (props) {
    return(
        <nav id="nav" class="navbar navbar-expand-lg text-white d-flex justify-content-center pr-0" >
            <ul class="row">
                <img src={logo} href="" class="w-50"></img>
            </ul>
        </nav>
    )
}

export { Nav }
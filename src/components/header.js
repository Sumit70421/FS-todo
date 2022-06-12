import * as React from "react";
import './css/header.css'
function Header(props){
    return <h1 id="head">{props.name}</h1>;
}

export default Header;
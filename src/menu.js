import React from "react";
import { ReactDOM } from "react";

const Menu = () =>
{
    return (
        <div className="ui compact vertical labeled icon menu" style={{backgroundColor : 'aqua'}}>
            <a class="item">
                <i class="clone icon"></i>
                <strong>Dashboard</strong>
            </a>
            <a class="item">
                <i class="rupee sign icon"></i>
                <strong>Transactions</strong>
            </a>
            <a class="item">
                <i class="object group outline icon"></i>
                <strong>Entities</strong>        
            </a>
            <a class="item">
                <i class="first aid icon"></i>
                <strong>Health Check</strong>        
            </a>
            <a class="item">
                <i class="settings icon"></i>
                <strong>Settings</strong>        
            </a>
        </div>
    )
}

//ReactDOM.render(<Menu />, document.querySelector('#root'))
export default Menu
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import './style.css';
import faker from '@faker-js/faker';


const App = () => 
{
    return (
    <div> 
      <h1 style={{backgroundColor:'black'}}> <center> PCG Dashboard </center>  </h1>
      
    <div class="sub header">Perfios Payment Gateway</div>
    <div class="content">
    Dashboard
    </div>
      <Menu name />
    </div>
    
    )
}
ReactDOM.render(<App />, document.querySelector('#root') )
//ReactDOM.render(<New />, document.querySelector('#root') )
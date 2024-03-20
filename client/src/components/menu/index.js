import { useState, forwardRef, useImperativeHandle } from 'react';

const Menu = forwardRef((ref) => {
    
    return (
        <div class="card" style= {{width: '18em'}}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
  });
  
  Menu.displayName = 'Menu';
  
export default Menu;
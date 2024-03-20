import { useState, forwardRef, useImperativeHandle } from 'react';

const Navbar = forwardRef((ref) => {
    
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
          ModulaSys
        </a>
      </nav>
    );
  });
  
Navbar.displayName = 'Navbar';
  
export default Navbar;
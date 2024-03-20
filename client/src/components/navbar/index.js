import { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

const Navbar = forwardRef((ref) => {
    
    return (
        <div>
          Hola desde el navbar
        </div>
    );
  });
  
  Navbar.displayName = 'Navbar';
  
export default Navbar;
import { useState, forwardRef, useImperativeHandle } from 'react';

const Welcome = forwardRef((ref) => {
    
    return (
      <h1>Bienvenido</h1>
    );
  });
  
  Welcome.displayName = 'Welcome';
  
export default Welcome;
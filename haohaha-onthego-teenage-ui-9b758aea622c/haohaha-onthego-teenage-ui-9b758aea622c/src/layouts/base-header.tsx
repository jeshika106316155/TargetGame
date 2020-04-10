import React from 'react';
import { Link } from 'react-router-dom';

export const BaseHeader = () => {
  return (
    <div className="toolbar flex align-n-c">
      <button style={{flex: '0 0 auto'}} type="button">Menu</button>
      <p className="align-c" style={{flex: '1 1 auto'}}><b>Title</b></p>
      <Link style={{flex: '0 0 auto'}} to="/">Home</Link>
    </div >
  );
};

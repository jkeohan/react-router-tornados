import React from 'react';
import { Link } from 'react-router-dom'

function Header() {

  let imageStyles = {
    'max-height': '100%'
  }

  let ulStyles = {
    display:'flex',
    'list-style': 'none'
  }

  let navStyles = {
    height:'100px',
    display: 'flex',
   'justify-content': 'space-between',
    padding: '20px'
  }

  let aStyles = {
    padding: '25px'
  }

  return (
     <nav style={navStyles}>
     <img
      style={imageStyles}
      src="http://hdvgraphics.com/logo/logoimages/tornado.jpg" alt='tornado'/>
      <ul style={ulStyles}>
       <li><Link to="/" style={aStyles}>Home</Link></li>
       <li><Link to="/roster" style={aStyles}>Roster</Link></li>
       <li><Link to="/schedule" style={aStyles}>Schedule</Link></li>
      </ul>
     </nav>
  );
}

export default Header;

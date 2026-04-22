import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>MEXCELFLIX</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/watchlist" style={styles.link}>Watchlist</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center',
    padding:'16px 32px', background:'#141414', position:'sticky', top:0, zIndex:100 },
  brand: { color:'#E50914', fontSize:'24px', fontWeight:'bold', textDecoration:'none' },
  links: { display:'flex', gap:'24px' },
  link: { color:'#fff', textDecoration:'none', fontSize:'14px' }
};

export default Navbar;
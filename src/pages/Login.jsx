import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Sign In</h2>
        <input style={styles.input} placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)} />
        <input style={styles.input} placeholder="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button style={styles.btn} onClick={handleLogin}>Sign In</button>
        <p style={styles.link} onClick={() => navigate('/register')}>
          New to Mexcelflix? Sign up
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: { background:'#141414', minHeight:'100vh', display:'flex',
    alignItems:'center', justifyContent:'center' },
  box: { background:'#1f1f1f', padding:'48px', borderRadius:'8px', width:'360px' },
  title: { color:'#fff', fontSize:'28px', marginBottom:'24px' },
  input: { width:'100%', padding:'12px', marginBottom:'16px', borderRadius:'4px',
    border:'1px solid #444', background:'#333', color:'#fff',
    fontSize:'14px', boxSizing:'border-box' },
  btn: { width:'100%', padding:'14px', background:'#E50914', color:'#fff',
    border:'none', borderRadius:'4px', fontSize:'16px', cursor:'pointer' },
  link: { color:'#aaa', fontSize:'13px', marginTop:'16px', cursor:'pointer', textAlign:'center' }
};

export default Login;
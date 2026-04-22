import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(username, email, password);
      navigate('/login');
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create Account</h2>
        <input style={styles.input} placeholder="Username"
          value={username} onChange={e => setUsername(e.target.value)} />
        <input style={styles.input} placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)} />
        <input style={styles.input} placeholder="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button style={styles.btn} onClick={handleRegister}>Sign Up</button>
        <p style={styles.link} onClick={() => navigate('/login')}>
          Already have an account? Sign in
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

export default Register;
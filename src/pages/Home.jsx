import React, { useEffect, useState } from 'react';
import { getAllMovies, getByCategory } from '../services/movieService';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const res = category
        ? await getByCategory(category)
        : await getAllMovies();
      setMovies(res.data);
    };
    fetch();
  }, [category]);

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Watch Anywhere. Anytime.</h1>
        <p style={styles.heroSub}>Comedy · Romance · Action & Thriller</p>
      </div>
      <div style={styles.filters}>
        {['', 'Comedy', 'Romance', 'Action & Thriller'].map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{ ...styles.btn, ...(category === cat ? styles.active : {}) }}>
            {cat || 'All'}
          </button>
        ))}
      </div>
      <div style={styles.grid}>
        {movies.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}

const styles = {
  page: { background:'#141414', minHeight:'100vh', color:'#fff' },
  hero: { padding:'80px 32px', background:'linear-gradient(to bottom, #1a1a1a, #141414)' },
  heroTitle: { fontSize:'48px', fontWeight:'bold', margin:'0 0 12px' },
  heroSub: { color:'#aaa', fontSize:'18px', margin:0 },
  filters: { display:'flex', gap:'12px', padding:'24px 32px' },
  btn: { padding:'8px 20px', borderRadius:'20px', border:'1px solid #444',
    background:'transparent', color:'#fff', cursor:'pointer', fontSize:'13px' },
  active: { background:'#E50914', borderColor:'#E50914' },
  grid: { display:'flex', flexWrap:'wrap', gap:'16px', padding:'0 32px 48px' }
};

export default Home;
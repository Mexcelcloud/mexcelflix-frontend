import React, { useEffect, useState } from 'react';
import API from '../services/axiosConfig';
import MovieCard from '../components/MovieCard';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    API.get('/api/watchlist').then(res => setWatchlist(res.data));
  }, []);

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>My Watchlist</h2>
      {watchlist.length === 0
        ? <p style={styles.empty}>No movies in your watchlist yet.</p>
        : <div style={styles.grid}>
            {watchlist.map(item => (
              <MovieCard key={item.id} movie={item.movie} />
            ))}
          </div>
      }
    </div>
  );
}

const styles = {
  page: { background:'#141414', minHeight:'100vh', padding:'32px', color:'#fff' },
  title: { fontSize:'28px', marginBottom:'24px' },
  empty: { color:'#aaa', fontSize:'16px' },
  grid: { display:'flex', flexWrap:'wrap', gap:'16px' }
};

export default Watchlist;
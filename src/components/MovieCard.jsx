import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div style={styles.card} onClick={() => navigate(`/watch/${movie.id}`)}>
      <img src={movie.thumbnailUrl} alt={movie.title} style={styles.img} />
      <div style={styles.info}>
        <p style={styles.title}>{movie.title}</p>
        <p style={styles.category}>{movie.category}</p>
      </div>
    </div>
  );
}

const styles = {
  card: { width:'200px', cursor:'pointer', borderRadius:'6px',
    overflow:'hidden', background:'#1f1f1f', transition:'transform 0.2s' },
  img: { width:'100%', height:'120px', objectFit:'cover' },
  info: { padding:'8px' },
  title: { color:'#fff', fontSize:'13px', margin:'0 0 4px', fontWeight:'500' },
  category: { color:'#999', fontSize:'11px', margin:0 }
};

export default MovieCard;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../services/movieService';

function MoviePlayer() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.page}>
      <video controls style={styles.video} src={movie.videoUrl}>
        Your browser does not support video.
      </video>
      <div style={styles.info}>
        <h1 style={styles.title}>{movie.title}</h1>
        <p style={styles.category}>{movie.category} · {movie.releaseYear}</p>
        <p style={styles.desc}>{movie.description}</p>
      </div>
    </div>
  );
}

const styles = {
  page: { background:'#141414', minHeight:'100vh', color:'#fff' },
  video: { width:'100%', maxHeight:'70vh', background:'#000' },
  info: { padding:'24px 32px' },
  title: { fontSize:'32px', margin:'0 0 8px' },
  category: { color:'#aaa', fontSize:'14px', margin:'0 0 16px' },
  desc: { color:'#ccc', fontSize:'15px', lineHeight:'1.6', maxWidth:'700px' },
  loading: { color:'#fff', padding:'40px', textAlign:'center', background:'#141414', minHeight:'100vh' }
};

export default MoviePlayer;
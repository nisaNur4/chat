import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Hoş Geldiniz!</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate('/login')}>Giriş Yap</button>
        <button style={styles.button} onClick={() => navigate('/register')}>Kayıt Ol</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px', fontSize: '18px', borderRadius: '10px', cursor: 'pointer'
  }
};

export default Home;

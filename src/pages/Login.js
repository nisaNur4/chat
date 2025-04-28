import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; 
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// Giriş yapmak veya başarısız girişte oturum kapatmak
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.emailVerified) {
        localStorage.setItem('loginTime', Date.now()); // Giriş zamanı
        navigate('/chat');
      } else {
        alert('Lütfen, e-mail adresinizi doğrulayın!');
        await signOut(auth);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Şifre" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <Link to="/reset-password" style={{ color: 'blue', textDecoration: 'underline' }}>
          Şifremi Unuttum?
        </Link>
      </div>
      <div style={{ marginTop: '10px' }}>
        <span>Hesabınız yok mu? </span>
        <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>
          Kayıt Ol
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'
  },
  form: {
    display: 'flex', flexDirection: 'column', gap: '10px'
  }
};

export default Login;

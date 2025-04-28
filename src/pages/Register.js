import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Geçiş

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Kaydolduktan sonra yönlendirir.

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Kayıt başarılı! Email adresinizi doğrulamanız gerekiyor.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister} style={styles.form}>
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
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}

const styles = { // HTML
  container: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'
  },
  form: {
    display: 'flex', flexDirection: 'column', gap: '10px'
  }
};

export default Register;

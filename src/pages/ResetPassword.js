import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; 

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
      setError(''); // Başarılı ollursa önceki hataları temizlemek için: error, boş bir string
    } catch (err) {
      setError('Bir hata oluştu. E-posta doğru mu kontrol edin.');
      setMessage(''); // Hatalıysa başarı mesajlarını temizler: message, boş string
    }
  };
 
  return (
    <div>
      <h2>Şifremi Unuttum</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Bağlantı Gönder</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ResetPassword;

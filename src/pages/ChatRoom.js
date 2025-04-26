import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const ChatRoom = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // Çıkış yapma fonksiyonu, useCallback ile sarmalandı
  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        console.log('Kullanıcı başarıyla çıkış yaptı.');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Çıkış yaparken hata oluştu:', error);
      });
  }, [auth, navigate]); // Dışarıdan kullandıklarımızı dependency listesine yazdık

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLogout();
    }, 3600000); // 1 saat

    return () => clearTimeout(timer);
  }, [handleLogout]); // Artık güvenle handleLogout'u kullanıyoruz

  return (
    <div style={styles.container}>
      <h1>Chat Odasına Hoş Geldin!</h1>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Çıkış Yap
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff5252',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ChatRoom;

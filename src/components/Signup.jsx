import React, { useState } from "react"; // Fonksiyonel bileşenlerde dinamik değerler
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// E-posta ve şifre ile yeni bir kullanıcı hesabı 
// Doğrulama e-postası 
import { auth } from "../firebase/firebaseConfig"; // Kimlik doğrulama 

const Signup = () => { // Fonksiyonel React bileşeni tanımlanır
  const [email, setEmail] = useState(""); // E-posta adresini tutar.
  const [password, setPassword] = useState("");
  // Başlangıç değeri boş bir stringdir ve kullanıcının girdiği şifreyi tutar.

  const handleSignup = async (e) => { // Kayıt formu gönderir.
    e.preventDefault(); // Javascript event.preventDefault fonksiyonu
    // Bu fonksiyon çağrıldığında oluşan olayın işlevini geçersiz kılar. 
    // Sayfanın yeniden yüklenmesini engeller.

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Kayıt başarılı:", user);

      await sendEmailVerification(user); // Doğrulama maili gönderir.
      alert("Kayıt başarılı! E-posta doğrulama bağlantısı gönderildi.");
    } catch (error) {
      console.error("Kayıt hatası:", error.message); // Hata nedeni
      alert(error.message);
    }
  }; // "try" kodları çalışma zamanında test etmek için 
  // "catch" çalışma zamanında çıkan hataları yakalamak için
  // Hata oluşursa "catch" bloğundaki kod çalışır.

  // JS
  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required // Zorunlu
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
};

export default Signup; //Dışa aktarır.

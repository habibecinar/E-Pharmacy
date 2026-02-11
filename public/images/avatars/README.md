# Avatars (Kullanıcı Avatarları) Klasörü

Bu klasöre **kullanıcı profil görselleri** koyun.

## 📁 Eklenecek Dosyalar:

Avatar görselleri:
- `default-avatar.png` - Varsayılan avatar (önemli!)
- `user-1.jpg` - Örnek kullanıcı 1
- `user-2.jpg` - Örnek kullanıcı 2
- `user-3.jpg` - Örnek kullanıcı 3
- vb...

## 💡 Kullanım:

```jsx
// Reviews (Yorumlar) bölümünde
<img 
  src={review.avatar || '/images/avatars/default-avatar.png'} 
  alt={review.userName}
  className="user-avatar"
/>

// Customer listesinde
<img 
  src={`/images/avatars/${customer.avatar}`} 
  alt={customer.name}
/>
```

## 🎨 İçerik Önerileri:

- Genel avatar görselleri
- Kullanıcı profil fotoğrafları
- Karikatür avatarlar
- Placeholder avatar'lar

## 📏 Önerilen Boyut:
- 80x80 px veya 100x100 px (kare format)
- PNG formatı (yuvarlatılmış köşeler için)
- JPG formatı (fotoğraflar için)

## ⚠️ Önemli:
**default-avatar.png** mutlaka olmalı! Kullanıcı fotoğrafı yoksa bu gösterilir.

## ✅ Hazır olduğunda:
- [x] Klasör oluşturuldu
- [ ] default-avatar.png eklendi (ÖNEMLİ!)
- [ ] En az 3-5 örnek avatar eklendi

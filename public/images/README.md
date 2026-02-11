# 🖼️ Images Klasörü - E-Pharmacy

Tüm görseller bu klasörde organize edilmiştir.

## 📁 Klasör Yapısı

```
images/
├── 📁 logo/          - Logo dosyaları
├── 📁 auth/          - Login/Register arka plan
├── 📁 products/      - Ürün görselleri
├── 📁 stores/        - Eczane fotoğrafları
├── 📁 banners/       - Banner ve hero görselleri
├── 📁 avatars/       - Kullanıcı profil görselleri
└── 📁 icons/         - İkon dosyaları (opsiyonel)
```

## ✅ Öncelikli Görseller (Mutlaka Ekleyin)

### 🔴 Yüksek Öncelik:
1. **logo/logo.png** - Ana logo (32x32 px)
2. **auth/auth-bg.jpg** - Login/Register arka plan (1920x1080 px)
3. **avatars/default-avatar.png** - Varsayılan kullanıcı avatarı (80x80 px)
4. **stores/** - En az 6 eczane görseli (HomePage için)

### 🟡 Orta Öncelik:
5. **products/** - En az 10 ürün görseli (MedicinePage için)
6. **banners/** - 3 promo banner (HomePage için)

### 🟢 Düşük Öncelik:
7. **avatars/** - 3-5 kullanıcı avatarı (Reviews için)
8. **icons/** - Opsiyonel

## 📝 İsimlendirme Kuralları

✅ **Doğru:**
- logo.png
- auth-bg.jpg
- product-vitamin-c.png
- store-pharmacy-1.jpg

❌ **Yanlış:**
- Logo.PNG (büyük harf)
- arka plan.jpg (boşluk)
- ürün-1.png (Türkçe karakter)
- IMG_1234.jpg (anlamsız)

## 🎨 Format ve Boyut Önerileri

| Görsel Tipi | Format | Boyut |
|------------|--------|-------|
| Logo | PNG/SVG | 32x32 veya 64x64 |
| Ürünler | PNG/JPG | 400x400 |
| Eczaneler | JPG | 800x600 |
| Banner | JPG | 1920x600 |
| Avatar | PNG/JPG | 80x80 veya 100x100 |
| Arka Plan | JPG | 1920x1080 |

## 💡 Nasıl Kullanılır?

Kod'da şu şekilde kullanılır:

```jsx
// Logo
<img src="/images/logo/logo.png" alt="E-Pharmacy" />

// Ürün
<img src="/images/products/vitamin-c.png" alt="Vitamin C" />

// Eczane
<img src="/images/stores/pharmacy-1.jpg" alt="Eczane" />

// Avatar
<img src="/images/avatars/user-1.jpg" alt="Kullanıcı" />
```

⚠️ **Önemli:** Path her zaman `/images/` ile başlamalı!

## 📦 Ücretsiz Görsel Kaynakları

Test için görsel indirmek isterseniz:

- **Unsplash** - https://unsplash.com (Fotoğraflar)
- **Pexels** - https://www.pexels.com (Fotoğraflar)
- **Pixabay** - https://pixabay.com (Görseller)
- **Flaticon** - https://www.flaticon.com (İkonlar)

**Arama kelimeleri:**
- pharmacy
- medicine
- pills
- healthcare
- medical store
- drugstore

## ✅ Kontrol Listesi

- [ ] logo/logo.png eklendi
- [ ] auth/auth-bg.jpg eklendi
- [ ] avatars/default-avatar.png eklendi
- [ ] stores/ klasörüne 6+ görsel eklendi
- [ ] products/ klasörüne 10+ görsel eklendi
- [ ] banners/ klasörüne 3+ görsel eklendi

## 📚 Yardım

Her klasörde **README.md** dosyası var. 
O klasöre ne koymanız gerektiğini açıklıyor.

Görselleri ekledikten sonra projeyi yeniden başlatın:
```bash
npm run dev
```

İyi çalışmalar! 🚀

# Stores (Eczaneler/Mağazalar) Klasörü

Bu klasöre **eczane/mağaza görselleri** koyun.

## 📁 Eklenecek Dosyalar:

Mağaza görselleri için örnekler:
- `pharmacy-1.jpg`
- `pharmacy-2.jpg`
- `store-istanbul.jpg`
- `store-ankara.jpg`
- `pharmacy-exterior.jpg`
- vb...

## 💡 Kullanım:

```jsx
// Mağaza kartlarında kullanım
<img 
  src="/images/stores/pharmacy-1.jpg" 
  alt="Eczane"
  className="store-image"
/>

// Dinamik kullanım
<img 
  src={`/images/stores/${store.image}`} 
  alt={store.name}
/>
```

## 🎨 İçerik Önerileri:

- Eczane dış cephe fotoğrafları
- Eczane iç mekan fotoğrafları
- Modern eczane görselleri
- Mağaza vitrin görselleri

## 📏 Önerilen Boyut:
- 800x600 px (4:3 format)
- JPG formatı

## ✅ Hazır olduğunda:
- [x] Klasör oluşturuldu
- [ ] En az 6 mağaza görseli eklendi (HomePage'de 6 tane gösterilecek)

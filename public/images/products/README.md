# 💊 Products (Ürünler) Klasörü

İlaç ve ürün görselleri bu klasöre eklenir.

## � Eklenecek Görseller

Aşağıdaki kategorilerde en az **10-15 ürün görseli** ekleyin:

### Vitaminler & Takviyeler:
- `vitamin-c.png`
- `vitamin-d.png`
- `omega-3.png`
- `multivitamin.png`

### İlaçlar:
- `paracetamol.png`
- `aspirin.png`
- `antibiotic-amoxicillin.png`
- `cold-medicine.png`
- `medicine-capsule.png` ⭐ **← Popup için varsayılan görsel!**

### Sağlık Ürünleri:
- `thermometer.png`
- `blood-pressure-monitor.png`
- `glucose-meter.png`
- `first-aid-kit.png`

### Kozmetik & Bakım:
- `hand-cream.png`
- `sunscreen.png`
- `face-mask.png`

## 📏 Önerilen Boyutlar

- **Liste için:** 400x400 piksel (kare)
- **Popup için:** 600x600 piksel (daha büyük çözünürlük)
- **Format:** PNG (şeffaf arkaplan) veya JPG
- **Dosya Boyutu:** Max 200KB

## 💡 Nasıl Kullanılır?

### 1. Ürün Listesinde:
```jsx
// MedicinePage.jsx içinde
<img 
  src="/images/products/vitamin-c.png" 
  alt="Vitamin C" 
/>
```

### 2. Medicine Popup'ta (YENİ!):
```jsx
// MedicinePopup.jsx içinde
<img 
  src={medicine.image || '/images/products/medicine-capsule.png'} 
  alt={medicine.name}
  className="medicine-image"
/>
```

### 3. Dinamik Kullanım:
```jsx
<img 
  src={`/images/products/${product.image}`} 
  alt={product.name} 
/>
```

## � Popup için Özel Görseller

Medicine popup'ında kullanılacak görseller için:

```
medicine-capsule.png     → Varsayılan ilaç görseli (sizin eklediğiniz!)
vitamin-bottle.png       → Vitamin şişesi
pill-pack.png           → Blister ambalaj
syrup-bottle.png        → Şurup şişesi
injection.png           → Enjeksiyon
```

## 🎨 İpuçları

1. **Temiz Arkaplan:** Beyaz veya şeffaf arkaplan kullanın
2. **Yüksek Kalite:** Net ve profesyonel görünümlü fotoğraflar seçin
3. **Tutarlı Stil:** Tüm ürün görselleri benzer açı ve ışıkta olmalı
4. **Sıkıştırma:** TinyPNG ile optimize edin
5. **Popup Görselleri:** Popup için daha büyük çözünürlük kullanabilirsiniz

## � Görsel Kaynakları

- **Unsplash:** https://unsplash.com/s/photos/medicine
- **Pexels:** https://www.pexels.com/search/pills/
- **Pixabay:** https://pixabay.com/images/search/pharmacy/

**Arama terimleri:**
- medicine bottle
- pills capsules
- vitamins supplements
- healthcare products
- medicine package
- pharmacy products

## ✅ Hazır olduğunda:
- [x] Klasör oluşturuldu
- [x] MedicinePopup component'i oluşturuldu
- [ ] medicine-capsule.png eklendi ⭐ (ÖNCELİKLİ!)
- [ ] En az 10 ürün görseli eklendi

# 🎯 MedicinePopup Component - Kullanım Rehberi

## 📦 Nedir?

MedicinePopup, bir ilaç veya ürüne tıklandığında açılan modal/popup penceresidir.

## ✨ Özellikler:

- ✅ Ürün görseli (büyük, yüksek kalite)
- ✅ Ürün adı, kategori, fiyat
- ✅ Detaylı açıklama
- ✅ Stok durumu
- ✅ Tedarikçi bilgisi
- ✅ Reçete uyarısı
- ✅ Sepete ekle butonu
- ✅ Favorilere ekle butonu
- ✅ Responsive tasarım
- ✅ Smooth animasyonlar

## 🎨 Görsel Kullanımı:

Popup'ta görseller şu sırayla kullanılır:

1. **Ürünün kendi görseli** (varsa): `medicine.image`
2. **Varsayılan görsel** (yoksa): `/images/products/medicine-capsule.png`

```jsx
<img 
  src={medicine.image || '/images/products/medicine-capsule.png'} 
  alt={medicine.name}
/>
```

## 📖 Kullanım Örnekleri:

### 1. MedicinePage.jsx içinde:

```jsx
import { useState } from 'react';
import MedicinePopup from '../../components/MedicinePopup';

function MedicinePage() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="medicine-page">
      {/* Ürün Listesi */}
      <div className="medicine-grid">
        {medicines.map(medicine => (
          <div 
            key={medicine.id}
            className="medicine-card"
            onClick={() => handleMedicineClick(medicine)}
          >
            <img src={medicine.image} alt={medicine.name} />
            <h3>{medicine.name}</h3>
            <p>{medicine.price} TL</p>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedMedicine && (
        <MedicinePopup 
          medicine={selectedMedicine}
          onClose={() => setSelectedMedicine(null)}
        />
      )}
    </div>
  );
}
```

### 2. Örnek Veri Yapısı:

```jsx
const medicines = [
  {
    id: 1,
    name: "Vitamin C 1000mg",
    category: "Vitamin & Takviye",
    price: 89.90,
    image: "/images/products/vitamin-c.png", // ← Görsel path
    description: "Bağışıklık sistemini güçlendirir, antioksidan özelliğe sahiptir.",
    stock: 150,
    supplier: "Sağlık Ecza Deposu",
    requiresPrescription: false
  },
  {
    id: 2,
    name: "Parol 500mg",
    category: "Ağrı Kesici",
    price: 45.50,
    image: "/images/products/paracetamol.png",
    description: "Ağrı ve ateş düşürücü. Reçeteli satılır.",
    stock: 0,
    supplier: "Mediko Ecza",
    requiresPrescription: true
  },
  // Görsel yoksa varsayılan kullanılacak
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    category: "Vitamin & Takviye",
    price: 129.90,
    // image yok → varsayılan medicine-capsule.png kullanılacak
    description: "Kalp sağlığını destekler.",
    stock: 80,
    supplier: "Sağlık Ecza Deposu",
    requiresPrescription: false
  }
];
```

### 3. ProductPage.jsx içinde:

```jsx
import { useState } from 'react';
import MedicinePopup from '../components/MedicinePopup';

function ProductPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState(null);

  const viewDetails = (productData) => {
    setProduct(productData);
    setShowPopup(true);
  };

  return (
    <>
      <button onClick={() => viewDetails(productData)}>
        Detayları Gör
      </button>

      {showPopup && (
        <MedicinePopup 
          medicine={product}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
```

## 🎯 Görsel Ekleme Adımları:

### Adım 1: Görseli Ekle
```bash
# Desktop'tan products klasörüne taşı:
/Users/habibe/Desktop/ODEVLERIM/E-Pharmacy/public/images/products/
```

Dosya adı: `medicine-capsule.png` (sizin eklediğiniz görsel!)

### Adım 2: Veri'de Kullan
```jsx
const medicine = {
  name: "Aspirin 100mg",
  image: "/images/products/medicine-capsule.png", // ← Yeni görsel!
  // ...diğer bilgiler
};
```

### Adım 3: Popup'ı Çağır
```jsx
<MedicinePopup medicine={medicine} onClose={handleClose} />
```

## 🎨 CSS Özelleştirme:

Popup görünümünü değiştirmek için:

```css
/* MedicinePopup.css dosyasında */

/* Popup boyutu */
.medicine-popup {
  max-width: 900px; /* Varsayılan */
}

/* Görsel boyutu */
.medicine-image {
  max-height: 400px; /* Varsayılan */
}

/* Renk teması değiştirme */
.medicine-price,
.add-to-cart-btn {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  /* İstediğiniz renk */
}
```

## 🚀 Gelişmiş Özellikler:

### 1. Sepete Ekleme:
```jsx
const handleAddToCart = () => {
  // Sepete ekleme işlemi
  console.log('Sepete eklendi:', medicine);
  onClose();
};
```

### 2. Favorilere Ekleme:
```jsx
const handleAddToFavorites = () => {
  // Favorilere ekleme
  console.log('Favorilere eklendi:', medicine);
};
```

### 3. Keyboard Desteği:
```jsx
useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') onClose();
  };
  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, [onClose]);
```

## ✅ Kontrol Listesi:

- [x] MedicinePopup component oluşturuldu
- [x] CSS dosyası eklendi
- [ ] `medicine-capsule.png` görseli eklendi ⭐
- [ ] En az 5 farklı ürün görseli eklendi
- [ ] MedicinePage'de kullanıldı
- [ ] ProductPage'de kullanıldı
- [ ] Sepete ekleme fonksiyonu bağlandı
- [ ] Favorilere ekleme fonksiyonu bağlandı

## 🎬 Demo:

Popup'ı test etmek için:

```jsx
// Test verisi
const testMedicine = {
  name: "Vitamin C 1000mg",
  category: "Vitamin & Takviye",
  price: 89.90,
  image: "/images/products/medicine-capsule.png",
  description: "Bağışıklık sistemini güçlendirir.",
  stock: 150,
  supplier: "Sağlık Ecza Deposu",
  requiresPrescription: false
};

// Kullanım
<MedicinePopup 
  medicine={testMedicine}
  onClose={() => console.log('Popup kapatıldı')}
/>
```

Artık popup hazır! İyi çalışmalar! 🚀

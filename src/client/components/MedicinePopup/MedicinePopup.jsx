import './MedicinePopup.css';

const MedicinePopup = ({ medicine, onClose }) => {
  if (!medicine) return null;

  return (
    <div className="medicine-popup-overlay" onClick={onClose}>
      <div className="medicine-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="medicine-popup-content">
          {/* Görsel Bölümü */}
          <div className="medicine-image-section">
            <img 
              src={medicine.image || '/images/products/medicine-capsule.png'} 
              alt={medicine.name}
              className="medicine-image"
            />
          </div>

          {/* Bilgi Bölümü */}
          <div className="medicine-info-section">
            <h2 className="medicine-name">{medicine.name}</h2>
            <p className="medicine-category">{medicine.category}</p>
            
            <div className="medicine-price">
              <span className="price-label">Fiyat:</span>
              <span className="price-value">{medicine.price} TL</span>
            </div>

            <div className="medicine-description">
              <h3>Açıklama</h3>
              <p>{medicine.description}</p>
            </div>

            <div className="medicine-details">
              <div className="detail-item">
                <span className="detail-label">Stok:</span>
                <span className="detail-value">{medicine.stock > 0 ? 'Mevcut' : 'Tükendi'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Tedarikçi:</span>
                <span className="detail-value">{medicine.supplier}</span>
              </div>
              {medicine.requiresPrescription && (
                <div className="prescription-warning">
                  ⚠️ Bu ürün reçete gerektirir
                </div>
              )}
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn">
                🛒 Sepete Ekle
              </button>
              <button className="favorite-btn">
                ❤️ Favorilere Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinePopup;

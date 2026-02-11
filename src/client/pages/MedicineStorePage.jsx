import { useState } from 'react';
import { Input, Button } from '../../shared/components';
import './MedicineStorePage.css';

const MedicineStorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');

  // Mock data - eczane listesi
  const pharmacies = [
    {
      id: 1,
      name: "Sağlık Eczanesi",
      address: "Atatürk Cad. No:45, Kadıköy",
      city: "İstanbul",
      phone: "0216 123 45 67",
      hours: "09:00 - 22:00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Aile Eczanesi",
      address: "Cumhuriyet Mah. No:12, Çankaya",
      city: "Ankara",
      phone: "0312 987 65 43",
      hours: "08:00 - 23:00",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Hayat Eczanesi",
      address: "Konak Meydanı No:7, Konak",
      city: "İzmir",
      phone: "0232 456 78 90",
      hours: "07:00 - 21:00",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Merkez Eczanesi",
      address: "İstiklal Cad. No:23, Beyoğlu",
      city: "İstanbul",
      phone: "0212 345 67 89",
      hours: "24 Saat",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Güven Eczanesi",
      address: "Kızılay Mah. No:89, Kızılay",
      city: "Ankara",
      phone: "0312 234 56 78",
      hours: "08:30 - 20:00",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Doğa Eczanesi",
      address: "Alsancak No:34, Karşıyaka",
      city: "İzmir",
      phone: "0232 567 89 01",
      hours: "09:00 - 21:00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1550572017-4814bde02a37?w=400&h=300&fit=crop"
    }
  ];

  const cities = ['all', 'İstanbul', 'Ankara', 'İzmir'];

  const filteredPharmacies = pharmacies.filter(pharmacy => {
    const matchesSearch = pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || pharmacy.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="medicine-store-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <h1>🏥 Medicine Stores</h1>
          <p>Find trusted pharmacies near you</p>
        </div>

        {/* Search & Filter Section */}
        <div className="search-filter-section">
          <div className="search-box">
            <Input
              placeholder="Search by name or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            {cities.map(city => (
              <Button
                key={city}
                variant={selectedCity === city ? 'primary' : 'outline'}
                onClick={() => setSelectedCity(city)}
                size="small"
              >
                {city === 'all' ? 'All Cities' : city}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          Found {filteredPharmacies.length} pharmacy stores
        </div>

        {/* Pharmacy Grid */}
        <div className="pharmacy-grid">
          {filteredPharmacies.length > 0 ? (
            filteredPharmacies.map(pharmacy => (
              <div key={pharmacy.id} className="pharmacy-card">
                <div className="pharmacy-image">
                  <img 
                    src={pharmacy.image} 
                    alt={pharmacy.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%234CAF50"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="24">🏥 Pharmacy</text></svg>';
                    }}
                  />
                  {pharmacy.hours === '24 Saat' && (
                    <div className="badge-24h">24h Open</div>
                  )}
                </div>

                <div className="pharmacy-content">
                  <h3 className="pharmacy-name">{pharmacy.name}</h3>
                  
                  <div className="pharmacy-info">
                    <div className="info-item">
                      <span className="icon">📍</span>
                      <span>{pharmacy.address}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">🏙️</span>
                      <span>{pharmacy.city}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">📞</span>
                      <span>{pharmacy.phone}</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">🕐</span>
                      <span>{pharmacy.hours}</span>
                    </div>
                    <div className="info-item rating">
                      <span className="icon">⭐</span>
                      <span>{pharmacy.rating} / 5.0</span>
                    </div>
                  </div>

                  <div className="pharmacy-actions">
                    <Button variant="primary" size="small">
                      View Details
                    </Button>
                    <Button variant="outline" size="small">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No pharmacies found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineStorePage;

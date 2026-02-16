import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../shared/components';
import './MedicinePage.css';

const MedicinePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Mock medicine data - resme göre
  const medicines = [
    {
      id: 1,
      name: "Isopro Alcohol",
      description: "Rubbing (Agneall)",
      price: 54,
      category: "First Aid",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Dapsone",
      description: "Whitening & Clarifying",
      price: 520,
      category: "Skin Care",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Helminthos",
      description: "Overhead Doors",
      price: 470,
      category: "Supplements",
      image: "https://images.unsplash.com/photo-1550572017-4814bde02a37?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Alcohol",
      description: "Prednisolone Metal",
      price: 748,
      category: "First Aid",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Hydrochloride",
      description: "Catapril Tsinvat",
      price: 582,
      category: "Medicine",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Occidentalis",
      description: "Fire Sprinkler System",
      price: 239,
      category: "Herbal",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Metformin",
      description: "Diabetes Medication",
      price: 354,
      category: "Medicine",
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Octinoxate",
      description: "SPF Protection",
      price: 306,
      category: "Skin Care",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=200&h=200&fit=crop"
    }
  ];

  const categories = ['all', 'Medicine', 'Supplements', 'Skin Care', 'First Aid', 'Herbal'];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="medicine-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>All Medicine</h1>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Drug store</button>
          <button className="tab">All medicine</button>
        </div>

        {/* Search and Filter Row */}
        <div className="search-filter-row">
          {/* Category Dropdown */}
          <div className="category-dropdown">
            <button 
              className="dropdown-button"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              Product category
              <span className="dropdown-icon">▼</span>
            </button>
            {showCategoryDropdown && (
              <div className="dropdown-menu">
                {categories.map(cat => (
                  <div
                    key={cat}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowCategoryDropdown(false);
                    }}
                  >
                    {cat === 'all' ? 'All Categories' : cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Box */}
          <div className="search-box">
            <Input
              placeholder="Search medicine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button */}
          <Button variant="primary" className="filter-btn">
            🔍 Filter
          </Button>
        </div>

        {/* Medicine Grid */}
        <div className="medicine-grid">
          {filteredMedicines.map(medicine => (
            <div key={medicine.id} className="medicine-card">
              <div className="medicine-image">
                <img 
                  src={medicine.image} 
                  alt={medicine.name}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23f5f5f5"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="16">💊</text></svg>';
                  }}
                />
              </div>

              <div className="medicine-info">
                <h3 className="medicine-name">{medicine.name}</h3>
                <p className="medicine-desc">{medicine.description}</p>
                <p className="medicine-price">৳{medicine.price}</p>
              </div>

              <div className="medicine-actions">
                <Button variant="primary" size="small" className="add-to-shop-btn">
                  Add to shop
                </Button>
                <button 
                  className="details-link"
                  onClick={() => navigate(`/medicine/${medicine.id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;

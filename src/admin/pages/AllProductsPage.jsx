import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import { Button, Input } from '../../shared/components';
import './AllProductsPage.css';

const AllProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mock data
  const products = [
    {
      id: 1,
      name: 'Moringa',
      description: 'Brain Toning / Hujarat',
      category: 'Supplements',
      price: 470,
      stock: 145,
      supplier: 'HealthCo Ltd',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Dapsone',
      description: 'Whitening & Clarifying',
      category: 'Skin Care',
      price: 520,
      stock: 89,
      supplier: 'BeautyCare Inc',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Helminthos',
      description: 'Overhead Doors',
      category: 'Medicine',
      price: 470,
      stock: 234,
      supplier: 'MedSupply Co',
      image: 'https://images.unsplash.com/photo-1550572017-4814bde02a37?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Alcohol',
      description: 'Prednisolone Metal',
      category: 'First Aid',
      price: 748,
      stock: 312,
      supplier: 'FirstAid Plus',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Hydrochloride',
      description: 'Catapril Tsinvat',
      category: 'Medicine',
      price: 582,
      stock: 167,
      supplier: 'PharmaGroup',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=100&h=100&fit=crop'
    }
  ];

  const categories = ['all', 'Medicine', 'Supplements', 'Skin Care', 'First Aid', 'Herbal'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <div className="page-header">
        <h1 className="page-title">All Products</h1>
        <Button variant="primary">+ Add Product</Button>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="category-filter"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="product-cell">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div>
                      <p className="product-name">{product.name}</p>
                      <p className="product-desc">{product.description}</p>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>৳{product.price}</td>
                <td>
                  <span className={`stock-badge ${product.stock < 100 ? 'low' : 'good'}`}>
                    {product.stock}
                  </span>
                </td>
                <td>{product.supplier}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-action btn-view"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View
                    </button>
                    <button className="btn-action btn-edit">Edit</button>
                    <button className="btn-action btn-delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title="Product Details"
        size="medium"
      >
        {selectedProduct && (
          <div className="product-detail-modal">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-product-image" />
            <div className="detail-grid">
              <div className="detail-field">
                <label>Product Name</label>
                <p>{selectedProduct.name}</p>
              </div>
              <div className="detail-field">
                <label>Category</label>
                <p>{selectedProduct.category}</p>
              </div>
              <div className="detail-field">
                <label>Price</label>
                <p>৳{selectedProduct.price}</p>
              </div>
              <div className="detail-field">
                <label>Stock</label>
                <p>{selectedProduct.stock} units</p>
              </div>
              <div className="detail-field">
                <label>Supplier</label>
                <p>{selectedProduct.supplier}</p>
              </div>
              <div className="detail-field full-width">
                <label>Description</label>
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllProductsPage;

import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './AllProductsPage.css';

const initialProducts = [
  { id: 1, name: 'Moringa', description: 'Brain Toning / Hujarat', category: 'Supplements', price: 470, stock: 145, supplier: 'HealthCo Ltd', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=80&h=80&fit=crop' },
  { id: 2, name: 'Dapsone', description: 'Whitening & Clarifying', category: 'Skin Care', price: 520, stock: 89, supplier: 'BeautyCare Inc', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=80&h=80&fit=crop' },
  { id: 3, name: 'Helminthos', description: 'Anti-Parasitic Treatment', category: 'Medicine', price: 470, stock: 234, supplier: 'MedSupply Co', image: 'https://images.unsplash.com/photo-1550572017-4814bde02a37?w=80&h=80&fit=crop' },
  { id: 4, name: 'Alcohol', description: 'Prednisolone Metal', category: 'First Aid', price: 748, stock: 312, supplier: 'FirstAid Plus', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=80&h=80&fit=crop' },
  { id: 5, name: 'Hydrochloride', description: 'Catapril Tsinvat', category: 'Medicine', price: 582, stock: 167, supplier: 'PharmaGroup', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=80&h=80&fit=crop' },
  { id: 6, name: 'Echinacea', description: 'Immune System Boost', category: 'Herbal', price: 320, stock: 95, supplier: 'VitaSource', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9d6e9?w=80&h=80&fit=crop' },
  { id: 7, name: 'Vitamin C', description: 'Ascorbic Acid 1000mg', category: 'Supplements', price: 185, stock: 540, supplier: 'HealthCo Ltd', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=80&h=80&fit=crop' },
  { id: 8, name: 'Ibuprofen', description: 'Anti-Inflammatory 400mg', category: 'Medicine', price: 125, stock: 78, supplier: 'MedSupply Co', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=80&h=80&fit=crop' },
];

const emptyForm = { name: '', description: '', category: 'Medicine', price: '', stock: '', supplier: '' };
const categories = ['Medicine', 'Supplements', 'Skin Care', 'First Aid', 'Herbal'];

const AllProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewProduct, setViewProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = filterCategory === 'all' || p.category === filterCategory;
    return matchSearch && matchCat;
  });

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Product name is required';
    if (!data.description.trim()) errors.description = 'Description is required';
    if (!data.price || isNaN(Number(data.price)) || Number(data.price) <= 0) errors.price = 'Valid price required';
    if (!data.stock || isNaN(Number(data.stock)) || Number(data.stock) < 0) errors.stock = 'Valid stock required';
    if (!data.supplier.trim()) errors.supplier = 'Supplier is required';
    return errors;
  };

  const openAdd = () => { setFormData(emptyForm); setFormErrors({}); setIsAddOpen(true); };
  const openEdit = (p) => {
    setFormData({ name: p.name, description: p.description, category: p.category, price: String(p.price), stock: String(p.stock), supplier: p.supplier });
    setFormErrors({});
    setEditProduct(p);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setProducts((prev) => [{
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      stock: Number(formData.stock),
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=80&h=80&fit=crop',
    }, ...prev]);
    setIsAddOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setProducts((prev) => prev.map((p) => p.id === editProduct.id
      ? { ...p, ...formData, price: Number(formData.price), stock: Number(formData.stock) }
      : p
    ));
    setEditProduct(null);
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const ProductForm = ({ onSubmit, submitLabel }) => (
    <form onSubmit={onSubmit} className="product-form" noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label>Product Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Moringa" className={formErrors.name ? 'input-error' : ''} />
          {formErrors.name && <span className="error-msg">{formErrors.name}</span>}
        </div>
        <div className="form-field">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="form-field full-width">
          <label>Description *</label>
          <input name="description" value={formData.description} onChange={handleChange} placeholder="Short description" className={formErrors.description ? 'input-error' : ''} />
          {formErrors.description && <span className="error-msg">{formErrors.description}</span>}
        </div>
        <div className="form-field">
          <label>Price ($) *</label>
          <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="e.g. 250" className={formErrors.price ? 'input-error' : ''} />
          {formErrors.price && <span className="error-msg">{formErrors.price}</span>}
        </div>
        <div className="form-field">
          <label>Stock *</label>
          <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="e.g. 100" className={formErrors.stock ? 'input-error' : ''} />
          {formErrors.stock && <span className="error-msg">{formErrors.stock}</span>}
        </div>
        <div className="form-field full-width">
          <label>Supplier *</label>
          <input name="supplier" value={formData.supplier} onChange={handleChange} placeholder="e.g. HealthCo Ltd" className={formErrors.supplier ? 'input-error' : ''} />
          {formErrors.supplier && <span className="error-msg">{formErrors.supplier}</span>}
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={() => { setIsAddOpen(false); setEditProduct(null); }}>Cancel</button>
        <button type="submit" className="btn-submit">{submitLabel}</button>
      </div>
    </form>
  );

  return (
    <div className="products-page">
      <div className="page-header">
        <h1 className="page-title">All Products</h1>
        <button className="btn-add-product" onClick={openAdd}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Product
        </button>
      </div>

      <div className="filters-section">
        <div className="search-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input className="search-input" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="category-filter" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
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
            {filtered.length === 0 ? (
              <tr><td colSpan={6} className="no-results">No products found</td></tr>
            ) : (
              filtered.map((product) => (
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
                  <td><span className="category-tag">{product.category}</span></td>
                  <td><strong>${product.price}</strong></td>
                  <td>
                    <span className={`stock-badge ${product.stock < 100 ? 'stock-low' : 'stock-good'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td>{product.supplier}</td>
                  <td>
                    <div className="action-btns">
                      <button className="action-btn action-view" onClick={() => setViewProduct(product)}>View</button>
                      <button className="action-btn action-edit" onClick={() => openEdit(product)}>Edit</button>
                      <button className="action-btn action-delete" onClick={() => setDeleteTarget(product)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="results-count">Showing <strong>{filtered.length}</strong> of <strong>{products.length}</strong> products</p>

      {/* View Modal */}
      <Modal isOpen={!!viewProduct} onClose={() => setViewProduct(null)} title="Product Details" size="medium">
        {viewProduct && (
          <div className="product-view-modal">
            <div className="view-product-header">
              <img src={viewProduct.image} alt={viewProduct.name} className="view-product-img" />
              <div>
                <h3 className="view-product-name">{viewProduct.name}</h3>
                <p className="view-product-desc">{viewProduct.description}</p>
                <span className="category-tag">{viewProduct.category}</span>
              </div>
            </div>
            <div className="view-detail-grid">
              <div className="view-detail"><span className="view-label">Price</span><span className="view-value price-highlight">${viewProduct.price}</span></div>
              <div className="view-detail"><span className="view-label">Stock</span><span className={`stock-badge ${viewProduct.stock < 100 ? 'stock-low' : 'stock-good'}`}>{viewProduct.stock} units</span></div>
              <div className="view-detail full-span"><span className="view-label">Supplier</span><span className="view-value">{viewProduct.supplier}</span></div>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Modal */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add New Product" size="large">
        <ProductForm onSubmit={handleAdd} submitLabel="Add Product" />
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={!!editProduct} onClose={() => setEditProduct(null)} title="Edit Product" size="large">
        <ProductForm onSubmit={handleEdit} submitLabel="Save Changes" />
      </Modal>

      {/* Delete Confirm */}
      <Modal isOpen={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Product" size="small">
        {deleteTarget && (
          <div className="delete-confirm">
            <div className="delete-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <p className="delete-message">Are you sure you want to delete <strong>{deleteTarget.name}</strong>? This action cannot be undone.</p>
            <div className="delete-actions">
              <button className="btn-cancel" onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className="btn-delete-confirm" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllProductsPage;

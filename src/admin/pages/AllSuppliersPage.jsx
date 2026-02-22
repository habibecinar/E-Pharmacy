import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './AllSuppliersPage.css';

const initialSuppliers = [
  { id: 1, name: 'HealthCo Ltd', address: '47 W 13th St, New York, NY 10011', company: 'HealthCo International', date: '2024-01-10', amount: 18700, status: 'active', email: 'contact@healthco.com', phone: '+1 212 555 0101', rating: 4.8 },
  { id: 2, name: 'BeautyCare Inc', address: '4140 Parker Rd, Allentown, PA 18101', company: 'BeautyCare Solutions Inc', date: '2024-01-22', amount: 42500, status: 'active', email: 'info@beautycare.com', phone: '+1 610 555 0202', rating: 4.5 },
  { id: 3, name: 'MedSupply Co', address: '2464 Royal Ln, Mesa, AZ 85201', company: 'MedSupply Corporation', date: '2024-02-05', amount: 31200, status: 'active', email: 'supply@medsupply.com', phone: '+1 480 555 0303', rating: 4.6 },
  { id: 4, name: 'FirstAid Plus', address: '3517 W Gray St, Tampa, FL 33609', company: 'FirstAid Plus Ltd', date: '2024-01-30', amount: 22100, status: 'inactive', email: 'support@firstaidplus.com', phone: '+1 813 555 0404', rating: 3.9 },
  { id: 5, name: 'PharmaGroup', address: '8502 Preston Rd, Inglewood, CA 90301', company: 'PharmaGroup International', date: '2024-02-14', amount: 57400, status: 'active', email: 'deals@pharmagroup.com', phone: '+1 310 555 0505', rating: 4.9 },
  { id: 6, name: 'VitaSource', address: '1901 Thornridge Cir, Syracuse, NY 13204', company: 'VitaSource Wellness', date: '2024-03-01', amount: 14900, status: 'active', email: 'hello@vitasource.com', phone: '+1 315 555 0606', rating: 4.3 },
];

const emptyForm = { name: '', company: '', address: '', email: '', phone: '', status: 'active', amount: '' };

const AllSuppliersPage = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewSupplier, setViewSupplier] = useState(null);
  const [editSupplier, setEditSupplier] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});

  const filtered = suppliers.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'all' || s.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Supplier name is required';
    if (!data.company.trim()) errors.company = 'Company is required';
    if (!data.address.trim()) errors.address = 'Address is required';
    if (!data.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Invalid email';
    if (!data.phone.trim()) errors.phone = 'Phone is required';
    if (!data.amount || isNaN(Number(data.amount))) errors.amount = 'Valid amount required';
    return errors;
  };

  const openAdd = () => { setFormData(emptyForm); setFormErrors({}); setIsAddOpen(true); };
  const openEdit = (s) => {
    setFormData({ name: s.name, company: s.company, address: s.address, email: s.email, phone: s.phone, status: s.status, amount: String(s.amount) });
    setFormErrors({});
    setEditSupplier(s);
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
    setSuppliers((prev) => [{ ...formData, id: Date.now(), amount: Number(formData.amount), date: new Date().toISOString().split('T')[0], rating: 4.0 }, ...prev]);
    setIsAddOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setSuppliers((prev) => prev.map((s) => s.id === editSupplier.id ? { ...s, ...formData, amount: Number(formData.amount) } : s));
    setEditSupplier(null);
  };

  const handleDelete = () => { setSuppliers((prev) => prev.filter((s) => s.id !== deleteTarget.id)); setDeleteTarget(null); };
  const getInitials = (name) => name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

  const SupplierForm = ({ onSubmit, submitLabel }) => (
    <form onSubmit={onSubmit} className="supplier-form" noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label>Supplier Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. HealthCo Ltd" className={formErrors.name ? 'input-error' : ''} />
          {formErrors.name && <span className="error-msg">{formErrors.name}</span>}
        </div>
        <div className="form-field">
          <label>Company *</label>
          <input name="company" value={formData.company} onChange={handleChange} placeholder="e.g. HealthCo International" className={formErrors.company ? 'input-error' : ''} />
          {formErrors.company && <span className="error-msg">{formErrors.company}</span>}
        </div>
        <div className="form-field full-width">
          <label>Address *</label>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Full address" className={formErrors.address ? 'input-error' : ''} />
          {formErrors.address && <span className="error-msg">{formErrors.address}</span>}
        </div>
        <div className="form-field">
          <label>Email *</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="contact@example.com" className={formErrors.email ? 'input-error' : ''} />
          {formErrors.email && <span className="error-msg">{formErrors.email}</span>}
        </div>
        <div className="form-field">
          <label>Phone *</label>
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 000 000 0000" className={formErrors.phone ? 'input-error' : ''} />
          {formErrors.phone && <span className="error-msg">{formErrors.phone}</span>}
        </div>
        <div className="form-field">
          <label>Supply Amount ($) *</label>
          <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="e.g. 25000" className={formErrors.amount ? 'input-error' : ''} />
          {formErrors.amount && <span className="error-msg">{formErrors.amount}</span>}
        </div>
        <div className="form-field">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={() => { setIsAddOpen(false); setEditSupplier(null); }}>Cancel</button>
        <button type="submit" className="btn-submit">{submitLabel}</button>
      </div>
    </form>
  );

  return (
    <div className="suppliers-page">
      <div className="page-header">
        <h1 className="page-title">All Suppliers</h1>
        <button className="btn-add-supplier" onClick={openAdd}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Supplier
        </button>
      </div>

      <div className="suppliers-summary">
        <div className="summary-card">
          <div className="summary-icon summary-total">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z"/><path d="M9 22V12H15V22"/></svg>
          </div>
          <div><p className="summary-label">Total Suppliers</p><p className="summary-value">{suppliers.length}</p></div>
        </div>
        <div className="summary-card">
          <div className="summary-icon summary-active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div><p className="summary-label">Active</p><p className="summary-value">{suppliers.filter((s) => s.status === 'active').length}</p></div>
        </div>
        <div className="summary-card">
          <div className="summary-icon summary-inactive">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          </div>
          <div><p className="summary-label">Inactive</p><p className="summary-value">{suppliers.filter((s) => s.status === 'inactive').length}</p></div>
        </div>
        <div className="summary-card">
          <div className="summary-icon summary-volume">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div><p className="summary-label">Total Supply Volume</p><p className="summary-value">${suppliers.reduce((a, s) => a + s.amount, 0).toLocaleString()}</p></div>
        </div>
      </div>

      <div className="filters-row">
        <div className="search-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input className="search-input" placeholder="Search by name, company or email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="status-filter-select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="suppliers-table-container">
        <table className="suppliers-table">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Address</th>
              <th>Company</th>
              <th>Date Added</th>
              <th>Supply Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} className="no-results">No suppliers found</td></tr>
            ) : (
              filtered.map((supplier) => (
                <tr key={supplier.id}>
                  <td>
                    <div className="supplier-cell">
                      <div className="supplier-avatar">{getInitials(supplier.name)}</div>
                      <div><p className="supplier-name">{supplier.name}</p><p className="supplier-email">{supplier.email}</p></div>
                    </div>
                  </td>
                  <td className="supplier-address">{supplier.address}</td>
                  <td>{supplier.company}</td>
                  <td>{new Date(supplier.date).toLocaleDateString()}</td>
                  <td className="supply-amount">${supplier.amount.toLocaleString()}</td>
                  <td><span className={`status-badge status-${supplier.status}`}>{supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)}</span></td>
                  <td>
                    <div className="action-btns">
                      <button className="action-btn action-view" onClick={() => setViewSupplier(supplier)}>View</button>
                      <button className="action-btn action-edit" onClick={() => openEdit(supplier)}>Edit</button>
                      <button className="action-btn action-delete" onClick={() => setDeleteTarget(supplier)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="results-count">Showing <strong>{filtered.length}</strong> of <strong>{suppliers.length}</strong> suppliers</p>

      {/* View Modal */}
      <Modal isOpen={!!viewSupplier} onClose={() => setViewSupplier(null)} title="Supplier Details" size="medium">
        {viewSupplier && (
          <div className="supplier-view-modal">
            <div className="view-avatar-row">
              <div className="view-avatar">{getInitials(viewSupplier.name)}</div>
              <div>
                <h2 className="view-name">{viewSupplier.name}</h2>
                <p className="view-company">{viewSupplier.company}</p>
                <span className={`status-badge status-${viewSupplier.status}`}>{viewSupplier.status.charAt(0).toUpperCase() + viewSupplier.status.slice(1)}</span>
              </div>
            </div>
            <div className="view-detail-grid">
              <div className="view-detail"><span className="view-label">Email</span><span className="view-value">{viewSupplier.email}</span></div>
              <div className="view-detail"><span className="view-label">Phone</span><span className="view-value">{viewSupplier.phone}</span></div>
              <div className="view-detail full-span"><span className="view-label">Address</span><span className="view-value">{viewSupplier.address}</span></div>
              <div className="view-detail"><span className="view-label">Date Added</span><span className="view-value">{new Date(viewSupplier.date).toLocaleDateString()}</span></div>
              <div className="view-detail"><span className="view-label">Supply Volume</span><span className="view-value supply-highlight">${viewSupplier.amount.toLocaleString()}</span></div>
              <div className="view-detail">
                <span className="view-label">Rating</span>
                <span className="view-value">{'★'.repeat(Math.round(viewSupplier.rating))}{'☆'.repeat(5 - Math.round(viewSupplier.rating))}<span className="rating-num"> {viewSupplier.rating}</span></span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Modal */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add New Supplier" size="large">
        <SupplierForm onSubmit={handleAdd} submitLabel="Add Supplier" />
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={!!editSupplier} onClose={() => setEditSupplier(null)} title="Edit Supplier" size="large">
        <SupplierForm onSubmit={handleEdit} submitLabel="Save Changes" />
      </Modal>

      {/* Delete Confirm Modal */}
      <Modal isOpen={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Supplier" size="small">
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

export default AllSuppliersPage;

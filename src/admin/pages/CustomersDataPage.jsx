import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './CustomersDataPage.css';

const initialCustomers = [
  { id: 1, name: 'Alex Shatov', email: 'alexshatov@gmail.com', phone: '+1 234 567 8900', address: '123 Main St, New York, NY 10001', spent: 2890.66, orders: 15, joinDate: '2024-01-15' },
  { id: 2, name: 'Philip Harbach', email: 'philip.h@gmail.com', phone: '+1 234 567 8901', address: '456 Oak Ave, Los Angeles, CA 90001', spent: 2767.04, orders: 12, joinDate: '2024-02-20' },
  { id: 3, name: 'Mirko Fisuk', email: 'mirkofisuk@gmail.com', phone: '+1 234 567 8902', address: '789 Pine Rd, Chicago, IL 60601', spent: 2996.00, orders: 18, joinDate: '2024-01-10' },
  { id: 4, name: 'Olga Semklo', email: 'olga.s@cool.design', phone: '+1 234 567 8903', address: '321 Elm St, Houston, TX 77001', spent: 1220.66, orders: 8, joinDate: '2024-03-05' },
  { id: 5, name: 'Burak Long', email: 'longburak@gmail.com', phone: '+1 234 567 8904', address: '654 Maple Dr, Phoenix, AZ 85001', spent: 1890.66, orders: 10, joinDate: '2024-02-12' },
  { id: 6, name: 'Sarah Williams', email: 'sarah.w@gmail.com', phone: '+1 234 567 8905', address: '987 Cedar Ln, Dallas, TX 75201', spent: 3450.00, orders: 22, joinDate: '2024-01-05' },
  { id: 7, name: 'James Parker', email: 'jparker@example.com', phone: '+1 234 567 8906', address: '111 Birch Blvd, San Diego, CA 92101', spent: 890.50, orders: 5, joinDate: '2024-03-18' },
];

const getInitials = (name) => name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const CustomersDataPage = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = () => {
    setCustomers((prev) => prev.filter((c) => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1 className="page-title">Customers Data</h1>
        <button className="btn-add-customer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Customer
        </button>
      </div>

      <div className="search-section">
        <div className="search-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            className="search-input"
            placeholder="Search customers by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total Spent</th>
              <th>Orders</th>
              <th>Join Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={6} className="no-results">No customers found</td></tr>
            ) : (
              filtered.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="customer-cell">
                      <div className="customer-avatar">{getInitials(customer.name)}</div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600, color: '#1a1a1a', fontSize: 14 }}>{customer.name}</p>
                        <p style={{ margin: 0, fontSize: 12, color: '#999' }}>{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{customer.phone}</td>
                  <td><strong>${customer.spent.toFixed(2)}</strong></td>
                  <td>{customer.orders}</td>
                  <td>{new Date(customer.joinDate).toLocaleDateString()}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action btn-view" onClick={() => setSelectedCustomer(customer)}>View</button>
                      <button className="btn-action btn-delete" onClick={() => setDeleteTarget(customer)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="results-count">Showing <strong>{filtered.length}</strong> of <strong>{customers.length}</strong> customers</p>

      {/* View Modal */}
      <Modal isOpen={!!selectedCustomer} onClose={() => setSelectedCustomer(null)} title="Customer Details" size="medium">
        {selectedCustomer && (
          <div className="customer-detail-modal">
            <div className="modal-customer-header">
              <div className="modal-avatar">{getInitials(selectedCustomer.name)}</div>
              <div>
                <h3 className="modal-customer-name">{selectedCustomer.name}</h3>
                <p className="modal-customer-email">{selectedCustomer.email}</p>
              </div>
            </div>
            <div className="detail-grid">
              <div className="detail-field">
                <label>Phone</label>
                <p>{selectedCustomer.phone}</p>
              </div>
              <div className="detail-field">
                <label>Total Spent</label>
                <p className="spent-value">${selectedCustomer.spent.toFixed(2)}</p>
              </div>
              <div className="detail-field">
                <label>Total Orders</label>
                <p>{selectedCustomer.orders}</p>
              </div>
              <div className="detail-field">
                <label>Member Since</label>
                <p>{new Date(selectedCustomer.joinDate).toLocaleDateString()}</p>
              </div>
              <div className="detail-field full-width">
                <label>Address</label>
                <p>{selectedCustomer.address}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirm Modal */}
      <Modal isOpen={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Customer" size="small">
        {deleteTarget && (
          <div className="delete-confirm">
            <div>
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

export default CustomersDataPage;

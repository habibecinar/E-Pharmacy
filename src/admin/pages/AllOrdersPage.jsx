import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './AllOrdersPage.css';

const AllOrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock data
  const orders = [
    {
      id: 'ORD-001',
      customerName: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      items: 3,
      total: 890.66,
      status: 'delivered',
      date: '2024-02-15',
      address: '123 Main St, New York, NY 10001',
      products: [
        { name: 'Moringa', qty: 2, price: 470 },
        { name: 'Dapsone', qty: 1, price: 520 }
      ]
    },
    {
      id: 'ORD-002',
      customerName: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      items: 2,
      total: 1267.04,
      status: 'pending',
      date: '2024-02-16',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      products: [
        { name: 'Helminthos', qty: 1, price: 470 },
        { name: 'Alcohol', qty: 1, price: 748 }
      ]
    },
    {
      id: 'ORD-003',
      customerName: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      items: 1,
      total: 582.00,
      status: 'processing',
      date: '2024-02-16',
      address: '789 Pine Rd, Chicago, IL 60601',
      products: [
        { name: 'Hydrochloride', qty: 1, price: 582 }
      ]
    },
    {
      id: 'ORD-004',
      customerName: 'Olga Semklo',
      email: 'olga.s@cool.design',
      items: 4,
      total: 1520.66,
      status: 'cancelled',
      date: '2024-02-14',
      address: '321 Elm St, Houston, TX 77001',
      products: [
        { name: 'Moringa', qty: 2, price: 470 },
        { name: 'Hydrochloride', qty: 1, price: 582 }
      ]
    },
    {
      id: 'ORD-005',
      customerName: 'Burak Long',
      email: 'longburak@gmail.com',
      items: 2,
      total: 990.00,
      status: 'delivered',
      date: '2024-02-13',
      address: '654 Maple Dr, Phoenix, AZ 85001',
      products: [
        { name: 'Dapsone', qty: 1, price: 520 },
        { name: 'Helminthos', qty: 1, price: 470 }
      ]
    }
  ];

  const statusOptions = ['all', 'pending', 'processing', 'delivered', 'cancelled'];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeClass = (status) => {
    const classes = {
      pending: 'status-pending',
      processing: 'status-processing',
      delivered: 'status-delivered',
      cancelled: 'status-cancelled'
    };
    return classes[status] || '';
  };

  return (
    <div className="orders-page">
      <div className="page-header">
        <h1 className="page-title">All Orders</h1>
        <button className="btn-add-order">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Order
        </button>
      </div>

      <div className="filters-section">
        <div className="search-wrapper">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            className="search-input"
            placeholder="Search by order ID or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          {statusOptions.map(status => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td><strong>{order.id}</strong></td>
                <td>
                  <div className="customer-info">
                    <p className="customer-name">{order.customerName}</p>
                    <p className="customer-email">{order.email}</p>
                  </div>
                </td>
                <td>{order.items}</td>
                <td>৳{order.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${getStatusBadgeClass(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-action btn-view"
                      onClick={() => setSelectedOrder(order)}
                    >
                      View
                    </button>
                    <button className="btn-action btn-edit">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal */}
      <Modal
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={`Order Details - ${selectedOrder?.id}`}
        size="large"
      >
        {selectedOrder && (
          <div className="order-detail-modal">
            <div className="order-header">
              <div className="detail-item">
                <label>Order ID</label>
                <p>{selectedOrder.id}</p>
              </div>
              <div className="detail-item">
                <label>Status</label>
                <span className={`status-badge ${getStatusBadgeClass(selectedOrder.status)}`}>
                  {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                </span>
              </div>
              <div className="detail-item">
                <label>Order Date</label>
                <p>{new Date(selectedOrder.date).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="customer-section">
              <h3>Customer Information</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <label>Name</label>
                  <p>{selectedOrder.customerName}</p>
                </div>
                <div className="detail-item">
                  <label>Email</label>
                  <p>{selectedOrder.email}</p>
                </div>
                <div className="detail-item full-width">
                  <label>Delivery Address</label>
                  <p>{selectedOrder.address}</p>
                </div>
              </div>
            </div>

            <div className="products-section">
              <h3>Order Items</h3>
              <table className="order-items-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.qty}</td>
                      <td>৳{product.price}</td>
                      <td>৳{(product.qty * product.price).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td colSpan="3"><strong>Total</strong></td>
                    <td><strong>৳{selectedOrder.total.toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllOrdersPage;

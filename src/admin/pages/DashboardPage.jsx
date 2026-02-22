import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './DashboardPage.css';

const DashboardPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const stats = {
    allProducts: 8430,
    allSuppliers: 211,
    allCustomers: 140,
  };

  const recentCustomers = [
    { id: 1, name: 'Alex Shatov', email: 'alexshatov@gmail.com', spent: 2890.66, orders: 15, address: '123 Main St, New York, NY 10001', phone: '+1 212 555 0101', joinDate: '2024-01-15' },
    { id: 2, name: 'Philip Harbach', email: 'philip.h@gmail.com', spent: 2767.04, orders: 12, address: '456 Oak Ave, Los Angeles, CA 90001', phone: '+1 213 555 0202', joinDate: '2024-02-20' },
    { id: 3, name: 'Mirko Fisuk', email: 'mirkofisuk@gmail.com', spent: 2996.00, orders: 18, address: '789 Pine Rd, Chicago, IL 60601', phone: '+1 312 555 0303', joinDate: '2024-01-10' },
    { id: 4, name: 'Olga Semklo', email: 'olga.s@cool.design', spent: 1220.66, orders: 8, address: '321 Elm St, Houston, TX 77001', phone: '+1 713 555 0404', joinDate: '2024-03-05' },
    { id: 5, name: 'Burak Long', email: 'longburak@gmail.com', spent: 1890.66, orders: 10, address: '654 Maple Dr, Phoenix, AZ 85001', phone: '+1 602 555 0505', joinDate: '2024-02-12' },
  ];

  const incomeExpenses = [
    { type: 'expense', label: 'Expense', description: 'Qonto billing', amount: -49.88, date: 'Today' },
    { type: 'income', label: 'Income', description: 'Cruip.com Market Ltd 70 Wilson St London', amount: 249.88, date: 'Today' },
    { type: 'income', label: 'Income', description: 'Notion Labs Inc', amount: 99.99, date: 'Yesterday' },
    { type: 'income', label: 'Income', description: 'Market Cap Ltd', amount: 1200.88, date: '2 days ago' },
    { type: 'error', label: 'Declined', description: 'App.com Market Ltd 70 Wilson St London', amount: -99.99, date: '3 days ago' },
    { type: 'expense', label: 'Expense', description: 'App.com Market Ltd subscription', amount: -49.88, date: '4 days ago' },
  ];

  // Revenue chart data (monthly)
  const revenueData = [
    { month: 'Jan', value: 38000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 44000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 73000 },
    { month: 'Jul', value: 68000 },
    { month: 'Aug', value: 80000 },
    { month: 'Sep', value: 72000 },
    { month: 'Oct', value: 88000 },
    { month: 'Nov', value: 95000 },
    { month: 'Dec', value: 105000 },
  ];

  const maxRevenue = Math.max(...revenueData.map((d) => d.value));
  const totalRevenue = revenueData.reduce((acc, d) => acc + d.value, 0);

  const getInitials = (name) =>
    name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Statistics Cards */}
      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-products">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#59B17A" strokeWidth="2">
              <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"/>
              <path d="M16 21V5C16 4.47 15.79 3.96 15.41 3.59C15.04 3.21 14.53 3 14 3H10C9.47 3 8.96 3.21 8.59 3.59C8.21 3.96 8 4.47 8 5V21"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All products</span>
            <span className="stat-value">{stats.allProducts.toLocaleString()}</span>
            <span className="stat-change stat-up">↑ 12% this month</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-suppliers">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#59B17A" strokeWidth="2">
              <path d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z"/>
              <path d="M9 22V12H15V22"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All suppliers</span>
            <span className="stat-value">{stats.allSuppliers}</span>
            <span className="stat-change stat-up">↑ 3 new this month</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-customers">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#59B17A" strokeWidth="2">
              <path d="M17 21V19C17 17.9 16.58 16.92 15.83 16.17C15.08 15.42 14.06 15 13 15H5C3.94 15 2.92 15.42 2.17 16.17C1.42 16.92 1 17.9 1 19V21"/>
              <path d="M9 11C11.21 11 13 9.21 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7C5 9.21 6.79 11 9 11Z"/>
              <path d="M23 21V19C23 17.9 22.58 16.92 21.83 16.17C21.08 15.42 20.06 15 19 15H18"/>
              <path d="M16 3.13C16.86 3.35 17.62 3.85 18.17 4.55C18.71 5.25 19.01 6.12 19.01 7.01C19.01 7.89 18.71 8.76 18.17 9.46C17.62 10.16 16.86 10.66 16 10.88"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All customers</span>
            <span className="stat-value">{stats.allCustomers}</span>
            <span className="stat-change stat-up">↑ 8 new this month</span>
          </div>
        </div>

        <div className="dashboard-stat-card stat-card-revenue">
          <div className="stat-icon stat-icon-revenue">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#59B17A" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">Total Revenue</span>
            <span className="stat-value">${(totalRevenue / 1000).toFixed(0)}K</span>
            <span className="stat-change stat-up">↑ 18% vs last year</span>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="dashboard-chart-section">
        <div className="chart-header">
          <div>
            <h2 className="section-title">Revenue Overview</h2>
            <p className="chart-subtitle">Monthly revenue for {new Date().getFullYear()}</p>
          </div>
          <div className="chart-total">
            <span className="chart-total-label">Annual Total</span>
            <span className="chart-total-value">${totalRevenue.toLocaleString()}</span>
          </div>
        </div>
        <div className="bar-chart">
          {revenueData.map((d) => {
            const heightPct = (d.value / maxRevenue) * 100;
            return (
              <div key={d.month} className="bar-column">
                <div className="bar-value-label">${(d.value / 1000).toFixed(0)}K</div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ height: `${heightPct}%` }}
                    title={`${d.month}: $${d.value.toLocaleString()}`}
                  />
                </div>
                <div className="bar-month">{d.month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tables Section */}
      <div className="dashboard-tables">
        {/* Recent Customers */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Recent Customers</h2>
            <a href="/admin/customers" className="section-link">View all →</a>
          </div>
          <div className="table-wrapper">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Spent</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="customer-cell">
                        <div className="customer-initials">{getInitials(customer.name)}</div>
                        <span>{customer.name}</span>
                      </div>
                    </td>
                    <td className="email-cell">{customer.email}</td>
                    <td><strong>${customer.spent.toFixed(2)}</strong></td>
                    <td>
                      <button className="btn-view" onClick={() => setSelectedCustomer(customer)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Income/Expenses */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Income / Expenses</h2>
            <div className="ie-summary">
              <span className="ie-total-income">
                +${incomeExpenses.filter(i => i.amount > 0).reduce((a, i) => a + i.amount, 0).toFixed(2)}
              </span>
              <span className="ie-total-expense">
                -${Math.abs(incomeExpenses.filter(i => i.amount < 0).reduce((a, i) => a + i.amount, 0)).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="income-expenses-wrapper">
            {incomeExpenses.map((item, index) => (
              <div key={index} className="ie-item">
                <div className="ie-info">
                  <span className={`ie-badge ie-badge-${item.type}`}>{item.label}</span>
                  <div className="ie-details">
                    <span className="ie-description">{item.description}</span>
                    <span className="ie-date">{item.date}</span>
                  </div>
                </div>
                <span className={`ie-amount ${item.amount < 0 ? 'negative' : 'positive'}`}>
                  {item.amount > 0 ? '+' : ''}${Math.abs(item.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Detail Modal */}
      <Modal
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title="Customer Details"
        size="medium"
      >
        {selectedCustomer && (
          <div className="customer-details-modal">
            <div className="modal-customer-header">
              <div className="modal-customer-avatar">{getInitials(selectedCustomer.name)}</div>
              <div>
                <h3 className="modal-customer-name">{selectedCustomer.name}</h3>
                <p className="modal-customer-email">{selectedCustomer.email}</p>
              </div>
            </div>
            <div className="customer-detail-grid">
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{selectedCustomer.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Spent</span>
                <span className="detail-value spent-highlight">${selectedCustomer.spent.toFixed(2)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Orders</span>
                <span className="detail-value">{selectedCustomer.orders}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Member Since</span>
                <span className="detail-value">{new Date(selectedCustomer.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
                <span className="detail-label">Address</span>
                <span className="detail-value">{selectedCustomer.address}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DashboardPage;

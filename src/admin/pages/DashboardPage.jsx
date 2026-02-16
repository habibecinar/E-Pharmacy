import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './DashboardPage.css';

const DashboardPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Mock data - would come from API in production
  const stats = {
    allProducts: 8430,
    allSuppliers: 211,
    allCustomers: 140
  };

  const recentCustomers = [
    { id: 1, name: 'Alex Shatov', email: 'alexshatov@gmail.com', spent: 2890.66, address: '123 Main St, City' },
    { id: 2, name: 'Philip Harbach', email: 'philip.h@gmail.com', spent: 2767.04, address: '456 Oak Ave, Town' },
    { id: 3, name: 'Mirko Fisuk', email: 'mirkofisuk@gmail.com', spent: 2996.00, address: '789 Pine Rd, Village' },
    { id: 4, name: 'Olga Semklo', email: 'olga.s@cool.design', spent: 1220.66, address: '321 Elm St, City' },
    { id: 5, name: 'Burak Long', email: 'longburak@gmail.com', spent: 1890.66, address: '654 Maple Dr, Town' }
  ];

  const incomeExpenses = [
    { type: 'expense', label: 'Expense', description: 'Qonto billing', amount: -49.88, date: 'Today' },
    { type: 'income', label: 'Income', description: 'Cruip.com Market Ltd 70 Wilson St London', amount: 249.88, date: 'Today' },
    { type: 'income', label: 'Income', description: 'Notion Labs Inc', amount: 99.99, date: 'Yesterday' },
    { type: 'income', label: 'Income', description: 'Market Cap Ltd', amount: 1200.88, date: '2 days ago' },
    { type: 'error', label: 'Error', description: 'App.com Market Ltd 70 Wilson St London', amount: 99.99, date: '3 days ago' },
    { type: 'expense', label: 'Expense', description: 'App.com Market Ltd 70 Wilson St London', amount: -49.88, date: '4 days ago' }
  ];

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Statistics Cards */}
      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-products">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#59B17A" strokeWidth="2"/>
              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#59B17A" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All products</span>
            <span className="stat-value">{stats.allProducts.toLocaleString()}</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-suppliers">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#59B17A" strokeWidth="2"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#59B17A" strokeWidth="2"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#59B17A" strokeWidth="2"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#59B17A" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All suppliers</span>
            <span className="stat-value">{stats.allSuppliers}</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="stat-icon stat-icon-customers">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#59B17A" strokeWidth="2"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#59B17A" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">All customers</span>
            <span className="stat-value">{stats.allCustomers}</span>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="dashboard-tables">
        {/* Recent Customers */}
        <div className="dashboard-section">
          <h2 className="section-title">Recent Customers</h2>
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
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>৳{customer.spent.toFixed(2)}</td>
                    <td>
                      <button 
                        className="btn-view"
                        onClick={() => setSelectedCustomer(customer)}
                      >
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
          <h2 className="section-title">Income / Expenses</h2>
          <div className="income-expenses-wrapper">
            {incomeExpenses.map((item, index) => (
              <div key={index} className="ie-item">
                <div className="ie-info">
                  <span className={`ie-badge ie-badge-${item.type}`}>
                    {item.label}
                  </span>
                  <div className="ie-details">
                    <span className="ie-description">{item.description}</span>
                    <span className="ie-date">{item.date}</span>
                  </div>
                </div>
                <span className={`ie-amount ${item.amount < 0 ? 'negative' : 'positive'}`}>
                  {item.amount > 0 ? '+' : ''}৳{Math.abs(item.amount).toFixed(2)}
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
            <div className="customer-detail-grid">
              <div className="detail-item">
                <span className="detail-label">Name</span>
                <span className="detail-value">{selectedCustomer.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{selectedCustomer.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Spent</span>
                <span className="detail-value">৳{selectedCustomer.spent.toFixed(2)}</span>
              </div>
              <div className="detail-item">
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

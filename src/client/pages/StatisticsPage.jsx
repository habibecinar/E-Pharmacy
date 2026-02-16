import { useState } from 'react';
import Modal from '../../shared/components/Modal/Modal';
import './StatisticsPage.css';

const StatisticsPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Mock data - would come from API in production
  const stats = {
    allProducts: 8430,
    allSuppliers: 211,
    allCustomers: 140
  };

  const recentCustomers = [
    {
      id: 1,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      spent: 2890.66,
      purchases: [
        { name: 'Vitamin C Medicine', description: 'Antioxidant Aid for Heart Health', price: 90.00, image: '/images/products/vitamin-c.jpg' },
        { name: 'Stomach Medicine', description: 'Soothes Indigestion, Eases Stomach Pain', price: 32.00, image: '/images/products/stomach-med.jpg' },
        { name: 'Antibiotic', description: 'Prebilaticated Metal', price: 748.00, image: '/images/products/antibiotic.jpg' }
      ]
    },
    {
      id: 2,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      spent: 2767.04,
      purchases: []
    },
    {
      id: 3,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      spent: 2996.00,
      purchases: []
    },
    {
      id: 4,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      spent: 1220.66,
      purchases: []
    },
    {
      id: 5,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      spent: 1890.66,
      purchases: []
    }
  ];

  const incomeExpenses = [
    { type: 'expense', label: 'Expense', description: 'Qonto billing', amount: -49.88 },
    { type: 'income', label: 'Income', description: 'Cruip.com Market Ltd 70 Wilson St London', amount: 249.88 },
    { type: 'income', label: 'Income', description: 'Notion Labs Inc', amount: 99.99 },
    { type: 'income', label: 'Income', description: 'Market Cap Ltd', amount: 1200.88 },
    { type: 'error', label: 'Error', description: 'App.com Market Ltd 70 Wilson St London', amount: 99.99 },
    { type: 'expense', label: 'Expense', description: 'App.com Market Ltd 70 Wilson St London', amount: -49.88 }
  ];

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="statistics-page">
      <div className="container">
        <h1 className="statistics-title">Statistics</h1>

        {/* Statistics Cards */}
        <div className="statistics-cards">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">All products</span>
              <span className="stat-value">{stats.allProducts.toLocaleString()}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">All suppliers</span>
              <span className="stat-value">{stats.allSuppliers}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#59B17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">All customers</span>
              <span className="stat-value">{stats.allCustomers}</span>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="statistics-tables">
          {/* Recent Customers */}
          <div className="statistics-section">
            <h2 className="section-title">Recent Customers</h2>
            <div className="table-container">
              <table className="statistics-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Spent</th>
                    <th>Medicine</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.spent.toFixed(2)}</td>
                      <td>
                        <button 
                          className="btn-view"
                          onClick={() => handleViewCustomer(customer)}
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
          <div className="statistics-section">
            <h2 className="section-title">Income/Expenses</h2>
            <div className="income-expenses-header">
              <span className="ie-label">Today</span>
            </div>
            <div className="income-expenses-list">
              {incomeExpenses.map((item, index) => (
                <div key={index} className="income-expense-item">
                  <div className="ie-left">
                    <span className={`ie-badge ie-badge--${item.type}`}>
                      {item.label}
                    </span>
                    <span className="ie-description">{item.description}</span>
                  </div>
                  <span className={`ie-amount ${item.amount < 0 ? 'ie-amount--negative' : 'ie-amount--positive'}`}>
                    {item.amount > 0 ? '+' : ''}{item.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details Modal */}
      <Modal
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title="The client's goods"
        size="medium"
      >
        {selectedCustomer && (
          <div className="customer-details">
            <div className="customer-info">
              <div className="customer-info-item">
                <span className="customer-info-label">Name</span>
                <span className="customer-info-value">{selectedCustomer.name}</span>
              </div>
              <div className="customer-info-item">
                <span className="customer-info-label">Email</span>
                <span className="customer-info-value">{selectedCustomer.email}</span>
              </div>
              <div className="customer-info-item">
                <span className="customer-info-label">Spent</span>
                <span className="customer-info-value">{selectedCustomer.spent.toFixed(2)}</span>
              </div>
            </div>

            <div className="customer-purchases">
              {selectedCustomer.purchases.length > 0 ? (
                selectedCustomer.purchases.map((purchase, index) => (
                  <div key={index} className="purchase-item">
                    <img 
                      src={purchase.image} 
                      alt={purchase.name}
                      className="purchase-image"
                    />
                    <div className="purchase-info">
                      <h4 className="purchase-name">{purchase.name}</h4>
                      <p className="purchase-description">{purchase.description}</p>
                      <span className="purchase-price">৳ {purchase.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-purchases">No purchases yet</p>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StatisticsPage;

import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h2 className="page-title">Dashboard</h2>
      
      <div className="dashboard-grid">
        <div className="stats-section">
          <h3>Statistics</h3>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <p className="stat-label">All Products</p>
                <p className="stat-value">--</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <div className="stat-content">
                <p className="stat-label">All Suppliers</p>
                <p className="stat-value">--</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <p className="stat-label">All Customers</p>
                <p className="stat-value">--</p>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-customers">
          <h3>Recent Customers</h3>
          <p>Customer list will be displayed here</p>
        </div>

        <div className="income-expenses">
          <h3>Income / Expenses</h3>
          <p>Financial data will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

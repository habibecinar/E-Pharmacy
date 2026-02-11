import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1 style={{ color: '#4CAF50', fontSize: '48px', marginTop: '50px' }}>
          Welcome to E-Pharmacy! 💊
        </h1>
        <p style={{ fontSize: '20px', marginTop: '20px', color: '#666' }}>
          Your trusted online pharmacy platform
        </p>
        
        <div style={{ marginTop: '40px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>🚀 Project Status</h2>
          <ul style={{ marginTop: '20px', fontSize: '16px', lineHeight: '2' }}>
            <li>✅ React + Vite Setup</li>
            <li>✅ Routing Configured</li>
            <li>✅ Authentication Context</li>
            <li>✅ UI Components</li>
            <li>✅ Logo Integrated</li>
            <li>✅ Form Libraries Added</li>
            <li>🔨 Pages Under Construction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

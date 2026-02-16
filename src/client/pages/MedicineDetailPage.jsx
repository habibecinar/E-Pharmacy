import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MedicineDetailPage.css';

const MedicineDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  // Mock data - would come from API in production
  const product = {
    id: 1,
    name: 'Moringa',
    description: 'Brain Toning / Hujarat',
    price: 470,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    fullDescription: "I've been using Moringa powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!",
    category: 'Brain Toning',
    inStock: true,
    reviews: [
      {
        id: 1,
        author: 'Leroy Jenkins',
        date: '2 days ago',
        rating: 5,
        text: "I've been using Moringa powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!"
      },
      {
        id: 2,
        author: 'Leroy Jenkins',
        date: '2 days ago',
        rating: 5,
        text: "I tried Moringa capsules as part of my wellness regimen, and I've been pleasantly surprised by the results. My skin looks healthier, and I've noticed an improvement in my digestion. A natural and effective supplement!"
      },
      {
        id: 3,
        author: 'Leroy Jenkins',
        date: '2 days ago',
        rating: 5,
        text: "I added Moringa oil to my skincare routine, and the results are amazing. My skin feels smoother and more nourished. I was skeptical at first, but now I'm a firm believer in its benefits."
      }
    ]
  };

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  return (
    <div className="medicine-detail-page">
      <div className="container">
        <div className="product-detail-container">
          {/* Product Image */}
          <div className="product-image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-main-image"
            />
            <button className="btn-add-to-shop">Add to shop</button>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">৳{product.price}</p>

            {/* Tabs */}
            <div className="product-tabs">
              <button 
                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="description-content">
                  <p>{product.fullDescription}</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="reviews-content">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <h4 className="review-author">{review.author}</h4>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  ))}

                  {/* Pagination */}
                  <div className="pagination">
                    <button className="pagination-btn" disabled={currentPage === 1}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M11 19L4 12L11 5M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="pagination-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <button className="pagination-number active">1</button>
                    <button className="pagination-number">2</button>
                    <button className="pagination-number">3</button>
                    <span className="pagination-dots">...</span>

                    <button className="pagination-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="pagination-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M13 5L20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailPage;

# E-Pharmacy 💊

A comprehensive, modern online pharmacy platform with both customer-facing and admin interfaces. Built with React and Vite, featuring a beautiful, responsive UI that matches professional design mockups.

## ✨ Features

### 🛍️ Customer Features
- **Medicine Catalog** - Browse medicines with advanced search and category filters
- **Shop Creation** - Create and manage your pharmacy shop with a comprehensive form
- **Product Details** - View detailed product information with reviews and ratings
- **Statistics Dashboard** - Track customer data and income/expenses
- **Nearby Stores** - Discover pharmacy stores in your area
- **User Authentication** - Secure register/login with form validation
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

### 🎛️ Admin Features
- **Dashboard** - Real-time statistics with customer and financial data
- **Order Management** - Track and manage all orders
- **Product Management** - Full CRUD operations for medicines and products
- **Supplier Management** - Manage supplier relationships and inventory
- **Customer Data** - View customer details, purchase history, and analytics
- **Modern UI** - Clean, intuitive interface with modals and tables

## 🚀 Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **React Router v6** - Client-side routing with protected routes
- **React Hook Form** - Performant form management
- **Yup** - Schema-based form validation
- **Axios** - Promise-based HTTP client
- **React Hot Toast** - Beautiful notifications
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd E-Pharmacy
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env.example .env
```

Edit `.env` and set your API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

5. **Build for production:**
```bash
npm run build
```

6. **Preview production build:**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── admin/                  # Admin dashboard
│   ├── components/         # Admin-specific components
│   │   ├── Header/         # Admin navigation header
│   │   └── Sidebar/        # Admin sidebar (if needed)
│   ├── pages/              # Admin pages
│   │   ├── DashboardPage.jsx        # Main dashboard with stats
│   │   ├── AllOrdersPage.jsx        # Order management
│   │   ├── AllProductsPage.jsx      # Product CRUD
│   │   ├── AllSuppliersPage.jsx     # Supplier management
│   │   └── CustomersDataPage.jsx    # Customer data
│   └── layouts/            # Admin layout wrapper
├── client/                 # Client application
│   ├── components/         # Client components
│   │   ├── Header/         # Client navigation
│   │   └── Footer/         # Site footer
│   ├── pages/              # Client pages
│   │   ├── HomePage.jsx              # Landing page
│   │   ├── MedicinePage.jsx          # Product catalog
│   │   ├── MedicineDetailPage.jsx    # Product details
│   │   ├── MedicineStorePage.jsx     # Shop creation form
│   │   ├── StatisticsPage.jsx        # Stats dashboard
│   │   ├── LoginPage.jsx             # User login
│   │   └── RegisterPage.jsx          # User registration
│   └── layouts/            # Client layout wrapper
├── shared/                 # Shared components
│   ├── components/         # Reusable UI components
│   │   ├── Button/         # Custom button component
│   │   ├── Input/          # Form input component
│   │   ├── Modal/          # Modal dialog
│   │   └── Loader/         # Loading spinner
│   └── utils/              # Utility functions
├── contexts/               # React contexts
│   └── AuthContext.jsx     # Authentication state
├── services/               # API services
│   ├── authService.js      # Authentication API
│   └── api.js              # Axios instance
├── utils/                  # Helper functions
│   └── formValidation.js   # Yup schemas
├── hooks/                  # Custom React hooks
├── styles/                 # Global styles
│   └── variables.css       # CSS custom properties
└── routes.jsx              # Application routing

public/
└── images/                 # Static images
    ├── logo/               # Brand logos
    ├── products/           # Product images
    └── pharmacies/         # Pharmacy store images
```

## 🎨 Key Pages Overview

### Client Pages

1. **Home** (`/home`) - Landing page with hero section
2. **Medicine** (`/medicine`) - Product catalog with filters
3. **Medicine Detail** (`/medicine/:id`) - Product details with reviews
4. **Shop** (`/medicine-store`) - Create your pharmacy shop
5. **Statistics** (`/statistics`) - Customer and financial stats
6. **Login/Register** - User authentication

### Admin Pages

1. **Dashboard** (`/admin/dashboard`) - Overview with statistics
2. **All Products** (`/admin/products`) - Product management
3. **All Orders** (`/admin/orders`) - Order tracking
4. **All Suppliers** (`/admin/suppliers`) - Supplier management
5. **Customers Data** (`/admin/customers`) - Customer analytics

## 🔒 Authentication

The app includes protected routes and authentication context:

- **Public Routes** - Home, Medicine, Login, Register
- **Protected Routes** - Cart, Profile (require login)
- **Admin Routes** - Admin panel (require admin role)

## 🎭 Mock Data

Currently using mock data for demonstration. Key datasets:

- **Products** - 8+ medicine items with real images
- **Customers** - 5 sample customers with purchase data
- **Income/Expenses** - Financial transaction records
- **Statistics** - Aggregated data for dashboards

## 📱 Responsive Breakpoints

```css
/* Mobile First */
- Mobile: 320px+ (base)
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1440px+
```

## 🎨 Design System

### Colors
- **Primary**: #59B17A (Green)
- **Secondary**: #1a1a1a (Dark)
- **Background**: #ffffff, #f8f8f8
- **Text**: #1a1a1a, #666666, #999999
- **Success**: #2e7d32
- **Error**: #c62828
- **Warning**: #e65100

### Typography
- **Font**: System font stack (SF Pro, Segoe UI, Roboto)
- **Sizes**: 12px, 14px, 16px, 20px, 24px, 32px

## 🚧 Future Enhancements

- [ ] Connect to real backend API
- [ ] Implement shopping cart functionality
- [ ] Add order placement and tracking
- [ ] Integrate payment gateway
- [ ] Add real-time notifications
- [ ] Implement image upload for products
- [ ] Add advanced analytics charts
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] PWA support

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```


Built with ❤️ using modern web technologies


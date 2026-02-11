# E-Pharmacy

A comprehensive online pharmacy platform with both customer-facing and admin interfaces.

## Features

### Customer Features
- Browse medicine catalog with search and filters
- View nearby pharmacy stores
- Product details and reviews
- Shopping cart and checkout
- User authentication (Register/Login)

### Admin Features
- Dashboard with statistics
- Order management
- Product management (CRUD)
- Supplier management (CRUD)
- Customer data management

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool
- **React Router v6** - Routing
- **React Hook Form** - Form management
- **Yup** - Form validation
- **Axios** - HTTP client
- **MUI (Material-UI)** - UI components
- **React Hot Toast** - Notifications

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
VITE_API_URL=your_api_url_here
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── admin/              # Admin dashboard
│   ├── components/     # Admin components
│   ├── pages/          # Admin pages
│   └── layouts/        # Admin layouts
├── client/             # Client application
│   ├── components/     # Client components
│   ├── pages/          # Client pages
│   └── layouts/        # Client layouts
├── shared/             # Shared components
│   ├── components/     # Common components
│   └── utils/          # Utilities
├── services/           # API services
├── hooks/              # Custom hooks
├── assets/             # Images, icons, fonts
└── styles/             # Global styles
```

## Responsive Design

- Mobile: 320px+ (fluid), 375px+ (responsive)
- Tablet: 768px+
- Desktop: 1440px+

## License

MIT

# GadgetNest - E-Commerce Platform

A modern e-commerce platform built with React frontend and Node.js backend, featuring a comprehensive gadget store with categories, products, cart functionality, and order management.

## 🌐 Live Demo

**🔗 Live Site**: [gadgetnests.netlify.app](https://gadgetnests.netlify.app)

**📱 Screenshots**

### Desktop View
![GadgetNest Desktop](https://i.imgur.com/example1.png)

### Mobile View
![GadgetNest Mobile](https://i.imgur.com/example2.png)

### Product Catalog
![GadgetNest Products](https://i.imgur.com/example3.png)

### Shopping Cart
![GadgetNest Cart](https://i.imgur.com/example4.png)

## 🚀 Features

- **Modern UI/UX**: Beautiful and responsive design with modern styling
- **Product Management**: Complete product catalog with categories
- **Shopping Cart**: Add, remove, and manage items in cart
- **User Authentication**: Secure user registration and login
- **Order Management**: Track and manage orders
- **Search Functionality**: Search products by name and category
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern design
- **Context API** - State management

### Backend
- **Node.js** - Server-side runtime
- **Express.js** - Web application framework
- **Strapi** - Headless CMS for content management
- **Database** - SQLite/PostgreSQL support

## 📁 Project Structure

```
GadgetNest/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions and API
│   │   └── assets/         # Images and static files
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
├── backend/                # Node.js backend application
│   ├── src/
│   │   ├── api/           # API routes and controllers
│   │   ├── admin/         # Admin panel configuration
│   │   └── extensions/    # Custom extensions
│   ├── config/            # Configuration files
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Huzaifababar007/Gadget-Nest.git
   cd Gadget-Nest
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run develop
   ```
   The backend will run on `http://localhost:1337`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📱 Features Overview

### Home Page
- Hero banner with featured products
- Category showcase
- New arrivals section
- Newsletter subscription

### Product Catalog
- Product grid with filtering
- Category-based navigation
- Search functionality
- Product details with images

### Shopping Cart
- Add/remove products
- Quantity management
- Price calculation
- Checkout process

### User Features
- User registration and login
- Order history
- Profile management

## 🎨 Design Features

- **Modern UI**: Clean and intuitive design
- **Responsive Layout**: Mobile-first approach
- **Smooth Animations**: Enhanced user experience
- **Color Scheme**: Professional and attractive color palette
- **Typography**: Readable and modern fonts

## 🔧 Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env)**
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
```

**Frontend (.env)**
```
VITE_API_URL=http://localhost:1337
```

## 📦 Available Scripts

### Backend
- `npm run develop` - Start development server
- `npm run start` - Start production server
- `npm run build` - Build for production

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Frontend (Netlify)
The frontend is deployed on Netlify and is live at: [gadgetnests.netlify.app](https://gadgetnests.netlify.app)

**Deployment Configuration:**
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18
- **Framework**: Vite + React

### Backend (Future Deployment)
The backend can be deployed on platforms like:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Huzaifa Babar**
- GitHub: [@Huzaifababar007](https://github.com/Huzaifababar007)

## 🙏 Acknowledgments

- React.js community
- Strapi team for the amazing headless CMS
- All contributors and supporters

---

⭐ Star this repository if you found it helpful!

# 📦 React-Express-Axios Demo

A complete full-stack demonstration of connecting a **React frontend** to an **Express.js API** using **Axios** with proper loading states, error handling, and responsive UI.

## 🎯 Project Overview

This project showcases:
- **Express.js Backend**: RESTful API that serves a list of products
- **React Frontend**: Modern React application with functional components and hooks
- **Axios Integration**: HTTP client for fetching data from the backend
- **State Management**: Loading states, error handling, and data fetching
- **Responsive Design**: Mobile-friendly UI with CSS Grid and animations
- **CORS Support**: Secure cross-origin requests between frontend and backend

## 📁 Project Structure

```
react-express-axios-demo/
├── server/
│   ├── index.js                 # Express server with products API
│   ├── package.json             # Server dependencies
│   └── .gitignore              # Node.js ignore rules
│
├── client/
│   ├── App.jsx                 # Main React component with Axios integration
│   ├── App.css                 # Global styles with animations
│   ├── package.json            # React dependencies
│   ├── .gitignore             # React/Node.js ignore rules
│   ├── components/
│   │   └── ProductList.jsx    # Product list component
│   └── styles/
│       └── ProductList.css    # Product card styles
│
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the Express server:
```bash
npm start
```

The server will run on `http://localhost:5000`

You can test the API endpoint:
```bash
curl http://localhost:5000/api/products
```

For development with auto-reload:
```bash
npm run dev
```

### Frontend Setup

1. In a new terminal, navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## 🎨 Features

### Backend (Express.js)
- ✅ RESTful API endpoint: `GET /api/products`
- ✅ CORS enabled for cross-origin requests
- ✅ JSON response with success flag and product data
- ✅ Health check endpoint: `GET /health`
- ✅ Sample product data with ID, name, and price

### Frontend (React)
- ✅ Component-based architecture
- ✅ Axios for HTTP requests
- ✅ Loading spinner while fetching data
- ✅ Error boundary with retry functionality
- ✅ Product grid with responsive layout
- ✅ Product stats showing total items and total value
- ✅ Smooth animations and transitions
- ✅ Mobile-responsive design

## 📡 API Endpoints

### Get All Products
```
GET /api/products
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99
    },
    {
      "id": 2,
      "name": "Smartphone",
      "price": 599.99
    }
  ]
}
```

### Health Check
```
GET /health
```

**Response:**
```json
{
  "status": "OK"
}
```

## 🛠️ Technologies Used

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Node.js** - Runtime environment

### Frontend
- **React 18** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with animations
- **React Hooks** - State and effect management

## 📸 Screenshots

### Loading State
- Animated spinner displayed while fetching products
- Clean loading message

### Product Display
- Grid layout of product cards
- Product name, ID, and price displayed
- Total product count and total value shown

### Error State
- User-friendly error message
- "Try Again" button for retry
- Connection troubleshooting tips

## 🔧 Configuration

### Backend Configuration

Edit `server/index.js` to modify:
- Port number (default: 5000)
- Product data
- API endpoints

```javascript
const PORT = process.env.PORT || 5000;
```

### Frontend Configuration

Edit `client/App.jsx` to modify:
- API base URL
- Fetch timeout
- Error handling

```javascript
const response = await axios.get('http://localhost:5000/api/products');
```

## 📝 How It Works

1. **App Component Mounts**: React component initializes
2. **useEffect Hook**: Triggers data fetching on component mount
3. **Axios Request**: HTTP GET request sent to Express API
4. **Loading State**: UI shows loading spinner while waiting
5. **Data Response**: Products received from backend
6. **State Update**: React state updated with product data
7. **Render**: UI updates with product list

## ⚠️ Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### CORS Errors
- Ensure backend is running on `localhost:5000`
- Check CORS middleware is enabled in Express
- Frontend should be on `localhost:3000`

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Axios Documentation](https://axios-http.com)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 🎓 Code Examples

### Fetching Data with Axios

```jsx
const fetchProducts = async () => {
  try {
    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/products');
    if (response.data.success) {
      setProducts(response.data.data);
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

### Displaying Products

```jsx
<div className="products-grid">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  ))}
</div>
```

## 📄 License

MIT License - Feel free to use this project for learning purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit pull requests

## 📧 Support

For questions or issues, please open an issue on the repository.

---

**Happy Coding!** 🚀

Built with ❤️ as a learning resource for React and Express.js integration.

# E-Commerce Web Application

## Overview

This project is a React-based e-commerce web application built using Vite. It provides a complete front-end shopping experience including product browsing, cart management, user authentication, checkout flow, and an admin dashboard.

The application uses React Router for client-side routing and localStorage for basic cart persistence.

---

## Live Demo

```
 https://kl2500030610.github.io/ecom-app/
```

---

## Features

### User Features
- Product listing and product detail pages
- Add to cart functionality
- Cart management (view and update items)
- Secure checkout form
- Order success confirmation page
- User login and signup pages

### Admin Features
- Admin login
- Admin dashboard interface

### UI Components
- Reusable header and footer
- Highlight sections
- Structured content components
- Custom styling with CSS

---

## Tech Stack

- React
- Vite
- React Router
- JavaScript (ES6+)
- CSS
- LocalStorage (for cart persistence)

---

## Project Structure

```
src/
│
├── assets/                # Static assets
│
├── components/            # Main application components
│   ├── AdminDashboard.jsx
│   ├── AdminLogin.jsx
│   ├── Cart.jsx
│   ├── Content.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Highlights.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Payment.jsx
│   ├── Product.jsx
│   ├── Product1.jsx
│   ├── Signup.jsx
│   ├── Success.jsx
│   ├── admin.css
│   └── style.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Installation

1. Clone the repository:

```
git clone https://github.com/kl2500030610/ecom-app.git
```

2. Navigate into the project directory:

```
cd ecom-app
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## Routing

The application uses React Router with HashRouter for navigation. Main routes include:

- `/` – Home page
- `/product/:id` – Product details
- `/cart` – Shopping cart
- `/payment` – Checkout page
- `/success` – Payment confirmation
- `/login` – User login
- `/signup` – User registration
- `/admin` – Admin login/dashboard

---

## Payment Flow

The checkout page collects shipping and payment details. Currently, payment processing is simulated. In a production environment, this should be integrated with a secure payment provider such as Stripe.

After successful payment:
- The cart is cleared from localStorage
- The user is redirected to the home or success page

---

## Future Improvements

- Backend integration with a database
- Real payment gateway integration
- Product filtering and search
- User authentication with JWT
- Order history tracking
- Responsive UI enhancements
- Deployment configuration

---

## License

This project is intended for educational and portfolio purposes.
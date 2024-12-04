# Tedibles - Food Delivery Platform 🍽️

## Overview

Tedibles is a modern food delivery platform built with Next.js 13+, offering seamless food ordering experiences for customers and efficient management tools for restaurants.

## 🚀 Features

- 🔐 User Authentication & Authorization
- 🏪 Restaurant Listings & Menu Management
- 🛒 Real-time Order Tracking
- 💳 Secure Payment Integration
- 📱 Responsive Design
- 🗺️ Location-based Services
- ❤️ Favorites & Order History
- 👤 User Profile Management

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js
- **Database:** MongoDB
- **Image Storage:** Cloudinary
- **State Management:** React Hooks
- **Maps Integration:** Google Maps API

## 📁 Project Structure

```
├── actions/                # Server actions
├── app/                    # Next.js app directory
│   ├── (external)/        # Public routes
│   ├── (internal)/        # Protected routes
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utility functions
├── models/               # Database models
├── types/                # TypeScript types
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database
- Cloudinary account
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tedibles.git
cd tedibles
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
DATABASE_URL=your_mongodb_url
NEXTAUTH_SECRET=your_secret
CLOUDINARY_URL=your_cloudinary_url
GOOGLE_MAPS_API_KEY=your_api_key
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application.

## 🔑 Environment Variables

Required environment variables:

- `DATABASE_URL`: MongoDB connection string
- `NEXTAUTH_SECRET`: NextAuth.js secret
- `NEXTAUTH_URL`: NextAuth.js URL
- `CLOUDINARY_URL`: Cloudinary connection URL
- `GOOGLE_MAPS_API_KEY`: Google Maps API key

## 📱 Key Features Implementation

### Authentication
- NextAuth.js integration
- Protected routes
- Role-based access control

### Restaurant Management
- Menu creation and management
- Order processing
- Real-time updates

### User Features
- Profile management
- Order history
- Favorites system
- Address management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 API Documentation

API endpoints are documented using Swagger/OpenAPI. Access the documentation at `/api-docs` when running the development server.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Team

- [Your Name] - Lead Developer
- [Team Member 1] - Frontend Developer
- [Team Member 2] - Backend Developer

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- All contributors who have helped this project grow

## 📞 Support

For support, email support@tedibles.com or join our Slack channel.

## 🔄 Status

Project is: _in development_

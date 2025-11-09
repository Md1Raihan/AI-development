# Portfolio Website

A modern, responsive portfolio website built with Next.js (frontend) and Node.js/Express (backend), featuring MongoDB for data storage and TailwindCSS for styling.

## Features

- 🎨 Modern, minimalistic design with TailwindCSS
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 📧 Contact form with backend integration
- 🗄️ MongoDB database for storing contact submissions
- 🚀 Ready for deployment on Vercel (frontend) and Render (backend)

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── ContactForm.tsx   # Contact form component
│   ├── ProjectCard.tsx   # Project card component
│   └── SkillCard.tsx     # Skill card component
├── backend/              # Node.js/Express backend
│   ├── server.js         # Express server
│   ├── routes/           # API routes
│   │   └── contact.js    # Contact form routes
│   └── models/           # MongoDB models
│       └── Contact.js    # Contact model
├── package.json          # Frontend dependencies
└── backend/package.json  # Backend dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

   Create `backend/.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

5. **Start MongoDB**
   - Local: Make sure MongoDB is running on your machine
   - Cloud: Update `MONGODB_URI` in `backend/.env` with your MongoDB Atlas connection string

6. **Run the development servers**

   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```

   Terminal 2 (Frontend):
   ```bash
   npm run dev
   ```

7. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_API_URL` (your backend URL)
4. Deploy

### Backend (Render)

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables:
   - `PORT`: 5000
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in working with you."
}
```

**Response:**
```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Customization

- Update projects in `app/page.tsx`
- Modify skills in `app/page.tsx`
- Customize colors in `tailwind.config.js`
- Update metadata in `app/layout.tsx`

## License

MIT


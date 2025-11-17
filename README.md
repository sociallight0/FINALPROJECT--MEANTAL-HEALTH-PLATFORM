# MindfulSpace - Mental Health Support Platform

A comprehensive mental health support application with mood tracking, journaling, AI-powered chat support, and educational resources.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Security Considerations](#security-considerations)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### 1. User Authentication
- User registration with email and password
- Secure login system
- Session management
- User profile data

### 2. Dashboard
- Real-time mood statistics
- Trend analysis (improving/declining/stable)
- Recent activity overview
- Visual data representation

### 3. Mood Tracker
- 5-level mood scale (Great, Good, Okay, Low, Bad)
- Optional notes for each entry
- Complete mood history
- Timestamp tracking
- Mood trend visualization

### 4. Journal System
- Create titled journal entries
- Long-form content writing
- View all previous entries
- Chronological sorting
- Full-text storage

### 5. AI-Powered Chat Support
- Real-time conversational interface
- Context-aware AI responses
- Emotional keyword detection
- Crisis resource information
- Persistent chat history

### 6. Resources Library
- Educational articles on:
  - Anxiety management
  - Depression support
  - Stress management
  - Building resilience
  - Mindfulness practices
  - Sleep hygiene
- Professional help resources
- Crisis hotlines

## 🛠 Technology Stack

### Frontend
- **React 18** - UI framework
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first styling

### Backend (Current Implementation)
- **LocalStorage API** - Client-side data persistence
- **Simulated REST API** - Async operations with delays

### Recommended Production Stack
- **Backend**: Node.js + Express.js or Python + Django/FastAPI
- **Database**: PostgreSQL or MongoDB
- **Authentication**: JWT or OAuth 2.0
- **AI Integration**: OpenAI API or Anthropic Claude API
- **Hosting**: AWS, Google Cloud, or Azure

## 📁 Project Structure

```
mental-health-platform/
├── index.html              # Main HTML file
├── styles.css              # Global styles and Tailwind utilities
├── app.js                  # Main React application
├── components/
│   ├── Auth.js            # Authentication component
│   ├── Dashboard.js       # Dashboard view
│   ├── MoodTracker.js     # Mood tracking component
│   ├── Journal.js         # Journal component
│   ├── Chat.js            # AI chat interface
│   └── Resources.js       # Resources library
├── api/
│   └── index.js           # API simulation layer
├── utils/
│   └── helpers.js         # Utility functions
└── README.md              # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Modern web browser

### Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mindfulspace.git
cd mindfulspace
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
```

4. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

5. **Start development server**
```bash
npm start
```

6. **Open in browser**
```
http://localhost:3000
```

## 💻 Usage

### Running the Application

1. **First-time users**: Click "Register" and create an account
2. **Returning users**: Login with your credentials
3. **Navigate** through the tabs: Dashboard, Mood Tracker, Journal, AI Support, Resources

### Testing the Application

**Test User Credentials:**
- Email: test@example.com
- Password: test123

Or create your own account!

## 🗄 Database Schema

### Users Table
```javascript
{
  id: Number,
  username: String,
  email: String,
  password: String, // Hashed in production
  createdAt: DateTime
}
```

### Mood Entries Table
```javascript
{
  id: Number,
  userId: Number,
  mood: Number (1-5),
  moodLabel: String,
  note: String,
  timestamp: DateTime
}
```

### Journal Entries Table
```javascript
{
  id: Number,
  userId: Number,
  title: String,
  content: Text,
  timestamp: DateTime
}
```

### Chat Messages Table
```javascript
{
  userId: Number,
  role: String ('user' | 'assistant'),
  content: Text,
  timestamp: DateTime
}
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Mood Tracking
- `GET /api/moods/:userId` - Get all mood entries
- `POST /api/moods/:userId` - Create mood entry
- `GET /api/moods/:userId/stats` - Get mood statistics

### Journal
- `GET /api/journal/:userId` - Get all journal entries
- `POST /api/journal/:userId` - Create journal entry
- `PUT /api/journal/:entryId` - Update journal entry
- `DELETE /api/journal/:entryId` - Delete journal entry

### Chat
- `GET /api/chat/:userId` - Get chat history
- `POST /api/chat/:userId` - Send message and get AI response

## 🌐 Deployment

### Production Deployment Steps

1. **Set up backend server**
   - Create Express.js or Django backend
   - Set up PostgreSQL/MongoDB database
   - Implement JWT authentication

2. **Configure environment variables**
```env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_api_key
PORT=5000
```

3. **Build frontend**
```bash
npm run build
```

4. **Deploy to hosting service**
   - Frontend: Vercel, Netlify, or AWS S3
   - Backend: Heroku, AWS EC2, or Google Cloud
   - Database: AWS RDS, MongoDB Atlas

5. **Set up SSL certificate** (Let's Encrypt)

6. **Configure CDN** for static assets

## 🔒 Security Considerations

### Current Implementation
- Client-side storage (not secure for production)
- Plain text passwords (must be hashed)
- No encryption

### Production Requirements

1. **Authentication**
   - Implement bcrypt for password hashing
   - Use JWT tokens with refresh tokens
   - Add rate limiting for login attempts

2. **Data Protection**
   - Encrypt sensitive data at rest
   - Use HTTPS for all communications
   - Implement CORS policies
   - Sanitize user inputs

3. **Privacy Compliance**
   - HIPAA compliance for health data
   - GDPR compliance for EU users
   - Clear privacy policy
   - Data export/deletion features

4. **Security Headers**
   - Content Security Policy
   - X-Frame-Options
   - X-Content-Type-Options

## 🎯 Future Enhancements

### Planned Features
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Data export (PDF/CSV)
- [ ] Advanced mood analytics with charts
- [ ] Medication reminders
- [ ] Therapist appointment scheduling
- [ ] Community support groups
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Voice journaling
- [ ] Integration with wearables

### AI Improvements
- [ ] Connect to real AI API (Claude, GPT-4)
- [ ] Conversation context preservation
- [ ] Emotion detection from text
- [ ] Personalized coping strategies
- [ ] Crisis detection and intervention

### Analytics
- [ ] Weekly/monthly mood reports
- [ ] Pattern recognition
- [ ] Trigger identification
- [ ] Progress tracking over time

## 📞 Support & Resources

### Crisis Resources
- **911** - Suicide & Crisis Lifeline
- **Text "HELLO" to 741741** - Crisis Text Line
- **0800723253** - BASICNEEDSWATCH Helpline

### Professional Help
- Psychology Today - Therapist Directory
- BetterHelp - Online Therapy
- SAMHSA Treatment Locator

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Built with ❤️ for mental health awareness

## ⚠️ Disclaimer

This application is not a substitute for professional mental health care. If you are in crisis or need immediate help, please contact emergency services or a crisis hotline immediately.

---

**Remember**: Your mental health matters. Take care of yourself. 💙

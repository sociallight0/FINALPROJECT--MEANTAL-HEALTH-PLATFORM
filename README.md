# Mental Health Support Platform

A comprehensive web application for mental health support, mood tracking, journaling, and professional resources.

## Features

- **User Authentication**: Secure registration and login system
- **Mood Tracking**: Daily mood logging with visual analytics
- **Journal Entries**: Private journaling with emotional tagging
- **Mental Health Resources**: Curated articles and professional help information
- **Breathing Exercises**: Interactive guided breathing exercises
- **Crisis Support**: Immediate access to crisis hotlines and resources
- **Analytics Dashboard**: Visual representation of mental health patterns

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom styling with modern design)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- JWT for authentication
- bcrypt for password hashing

### Database
- MongoDB (with Mongoose ODM)

## Project Structure

```
mental-health-platform/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       ├── auth.js
│       └── dashboard.js
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   ├── MoodEntry.js
│   │   └── JournalEntry.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── mood.js
│   │   └── journal.js
│   └── middleware/
│       └── auth.js
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd mental-health-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mental_health_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

4. **Start MongoDB**

Make sure MongoDB is running on your system:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
net start MongoDB
```

5. **Start the backend server**
```bash
npm start
```

The server will start on `http://localhost:3000`

6. **Open the frontend**

Open `frontend/index.html` in your browser, or serve it using a local server:

```bash
# Using Python 3
cd frontend
python -m http.server 8000

# Using Node.js http-server
npx http-server frontend -p 8000
```

Then navigate to `http://localhost:8000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Mood Tracking
- `POST /api/mood` - Create a mood entry (protected)
- `GET /api/mood` - Get all mood entries for user (protected)
- `GET /api/mood/stats` - Get mood statistics (protected)

### Journal
- `POST /api/journal` - Create a journal entry (protected)
- `GET /api/journal` - Get all journal entries (protected)
- `GET /api/journal/:id` - Get specific journal entry (protected)
- `PUT /api/journal/:id` - Update journal entry (protected)
- `DELETE /api/journal/:id` - Delete journal entry (protected)

## Usage

### Registration
1. Navigate to the registration page
2. Fill in your name, email, and password
3. Click "Sign Up"

### Login
1. Navigate to the login page
2. Enter your credentials
3. Click "Login"

### Mood Tracking
1. From the dashboard, select your current mood
2. Add optional notes
3. Submit to track your mood

### Journaling
1. Click on "New Journal Entry"
2. Write your thoughts
3. Tag the entry with emotions
4. Save the entry

### Viewing Analytics
1. Navigate to the Analytics section
2. View mood trends over time
3. Analyze patterns in your mental health journey

## Security Features

- Password hashing with bcrypt (10 rounds)
- JWT-based authentication
- Protected API routes
- Input validation and sanitization
- HTTP-only cookies (recommended for production)
- CORS configuration

## Development

### Running in Development Mode

```bash
npm run dev
```

This will start the server with nodemon for auto-reloading.

### Testing

```bash
npm test
```

## Production Deployment

### Environment Variables for Production

Update your `.env` file:

```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_production_secret
PORT=3000
```

### Deployment Checklist

- [ ] Set strong JWT_SECRET
- [ ] Use production MongoDB instance
- [ ] Enable HTTPS
- [ ] Set up proper CORS policies
- [ ] Implement rate limiting
- [ ] Set up logging and monitoring
- [ ] Configure backup strategy
- [ ] Review and update security headers

## Crisis Resources

The platform includes immediate access to:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
- International Association for Suicide Prevention
- SAMHSA National Helpline: 1-800-662-4357

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub or contact support.

## Disclaimer

This platform is designed to support mental health awareness and self-tracking. It is not a substitute for professional mental health care. If you're experiencing a mental health crisis, please contact emergency services or a mental health professional immediately.

## Acknowledgments

- Crisis hotline information provided by national mental health organizations
- Breathing exercise techniques based on evidence-based practices
- Mental health resources curated from reputable sources

---

**Remember: Your mental health matters. You are not alone.** 💚

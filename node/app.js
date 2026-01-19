const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const eligibilityRoutes = require('./routes/eligibilityRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Security
app.use(helmet());

// ✅ CORS (Render + Browser friendly)
app.use(cors({
  origin: '*',
}));

// Parsers
app.use(bodyParser.json());
app.use(cookieParser());

// Rate limiter
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/eligibilities', eligibilityRoutes);
app.use('/api/admin', adminRoutes);

// Test route (OPTIONAL – debugging ke liye)
app.get('/', (req, res) => {
  res.send('Backend is running');
});

module.exports = app;

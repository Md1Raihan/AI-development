const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Please provide all required fields: name, email, and message',
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Please provide a valid email address',
      });
    }

    // Create new contact entry
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    // Save to database
    const savedContact = await newContact.save();

    // Send success response
    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt,
      },
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Handle duplicate email error (if you have unique constraint)
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'A contact with this email already exists',
      });
    }

    res.status(500).json({
      message: 'Failed to submit contact form',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// GET /api/contact - Get all contact submissions (optional, for admin use)
router.get('/', async (req, res) => {
  try {
    // In production, add authentication/authorization middleware here
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v'); // Exclude version key

    res.status(200).json({
      message: 'Contacts retrieved successfully',
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      message: 'Failed to fetch contacts',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// GET /api/contact/:id - Get a specific contact by ID (optional)
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }

    res.status(200).json({
      message: 'Contact retrieved successfully',
      contact,
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        message: 'Invalid contact ID',
      });
    }

    res.status(500).json({
      message: 'Failed to fetch contact',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

module.exports = router;


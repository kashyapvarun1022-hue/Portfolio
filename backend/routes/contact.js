const express = require('express');
const { body, validationResult } = require('express-validator');
const Message = require('../models/Message');

const router = express.Router();

/**
 * POST /api/contact
 * Body: { name, email, message }
 */
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name required').isLength({ max: 120 }),
    body('email').trim().isEmail().withMessage('Valid email required'),
    body('message').trim().notEmpty().withMessage('Message required').isLength({ max: 2000 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;

      const saved = await Message.create({ name, email, message });

      // Optional: send an email notification here (e.g., using SendGrid) - omitted for simplicity

      res.status(201).json({ ok: true, id: saved._id, createdAt: saved.createdAt });
    } catch (err) {
      console.error('Error saving message:', err);
      res.status(500).json({ error: 'Could not save message' });
    }
  }
);

module.exports = router;

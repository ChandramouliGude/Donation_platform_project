// models/Donation.js
const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    pledge: { type: String, required: true },
    feedback: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Donation', DonationSchema);

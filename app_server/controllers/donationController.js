const Donation = require('../models/Donation');

exports.submitDonation = async (req, res) => {
    try {
        // Log incoming request data for debugging
        console.log(req.query); // Check what data is being received

        const { name, email, phone, otherAmount, pledge, review } = req.query;

        // Basic validation
       

        // Create a new donation document
        const newDonation = new Donation({
            name,
            email,
            phone,
            amount: otherAmount,
            pledge,
            feedback: review,
        });

        // Save the donation document to the database
        await newDonation.save();

        // Redirect to a thank-you page
        res.redirect('/thank-you');
    } catch (error) {
        console.error('Error saving donation:', error);
        res.status(500).send('Server error');
    }
};

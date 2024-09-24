// controllers/reviewsController.js
const Review = require('../models/review'); // Import your Review model

// GET all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.render('reviews', { reviews });
    } catch (error) {
        res.status(500).send(error);
    }
};

// POST a new review
exports.addReview = async (req, res) => {
    const { username, comment, rating } = req.body;
    try {
        const review = new Review({
            username,
            comment,
            rating,
            date: new Date(),
        });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).send(error);
    }
};

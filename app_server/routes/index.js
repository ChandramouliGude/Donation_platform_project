const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlDonations = require('../controllers/donate');
const ctrlReviews = require('../controllers/reviewsController'); // Update to use your reviews controller

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Reviews pages */
router.get('/reviews', ctrlReviews.getReviews); // GET reviews page
router.post('/reviews', ctrlReviews.addReview); // POST new review

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/donation', ctrlDonations.don);

module.exports = router;

/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Donation Platform',
    pageHeader: {
    title: 'Dharma',
    strapline: '_____Donate easily!_____'
    },
    locations: [{
    name: 'Dharma Donation',
    address: 'online',
    rating: 4,
    // facilities: ['Hot drinks', 'Food', 'Premium wifi'],

    }]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };
const router = require('express').Router();
let User = require('../models/user.model');

// localhost:5000/users/ - handles incoming GET request, then use mongoose find()-method:
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// localhost:5000/users/add - handles incoming POST request,
router.route('/add').post((req, res) => {
    const username = req.body.username;

// create new instance of a user:
    const newUser = new User({ username });

// then apply save()-method to save to db:
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: + err'));
});

module.exports = router;
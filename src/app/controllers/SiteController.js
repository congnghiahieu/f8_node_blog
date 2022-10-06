const Course = require('../models/Course');
const { mongooseArraysToObjects } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mongooseArraysToObjects(courses),
                });
            })
            .catch((err) => next(err));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

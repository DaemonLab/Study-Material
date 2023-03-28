const express = require('express')
const mongoose = require('mongoose')
const Course = require('../models/Course')

const router = express.Router()

router.get('/course', (req, res) => res.send('addcourse'));

router.post('/course', (req, res) => {
    const { code, name, semester, branch } = req.body
    let errors = [];

    if(!code || !name || !semester || !branch) {
        errors.push({msg : 'Please fill in all the fields'});
    }
    if(errors.length >0) {
        res.render('course', {
            errors,
            code,
            name,
            semester,
            branch
        })
    } else {
        Course.findOne({courseCode: code})
        .then(course => {
            if(course){
                errors.push({msg:'Course is already Registered'});
                res.render('course', {
                    errors,
                    code,
                    name,
                    semester,
                    branch
                });
            } else {
                const newCourse = new Course({
                    code,
                    name,
                    semester,
                    branch
                });
                newCourse.save().then(course => {
                    req.flash('success_msg', 'Course successfully registered');
                    res.redirect('/dashboard');
                })
            }
        })
    }
});

module.exports = router
const express = require('express')
const passport = require('passport')
const router = express.Router()
require('../config/passport')

const {googleauth} = require("../config/passport")
googleauth(passport)



// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { 
  scope: ['profile'],
  prompt: 'select_account'
}))


// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    if(firstLogin){
      res.redirect('/register')
    } else {
      res.redirect('/dashboard')
    }
  }
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout((error) => {
      if (error) {return next(error)}
      res.redirect('/')
  })
})

module.exports = router
const express = require('express')
const passport = require('passport')
const router = express.Router()
require('../config/passport')



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
      res.send(true)
    } else {
      res.send(false)
    }
  }
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout((error) => {
      if (error) {return next(error)}
      res.send('Logout successfull')
  })
})

module.exports = router
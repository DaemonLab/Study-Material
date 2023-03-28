const GoogleStrategy = require('passport-google-oauth20').Strategy
const { refreshToken } = require('firebase-admin/app')
const mongoose = require('mongoose')
const User = require('../models/User')


firstLogin = false


const googleauth = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        }
        
        try {
          let user = await User.findOne({ googleId: profile.id })
          console.log(user)
          if (user) {
            firstLogin = false
            done(null, user)
          } else {
            firstLogin = true
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then((err, user) => done(err, user))
  })
}


module.exports = {googleauth}

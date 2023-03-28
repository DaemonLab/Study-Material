const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const config = require('./config');
const mongoose = require('mongoose');


// const app = initializeApp(config.firebaseConfig);
const serviceAccount = require('../files/grounded-vision-381320-firebase-adminsdk-2rfku-1705c263c6.json');

const app = initializeApp({
  credential: cert(serviceAccount)
});


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const db = getFirestore();


module.exports = {
    app, db, connectDB
};
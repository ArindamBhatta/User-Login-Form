const fs = require('firebase-admin')
const serviceAccount = require('./firestore-config.json')

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
})

export const db = fs.firestore()

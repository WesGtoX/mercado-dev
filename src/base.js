const config = {
    apiKey: "AIzaSyD-U6tTAPY0GC6pAfs-Q9NlmfP3C6hsHvA",
    authDomain: "mercadodev-3a9aa.firebaseapp.com",
    databaseURL: "https://mercadodev-3a9aa.firebaseio.com",
    projectId: "mercadodev-3a9aa",
    storageBucket: "gs://mercadodev-3a9aa.appspot.com",
    messagingSenderId: "643630571529"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

export const storage = app.storage()

  export default base
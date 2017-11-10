const config = {
    apiKey: "AIzaSyD-U6tTAPY0GC6pAfs-Q9NlmfP3C6hsHvA",
    authDomain: "mercadodev-3a9aa.firebaseapp.com",
    databaseURL: "https://mercadodev-3a9aa.firebaseio.com",
    projectId: "mercadodev-3a9aa",
    storageBucket: "",
    messagingSenderId: "643630571529"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base
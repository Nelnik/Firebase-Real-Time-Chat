(feed =function() {
  


  // Initialize Firebase
  var config = {
  apiKey: "AIzaSyBy3mMhUFfQ4fUwe6rSXRhOZyOKc7btYgM",
  authDomain: "real-time-chat-4d6e6.firebaseapp.com",
  databaseURL: "https://real-time-chat-4d6e6.firebaseio.com",
  projectId: "real-time-chat-4d6e6",
  storageBucket: "real-time-chat-4d6e6.appspot.com",
  messagingSenderId: "686840023096"
  };

  firebase.initializeApp(config);

 

  // get element
  const preObject = document.getElementById('Messages');

  // create ref 
  const dbRefObject = firebase.database().ref().child('Messages');
  

  //sync
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });




}());



        

(function() {


// Initialize firebase

const config = {
  apiKey: "AIzaSyBHt-dtGoAs6akJbKeGdufatEUpnJ8QPa0",
  authDomain: "my-project-1523381980704.firebaseapp.com",
  databaseURL: "https://my-project-1523381980704.firebaseio.com",
  projectId: "my-project-1523381980704",
  storageBucket: "my-project-1523381980704.appspot.com",
  messagingSenderId: "88935170519"
};
firebase.initializeApp(config);


// Get elements

const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref().child('object');

// Sync object changes

dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});




}());

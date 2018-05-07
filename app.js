(function() {


// Initialize firebase

const config = {

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

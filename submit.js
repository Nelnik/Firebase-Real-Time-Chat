var message = document.getElementById("draft");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {


	var firebaseRef = firebase.database().ref();
	var msgText = message.value;
	var displayName = firebase.auth().currentUser;
	if(msgText!=""){

		var newKey = firebaseRef.push().key;
	firebaseRef.child("Messages").child(newKey).child("message").set(msgText);
	firebaseRef.child("Messages").child(newKey).child("Sender").set(displayName.email);
	var time = Date();
	firebaseRef.child("Messages").child(newKey).child("Time").set(time);
	document.getElementById("draft").value="";
	}
	
	
}
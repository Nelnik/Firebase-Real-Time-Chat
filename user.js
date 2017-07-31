

(user= function() {



    var config = {
        apiKey: "AIzaSyBy3mMhUFfQ4fUwe6rSXRhOZyOKc7btYgM",
        authDomain: "real-time-chat-4d6e6.firebaseapp.com",
        databaseURL: "https://real-time-chat-4d6e6.firebaseio.com",
        projectId: "real-time-chat-4d6e6",
        storageBucket: "real-time-chat-4d6e6.appspot.com",
        messagingSenderId: "686840023096"
    };

    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSign = document.getElementById('btnSignup');



    btnLogin.addEventListener('click',e=> {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

     
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });

    btnSign.addEventListener('click',e => {
      	const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));

    });




    firebase.auth().onAuthStateChanged(firebaseUser => {
    	if(firebaseUser){
    		 window.location.href = "chat.html";
    		console.log("logged in");
    	}else{
    		console.log('not logged in');
    	}
    });


    const btnLogOut = document.getElementById('btnLogOut');

    
    		
    


    	


}());






function signout(){
			firebase.auth().signOut();
    		window.location.href = "index.html";


    }
    



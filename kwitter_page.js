var firebaseConfig = {
      apiKey: "AIzaSyDcK4CQ5e6i-AI9E3VWl9bVii8wsV2YLI8",
      authDomain: "tic-tac-75ccf.firebaseapp.com",
      databaseURL: "https://tic-tac-75ccf-default-rtdb.firebaseio.com",
      projectId: "tic-tac-75ccf",
      storageBucket: "tic-tac-75ccf.appspot.com",
      messagingSenderId: "234848442387",
      appId: "1:234848442387:web:d35db9bdd31589d9fc87e6"
    };
    firebase.initializeApp(firebaseConfig)
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    function send()
    {
      msg = document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

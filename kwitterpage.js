const firebaseConfig = {
    apiKey: "AIzaSyBhzhnBtWR1JZfbLpxbYiLC1FTNf6Vy7Gs",
    authDomain: "to-know-3c438.firebaseapp.com",
    databaseURL: "https://to-know-3c438-default-rtdb.firebaseio.com",
    projectId: "to-know-3c438",
    storageBucket: "to-know-3c438.appspot.com",
    messagingSenderId: "437348609477",
    appId: "1:437348609477:web:b7b24b3fc679fa7485afac"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
  }
  function getData(){firebase.database().ref("/"+roomName).on('value',function(snapshot){document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key; childData=childSnapshot.val();if(childKey != "purpose"){
    firebaseMessageId = childKey;
    messageData = childData;
    console.log(firebaseMessageId);
    console.log(messageData);
    name = messageData['name'];
    message = messageData['message'];
    like = messageData['like'];
    nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
    messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
    spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = nameWithTag + messageWithTag + like_button + spanWithTag;
    document.getElementById("output").innerHTML+=row;
  }})});}
  getData();
  function updateLike(messageId)
  {
    console.log("botão de like pressionada -" +messageId);
    buttonId = messageId;
    likes=document.getElementById(buttonId).value;
    updateLikes=Number(likes)+1;
    console.log(updateLikes);

    firebase.database().ref(roomName).child(messageId).update({
     like:updateLikes 
    });
  }
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
  }
  
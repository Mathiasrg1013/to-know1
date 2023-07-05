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

function addUser()
{
    userName=document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purppose:"adicionar usuario"
    });
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD36L-B2fm7zIzuYsPB7NpnKb3DE9tbqYE",
  authDomain: "ccapp-d7067.firebaseapp.com",
  projectId: "ccapp-d7067",
  storageBucket: "ccapp-d7067.appspot.com",
  messagingSenderId: "1008912986154",
  appId: "1:1008912986154:web:d09b2f9ae452547cb49353",
  measurementId: "G-XEEDDWF1MV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference contactinfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for submit
document.querySelector(".form-control").addEventListener("submit",submitForm);

function submitForm(e) {
  e.preventDefault();
  //Get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  //console.log(name, email, message);

  saveContactInfo(name,email,message);
}

//Save infos to Firebase
function saveContactInfo(name, email, message){
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
  retrieveInfos();
}

//Retrieve Infos from database
function retrieveInfos() {
  let ref = firebase.database().ref("infos");
  ref.on("value", gotData);
}

function gotData(data){
  let info=data.val();
  let keys=Object.keys(info);

//loops every documents inside firebase
  for (let i=0;i<keys.length;i++){
    let infoData = keys[i]
    let name = info[infoData].name;
    let email=info[infoData].email;
    let message=info[infoData].message;

    console.log(name,email,message);
  }
}

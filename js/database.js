const firebaseConfig = {
    apiKey: "AIzaSyAE3g0U59TzghjmeN-LOL6v70xYaTm3pAU",
    authDomain: "traducto-b36fc.firebaseapp.com",
    databaseURL: "https://traducto-b36fc-default-rtdb.firebaseio.com",
    projectId: "traducto-b36fc",
    storageBucket: "traducto-b36fc.appspot.com",
    messagingSenderId: "560806060261",
    appId: "1:560806060261:web:2b990c1bc8ec660715f40c"
};
firebase.initializeApp(firebaseConfig);

// Référence Firebase contenant les adresses e-mails
// Écoute de l'événement "click" sur le bouton de recherche
var submitId1 = document.getElementById('submitId1');
var submitId2 = document.getElementById('submitId2')
submitId2.addEventListener('click', submitmy)
submitId1.addEventListener('click', submitmyx)
function submitmy(){ 
const emailRef = firebase.database().ref('utilisateurs');
const email = document.getElementById('login-email').value;
var password = document.getElementById('login-password').value
var loginusername = document.getElementById('login-username').value
//alert(numberphoneuser)
console.log(email)
console.log(password)
// Ajoutez un gestionnaire d'événements pour l'événement "input"
const emailInput = document.getElementById('login-email').value;

  if(email  && password ){
  let emailKey = null;

  // Filtrage des données pour trouver l'adresse e-mail spécifique
  emailRef.once('value', (snapshot) => {
    const emails = snapshot.val();
    for (const key in emails) {
      if (emails.hasOwnProperty(key) && emails[key].email === emailInput ) {
        emailKey = key;
        break;
      }
    }
   
    if (emailKey) {
      // L'adresse e-mail a été trouvée
      const email = emails[emailKey];
      document.getElementById('login-email').value = ""
      document.getElementById('login-password').value = ""
      document.getElementById('login-username').value = ""
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Cet utilisateur existe déjà.",
        showConfirmButton: false,
        timer: 1500
       // footer: '<a href="">Why do I have this issue?</a>'
      })
    } else {
      //L'adresse e-mail n'a pas été trouvée
    //alert(`L'adresse e-mail ${emailInput} n'a pas été trouvée dans Firebase.`)

  //console.log(monthAbbreviation); 

    var id = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    }
    const userId = id();
    var userID =  userId + loginusername
    // Récupération de l'adresse mail entrée par l'utilisateur
    // Envoi de l'adresse mail à Firebase

    // Créez une nouvelle instance de l'objet Date
    const currentDate = new Date();
    // Obtenez les différentes composantes de la date
    const year = currentDate.getFullYear(); // Année (ex: 2023)
    const month = currentDate.getMonth() + 1; // Mois (de 0 à 11, donc on ajoute 1)
    const day = currentDate.getDate(); // Jour du mois (de 1 à 31)
    const hours = currentDate.getHours(); // Heures (de 0 à 23)
    const minutes = currentDate.getMinutes(); // Minutes (de 0 à 59)
    const seconds = currentDate.getSeconds(); // Secondes (de 0 à 59)
    firebase.database().ref('utilisateurs/' + userID).set({
        userId : userID,
        email: email,
        username:loginusername,
        password : password,
        DOCSATUS1: true,
        DOCSATUS2: false,
        DOCSATUS3: false,
        DOCSATUS4: false, 
        isDefaultAccount: true,
        isPaidAccount: false,
        MONPAYSDEPUBLICATION:"",
        VALIDERMONCOMPTE:false,
        NUMBEROFMOT : "",
        FILETYPE : "",
        MONCOMPTESUSPENDU:false,
        COMPTEFACEBOOK:"",
        COMPTEINSATAGRAMME:"",
        USERCONNECT : false,
        DATETIME : `${day}/${month}/${year}`,
    }).then(() => {
      document.getElementById('login-email').value = ""
      document.getElementById('login-password').value = ""
      document.getElementById('login-username').value = ""
      Swal.fire({
      icon: 'success',
      title: 'Félicitations',
      text: "Votre compte est crée avec succèss",
      showConfirmButton: false,
      timer: 1500
      // footer: '<a href="">Why do I have this issue?</a>'
      })
      //submitId2.style.display = "none"
    }).catch((error) => {
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "il y a une erreur",
      showConfirmButton: false,
      timer: 1500
     // footer: '<a href="">Why do I have this issue?</a>'
    })
        //alert("Erreur lors de l'envoi de l'adresse mail à Firebase :", error);
    });
  }
  });

}else{
//alert("les données ne sont pas")
  }
  }

  function submitmyx(){ 
    const emailRef = firebase.database().ref('utilisateurs');
    const email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value
    //alert(numberphoneuser)
   
    // Ajoutez un gestionnaire d'événements pour l'événement "input"
    const emailInput = document.getElementById('login-email').value;
    const usernameKEy = document.getElementById('login-username').value;
    console.log(email)
    console.log(password)
    console.log(usernameKEy)
      if(email  && password && usernameKEy){
      let emailKey = null;
      let passwordkey = null;
      let loginusernameKy = null;
    
      // Filtrage des données pour trouver l'adresse e-mail spécifique
      emailRef.once('value', (snapshot) => {
        const emails = snapshot.val();
        for (const key in emails) {
          if (emails.hasOwnProperty(key) && emails[key].email === emailInput ) {
            emailKey = key;
            break;
          }
        }

        for (const keyphoneuser in emails) {
            if (emails.hasOwnProperty(keyphoneuser) && emails[keyphoneuser].username === usernameKEy ) {
                loginusernameKy  = keyphoneuser;
              break; 
            }
          }
          
          for (const keyphone in emails) {
            if (emails.hasOwnProperty(keyphone) && emails[keyphone].password === password ) {
                passwordkey  = keyphone;
              break;
            }
          }
          
        if (emailKey && passwordkey && loginusernameKy) {
          localStorage.setItem("userTraductoId", emailKey)
          document.getElementById('login-email').value = ""
          document.getElementById('login-password').value = ""
          document.getElementById('login-username').value = ""
          Swal.fire({
            icon: 'success',
            title: 'Connexion',
            text: "Vous êtes connecté avec succèss",
            showConfirmButton: false,
            timer: 1500
           // footer: '<a href="">Why do I have this issue?</a>'
          })
          setTimeout(()=>{
            const userRef = firebase.database().ref('traducteurs/' + emailKey);
            userRef.once('value')
            .then((snapshot) => { 
                const userData = snapshot.val();
                if(userData.isDefaultAccount === true){
                    window.location.href = "tradsign.html"
                }else{
                    window.location.href = "myaccount.html"
                }
            }).catch((error)=>{
                console.log(error)
            })
           
          },2000)
        } else {
          
          document.getElementById('login-email').value = ""
          document.getElementById('login-password').value = ""
          document.getElementById('login-username').value = ""
          Swal.fire({
            icon: 'error',
            title: 'Ooops',
            text: "Le mot de passe ou email incorrect",
            showConfirmButton: false,
            timer: 1500
           // footer: '<a href="">Why do I have this issue?</a>'
          })

      }
      });
    
    }else{
    //alert("les données ne sont pas")
      }
}
 

 
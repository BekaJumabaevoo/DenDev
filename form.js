
const signUpButton = document.getElementById('signUp') 
const signInButton = document.getElementById('signIn') 
const container = document.getElementById('container') 
 
signUpButton.addEventListener('click', () => { 
  container.classList.add('right-panel-active') 
}) 
 
signInButton.addEventListener('click', () => { 
  container.classList.remove('right-panel-active') 
})



const ok = document.getElementById('ok') 


ok.addEventListener('click', () => { 

  var at = document.getElementById("email").value.indexOf("@");
  var age = document.getElementById("age").value;
  var fname = document.getElementById("fname").value;


fetch("https://736b-212-42-120-155.in.ngrok.io/users/register",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      "email": at,
      "login": age,
      "password": fname,
    })
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
})



const lol = document.getElementById('lol4') 


lol.addEventListener('click', () => { 

  var at = document.getElementById("lol").value.indexOf("@");
  var pass = document.getElementById("lol2").value;

fetch("https://736b-212-42-120-155.in.ngrok.io/users/auto",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      "loginOrEmail": at,
      "password": pass
    })
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
})



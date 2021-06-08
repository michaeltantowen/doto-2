function registAccount() {
  var userName = document.getElementById('Username').value;
  var email = document.getElementById('Email').value;
  var region = document.getElementById('region').value;
  var DOB = document.getElementById('dateOfBirth').value;
  var pass = document.getElementById('Password').value;
  var min = 0;
  var age;

  if(userName === "") {
    document.getElementById('username-null').innerHTML = "This must be filled!";
  } else if(userName.length <= 5) {
    document.getElementById('username-null').innerHTML = "Username must be more than 5 characters!";
  } else {
    min++;
    document.getElementById('username-null').innerHTML = "";
  }

  if(email === "") {
    document.getElementById('email-null').innerHTML = "This must be filled!";
  } 
  if(email.includes('@') || email.includes('.com')) {
    min++;
    document.getElementById('email-null').innerHTML = "";
  } else {
    document.getElementById('email-null').innerHTML = "Invalid email format!";
  } 

  if(pass === "") {
    document.getElementById('pass-null').innerHTML = "This must be filled!";
  } else {
    min++;
    document.getElementById('pass-null').innerHTML = "";
  }

  if(region === "NULL") {
    document.getElementById('region-null').innerHTML = "Please select your region!";
  } else {
    min++;
    document.getElementById('region-null').innerHTML = "";
  }

  if(DOB === "") {
    document.getElementById('dob-null').innerHTML = "This must be filled!";
  } else {
    min++;
    document.getElementById("dob-null").innerHTML = "";
  }
  if(min === 5) {
    let ask = confirm("Create Account?");
    if(ask) {
      document.getElementById('regist-form').reset();
      alert("Account created!");
    } else {
      alert("Account not created!");
    }
  }
}
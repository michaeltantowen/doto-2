// function register() {
// 	var userName = document.getElementById("userName").value;
// 	var name = document.getElementById("fullName").value;
// 	var password = document.getElementById("password").value;
// 	var email = document.getElementById("email").value;
// 	var genders = "";
// 	if (document.getElementById("radioMale").checked == true) genders = "male";
// 	else if (document.getElementById("radioFemale").checked == true)
// 		genders = "female";
// 	var birthday = document.getElementById("birthday").value;
// 	var address = document.getElementById("alamat").value;

// 	var bool = true;
// 	if (userName == "") {
// 		document.getElementById("err-userName").innerHTML = "UserName must filled";
// 		bool = false;
// 	} else if (userName.length < 5) {
// 		document.getElementById("err-userName").innerHTML =
// 			"Username must be more than 5 character";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-userName").innerHTML = "";
// 	}

// 	if (name == "") {
// 		document.getElementById("err-fullName").innerHTML = "Name must filled";
// 		bool = false;
// 	} else if (cekSpasi(name) < 2) {
// 		document.getElementById("err-fullName").innerHTML =
// 			"Name must be more than 1 words";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-fullName").innerHTML = "";
// 	}

// 	if (password == "") {
// 		document.getElementById("err-password").innerHTML = "Password must filled";
// 		bool = false;
// 	} else if (password.length < 5) {
// 		document.getElementById("err-password").innerHTML =
// 			"Password must be more than 5 character";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-password").innerHTML = "";
// 	}

// 	if (email == "") {
// 		document.getElementById("err-email").innerHTML = "Email must be filled";
// 		bool = false;
// 	} else if (cekEmail(email) == false) {
// 		document.getElementById("err-email").innerHTML = "Invalid Email Format";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-email").innerHTML = "";
// 	}

// 	if (genders == "") {
// 		document.getElementById("err-gender").innerHTML = "Gender must be chosen";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-gender").innerHTML = "";
// 	}

// 	if (birthday == "") {
// 		document.getElementById("err-birthday").innerHTML =
// 			"Birthday must be filled";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-birthday").innerHTML = "";
// 	}

// 	if (address == "") {
// 		document.getElementById("err-alamat").innerHTML = "Address must be filled";
// 		bool = false;
// 	} else if (address.indexOf("Street") == -1) {
// 		document.getElementById("err-alamat").innerHTML =
// 			"Address must be contains 'Street'";
// 		bool = false;
// 	} else {
// 		document.getElementById("err-alamat").innerHTML = "";
// 	}

// 	if (bool) {
// 		alert("Register Success");
// 		location.reload();
// 	}
// }

function registAccount() {
  var userName = document.getElementById('Username').value;
  var email = document.getElementById('Email').value;
  var region = document.getElementById('region').value;
  var DOB = document.getElementById('dateOfBirth').value;
  var pass = document.getElementById('Password').value;

  if(userName === "") {
    document.getElementById('username-null').innerHTML = "This must be filled!";
  } else if(userName.length < 5) {
    document.getElementById('username-null').innerHTML = "Username must be more than 5 characters!";
  }

  if(email === "") {
    document.getElementById('email-null').innerHTML = "This must be filled!";
  } 
  if(email.includes('@') || email.includes('.com')) {
    document.getElementById('email-null').innerHTML = "";
  } else {
    document.getElementById('email-null').innerHTML = "Invalid email format!";
  } 

  if(pass === "") {
    document.getElementById('pass-null').innerHTML = "This must be filled!";
  }

  if(region === "NULL") {
    document.getElementById('region-null').innerHTML = "Please select your region!";
  }

  if(DOB === "") {
    document.getElementById('dob-null').innerHTML = "This must be filled!";
  }
}
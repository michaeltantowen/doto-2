function registAccount() {
  var userName = document.getElementById('regist-form').Username.value;
  var email = document.getElementById('regist-form').Email.value;
  
  if(userName && email) {
    // validation 1 that number is not allowed in username
    for(var i = 0; i < userName.length; i++) {
      if(userName[i] >= 0 && userName[i] <= 9) {
        alert('Username cannot contain any number!');
        break;
      }
    }
    // validation 2 that email must contain '@' character and ended with '.com'
    if(email.includes("@") == true && email.includes(".com") == true) {
      console.log(userName + email);
    } else {
      alert("Invalid email please include '@' and include '.com'");
    }
  }
}
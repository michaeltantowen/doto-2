//Navbar
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".nav ul");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("show");
});
// End Navbar

// Contact Us
function sendmsg() {
	var email = document.getElementById("form-msg").email.value;
	var msg = document.getElementById("form-msg").message.value;
	if (email && msg) {
		let ask = confirm("Send message?");
		if (ask) {
			console.log(email + " : " + msg);
			alert("Your message has been sent");
			document.getElementById("form-msg").reset();
		}
	}
}
// End Contact Us
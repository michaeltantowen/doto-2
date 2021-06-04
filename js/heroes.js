function openHero(word, heroType) {
	let i, heroPart, 	type;

	type = document.getElementsByClassName('hero-type');
	for(i = 0; i < type.length; i++) {
		type[i].className = type[i].className.replace(" active", "");
	}

	heroPart = document.getElementsByClassName("type");
	for (i = 0; i < heroPart.length; i++) {
		heroPart[i].style.display = "none";
	}

	document.getElementById(heroType).style.display = "flex";
	word.currentTarget.className += " active";
}
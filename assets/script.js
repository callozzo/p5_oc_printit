const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrows = document.querySelectorAll(".arrow");
const dots = [...document.querySelectorAll(".dot")];
let img = document.querySelector(".banner-img");
let imageActive = 0;
let phrase = document.getElementById("string")

arrows.forEach(arrow => {
	arrow.addEventListener("click", (e) => { // cliquer = "click" + activation de "e"
		imageActive += (e.target.id === "next" ? 1 : -1); //si l'id cliquer est different de "next" = -1, sinon +1
		imageActive = (imageActive + slides.length) % slides.length; // produit en croix pour definir "imageActive"
		img.src = `./assets/images/slideshow/${slides[imageActive].image}`; //ctrl+alt+7 pour renseigner le src et y ajouter une fonction 
		phrase.innerHTML = slides[imageActive].tagLine;
		dots.forEach (dot => dot.classList.remove("dot_selected"));
		dots[imageActive].classList.add("dot_selected");
	})
});
const burgerBtn = document.querySelector(".burger-btn")
const nav = document.querySelector(".nav")
const navLinks = document.querySelectorAll(".nav__item")
const navBtnBars = document.querySelector(".burger-btn__bars")
const allSections = document.querySelectorAll(".section")
const footerYear = document.querySelector(".footer__year")


const navigation = () => {
	nav.classList.toggle("nav--active")
   navBtnBars.classList.remove("black-bars-color")

	navLinks.forEach(navLink => {
		navLink.addEventListener("click", () => {
			nav.classList.remove("nav--active")
		})
	})
   
   handleNavItemAnimation()
}

const handleNavItemAnimation = () => {
   
   let delayTime = 0

   navLinks.forEach(navLink => {
      navLink.classList.toggle("nav-items-animation")
      navLink.style.animationDelay = "." + delayTime + "s"
      delayTime++
   });
}

const handleObserver = () => {
   const currentSection = window.scrollY

   allSections.forEach(section => {
      if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
         navBtnBars.classList.add("black-bars-color")
      } else if (!section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
         navBtnBars.classList.remove("black-bars-color")
      }
   });
}

const handleCurentYear = () => {
   const year = (new Date).getFullYear()
   footerYear.innerText = year
}

handleCurentYear()
burgerBtn.addEventListener("click", navigation)
window.addEventListener("scroll", handleObserver)

var currentMedia = window.innerWidth
const navBar = document.querySelector('.navbar-container')
const menuSVG = document.querySelector('.menusvg')
var menu = document.createElement('div')

menu.setAttribute('class', 'menu')
navBar.parentNode.insertBefore(menu, navBar)
menu.appendChild(navBar)
menu.appendChild(menuSVG)


function myFunction(menu) {
  currentMedia = window.innerWidth
  if (currentMedia <= '480') {
    menu.classList.add('visible')
  } 
  else {
    menu.classList.remove('visible')
  }
}

window.addEventListener('resize', function(e) {
  myFunction(menu)
})

menu.addEventListener('focus', function(e) {
  menu.classList.add('focused')
})
menu.addEventListener('blur', function(e) {
  menu.classList.remove('focused')
})

myFunction(menu)

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
  
  activateMenuAtCurrentSection(inicio)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
 
}

function showBackToTopOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function openMenu() {
  body.classList.add('menu-expanded')
}
function closeMenu() {
  body.classList.remove('menu-expanded')
}
function activateMenuAtCurrentSection (section){
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries)
    { menuElement.classList.add('active')
  }

}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #inicio,
 #inicio img ,
 #inicio .box-big,
 #services,
 #service .text,
 #service .service-block
 `)


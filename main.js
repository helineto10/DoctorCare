window.addEventListener('scroll', onScroll)
onScroll()


function onScroll(){
    showNavOnScroll()
    showBackToTopButonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    // Linha Alvo
    const targetLine = scrollY + innerHeight / 2
    
    // Verificar se a seçao passou da linha
    // Dados que vou precisar
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    // O topo da seção chegou o ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // Verificar se a base está abaixo da linha Alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limites da seçao
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}


function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll');
    }else{
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButonOnScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
        document.body.classList.add('menu-expanded');
}

function closeMenu(){
        document.body.classList.remove('menu-expanded');
}


ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about,
#about .header,
#about .content,
#contact .col-a,
#contact .col-b`);
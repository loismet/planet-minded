const hamburgerButton = document.querySelector('.hamburgerButton')
const closeHamburger = document.querySelector('nav button')
const navigation = document.querySelector('nav')


const handleHamburgerClick = () => {
    navigation.classList.add('showNav');
}

const handleHamburgerClose = () => {
    navigation.classList.remove('showNav');
}


hamburgerButton.addEventListener('click', handleHamburgerClick);
closeHamburger.addEventListener('click', handleHamburgerClose);
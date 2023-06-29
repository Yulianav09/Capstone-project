// const programArray = []
const featuredSpeakers = [
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  }]
const hamburgerContainer = document.querySelector('#hamburgerContainer');
const nav = document.querySelector('nav');
const navigationLinks = document.querySelector('.navigationLinks');
const hamburgerBar = document.querySelectorAll('.hamburgerBar');
const closebutton = document.querySelector('#closebutton');
const defendersContainer = document.querySelector("#defendersContainer");
const defenderButton = document.querySelector(".defenderButton");
const homeLink = document.querySelector("#homeLink");
const aboutLink = document.querySelector("#aboutLink");
const home = document.querySelector("#home");
const about = document.querySelector("#about");


featuredSpeakers.forEach((speaker, index) => {
  const speakerCard= document.createElement('article');
  speakerCard.classList.add('speakerContainer')
  if (index > 1) speakerCard.classList.add('onlyDesktop')
  speakerCard.innerHTML = `
  <div class="imgdefender"><img src="${speaker.featureImage}" alt="Animal Defender 1"></div>
  <div class="defendersCards">
    <h3>${speaker.name}</h3>
    <p class="defendersProfession">${speaker.profession}</p>
    <hr>
    <p class="desfenderDescription">${speaker.description}</p>
  </div>`
  defendersContainer.appendChild(speakerCard);
} )

const hiddenCards = document.querySelectorAll(".speakerContainer.onlyDesktop")

defenderButton.addEventListener('click', () => {
  hiddenCards.forEach(element => {element.classList.toggle("onlyDesktop")})
})

homeLink.addEventListener('click', () => {
  home.classList.remove('hidden')
  about.classList.add('hidden')
})
aboutLink.addEventListener('click', () => {
  home.classList.add('hidden')
  about.classList.remove('hidden')
})

hamburgerContainer.addEventListener('click', () => {
  if (navigationLinks.classList.contains('onlyDesktop')) {
    navigationLinks.classList.remove('onlyDesktop');
    homeLink.classList.remove('onlyDesktop');
    nav.classList.add('navMobile');
    for (let i = 0; i < hamburgerBar.length; i += 1) {
      hamburgerBar[i].classList.add('hidden');
    }
    closebutton.classList.remove('hidden');
  } else {
    nav.classList.remove('navMobile');
    navigationLinks.classList.add('onlyDesktop');
    homeLink.classList.add('onlyDesktop');
    for (let i = 0; i < hamburgerBar.length; i += 1) {
      hamburgerBar[i].classList.remove('hidden');
    }
    closebutton.classList.add('hidden');
  }
});

function closewindow() {
  nav.classList.remove('navMobile');
  navigationLinks.classList.add('onlyDesktop');
  for (let i = 0; i < hamburgerBar.length; i += 1) {
    hamburgerBar[i].classList.remove('hidden');
  }
  closebutton.classList.add('hidden');
}

navigationLinks.addEventListener('click', closewindow);
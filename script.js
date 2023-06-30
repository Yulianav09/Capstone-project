// const programArray = []
const featuredSpeakers = [
  {
    name: 'Juan Carlos Martínez',
    profession: 'He is the founder and director of the organization Animal Defenders International (ADI) in Colombia.',
    description: 'Martinez dedicates to combating the use of animals in shows and promoting animal protection laws.',
    featureImage: './src/Juan carlos.png',
  },
  {
    name: 'Matilde Arjona Caseres',
    profession: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum veritatis quisquam totam, officii.',
    description: 'Ipsum veritatis quisquam totam, officiis quas, exercitationem, tenetur corrupti obcaecati.',
    featureImage: './src/Matilde 1.png',
  },
  {
    name: 'Luisa Andrade Marin',
    profession: 'Ipsum veritatis quisquam totam, officiis quas, exercitationem, tenetur corrupti obcaecati.',
    description: 'placeat suscipit. Assumenda, doloribus tempora.Lorem ipsum dolor sit, amet consectetu.',
    featureImage: './src/Luisa 1.png',
  },
  {
    name: 'Fausto Mosquera Arias',
    profession: 'placeat suscipit. Assumenda, doloribus tempora.Lorem ipsum dolor sit.',
    description: 'amet consectetur adipisicing elit. Ipsum veritatis quisquam totam, officiis quas, exercitationem.',
    featureImage: './src/Fausto 1.png',
  },
  {
    name: 'Catalina Machado Alarcon',
    profession: 'elit, Ipsum veritatis quisquam totam, officiis quas, exercitationem placeat suscipit. Assumenda.',
    description: 'placeat suscipit, Assumenda ipsum dolor sit,Ipsum veritatis quisquam totam, officiis exercitationem.',
    featureImage: './src/Catalina 1.png',
  },
  {
    name: 'Jose Luis Cardona Alvarez',
    profession: 'oloribus tempora,Lorem ipsum dolor sit, amet consectetur adipisicing elit Ipsum.',
    description: 'consectetur adipisicing elit. Ipsum veritatis quisquam totam, officiis quas, exercitationem.',
    featureImage: './src/Jose Luis 1.png',
  }]
const hamburgerContainer = document.querySelector('#hamburgerContainer');
const nav = document.querySelector('nav');
const navigationLinks = document.querySelector('.navigationLinks');
const hamburgerBar = document.querySelectorAll('.hamburgerBar');
const closebutton = document.querySelector('#closebutton');
const defendersContainer = document.querySelector("#defendersContainer");
const defenderButton = document.querySelector(".defenderButton");
const homeLink = document.querySelector(".homeLink");
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
  homeLink.classList.add('onlyDesktop');
  for (let i = 0; i < hamburgerBar.length; i += 1) {
    hamburgerBar[i].classList.remove('hidden');
  }
  closebutton.classList.add('hidden');
}

navigationLinks.addEventListener('click', closewindow);
homeLink.addEventListener('click', closewindow);
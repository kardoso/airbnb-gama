import { setRooms } from './loadRooms.js'
import { initMap } from './map.js'

document.addEventListener('click', function (evt) {
  if (evt.target.className.includes('experience-item')) {
    let allElements = document.getElementsByClassName('experience-item')
    Object.keys(allElements).map((e) =>
      allElements[e].classList.remove('experience-item--active')
    )
    let elementToActive = evt.target
    elementToActive.classList.add('experience-item--active')
  }

  if (evt.target.className.includes('search-bar-info')) {
    document.getElementById('search-bar').classList.add('search-bar--active')
    document.getElementById('search-input').focus()
  } else {
    document.getElementById('search-bar').classList.remove('search-bar--active')
  }
})

window.onscroll = () => {
  if (window.innerWidth >= 860) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById('header').classList.add('header--fixed')
      document
        .getElementById('main-container')
        .classList.add('container--header-space')
    } else {
      document.getElementById('header').classList.remove('header--fixed')
      document
        .getElementById('main-container')
        .classList.remove('container--header-space')
    }

    if (
      document.body.scrollTop > 160 ||
      document.documentElement.scrollTop > 160
    ) {
      document.getElementById('nav-host-acm').style.display = 'none'
      document.getElementById('nav-host-exp').style.display = 'none'
      document.getElementById('nav-login').style.display = 'none'
    } else {
      document.getElementById('nav-host-acm').style.display = 'inline-flex'
      document.getElementById('nav-host-exp').style.display = 'inline-flex'
      document.getElementById('nav-login').style.display = 'inline-flex'
    }
  } else {
    document.getElementById('header').classList.remove('header--fixed')
    document
      .getElementById('main-container')
      .classList.remove('container--header-space')
  }
}

window.addEventListener('load', () => {
  let map = initMap()
  setRooms(document, map)
})

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

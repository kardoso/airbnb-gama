const ROOMS_API = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

export const setRooms = async (document) => {
  await fetch(ROOMS_API)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      var rooms = document.getElementById('rooms')

      data.forEach((room) => {
        var div = document.createElement('div')
        div.className = 'card'
        div.style.width = '18rem'

        var name = document.createElement('p')
        name.className = 'card-text'
        name.classList.add('room-name')
        name.innerHTML = `<b>${room.name}</b>`

        var type = document.createElement('p')
        type.className = 'card-text'
        type.innerHTML = `<i>${room.property_type}</i>`

        var price = document.createElement('p')
        price.className = 'card-text'
        price.innerHTML = `<b>R$${room.price}</b>/dia`

        var body = document.createElement('div')
        body.className = 'card-body'
        body.appendChild(name)
        body.appendChild(type)
        body.appendChild(price)

        var img = document.createElement('img')
        img.className = 'card-img-top'
        img.src = room.photo.replace('xx_large', 'small')
        img.alt = room.name

        div.appendChild(img)
        div.appendChild(body)
        rooms.appendChild(div)
      })
    })
}

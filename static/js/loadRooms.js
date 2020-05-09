import { addPlaceToMap } from './map.js'

const ROOMS_API = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
const PLACES_API =
  'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/master/json/municipios.json'

export const setRooms = async (document, map) => {
  await fetch(ROOMS_API)
    .then((response) => {
      return response.json()
    })
    .then((rooms) => {
      var roomsDiv = document.getElementById('rooms')
      setRoomsCity(rooms).then((roomsWithCity) => {
        roomsWithCity.forEach(
          ({ name, city_name, photo, price, lat, lng, property_type }) => {
            photo = photo
              .replace('xx_large', 'small')
              .replace('x_large', 'small')

            var cardDiv = document.createElement('div')
            cardDiv.className = 'card'
            cardDiv.style.width = '18rem'

            var nameParagraph = document.createElement('p')
            nameParagraph.className = 'card-text'
            nameParagraph.classList.add('room-name')
            nameParagraph.innerHTML = `<b>${name}</b>`

            var cityParagraph = document.createElement('p')
            cityParagraph.className = 'card-text'
            cityParagraph.classList.add('room-city')
            cityParagraph.innerHTML = `<b>${city_name}</b>`

            var typeParagraph = document.createElement('p')
            typeParagraph.className = 'card-text'
            typeParagraph.innerHTML = `<i>${property_type}</i>`

            var priceParagraph = document.createElement('p')
            priceParagraph.className = 'card-text'
            priceParagraph.innerHTML = `<b>R$${price}</b>/dia`

            var bodyDiv = document.createElement('div')
            bodyDiv.className = 'card-body'
            bodyDiv.appendChild(nameParagraph)
            bodyDiv.appendChild(cityParagraph)
            bodyDiv.appendChild(typeParagraph)
            bodyDiv.appendChild(priceParagraph)

            var imgElement = document.createElement('img')
            imgElement.className = 'card-img-top'
            imgElement.src = photo
            imgElement.alt = name

            cardDiv.appendChild(imgElement)
            cardDiv.appendChild(bodyDiv)
            roomsDiv.appendChild(cardDiv)

            addPlaceToMap(
              map,
              lat,
              lng,
              `${name}<br/>${city_name}<br/>
            <img src='${photo}' alt='${name}'/>`
            )
          }
        )
      })
    })
}

export const setRoomsCity = async (rooms) => {
  let roomsWithCity = {}
  await fetch(PLACES_API)
    .then((response) => {
      return response.json()
    })
    .then((cities) => {
      let newData = []
      rooms.forEach((item) => {
        let position = Math.floor(Math.random() * cities.length)
        let city = cities[position]

        item['city_name'] = city.nome
        item['lat'] = city.latitude
        item['lng'] = city.longitude

        newData.push(item)
      })
      roomsWithCity = newData
    })
  return roomsWithCity
}

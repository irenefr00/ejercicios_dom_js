//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (let country of countries) {
  const li = document.createElement('li')
  li.innerText = country
  ul.appendChild(li)
}
document.body.appendChild(ul)
//1.2
const eliminar = document.querySelector('.fn-remove-me')
eliminar.remove()
//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const array = document.querySelector('[data-function="printHere"]')
const ul2 = document.createElement('ul')
for (let car of cars) {
  const li = document.createElement('li')
  li.innerText = car
  ul2.appendChild(li)
}
array.appendChild(ul2)
//1.4
const countriess = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const container = document.body
for (let i = 0; i < countriess.length; i++) {
  const countryy = countriess[i]
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.innerText = countryy.title
  const img = document.createElement('img')
  img.src = countryy.imgUrl
  img.alt = countryy.title
  div.appendChild(h4)
  div.appendChild(img)
  container.appendChild(div)
}
//1.5
const boton = document.createElement('button')
const textoBoton = document.createTextNode('Eliminar')
boton.appendChild(textoBoton)

boton.addEventListener('click', () => {
  const divs = document.querySelectorAll('div')
  if (divs.length > 5) {
    divs[divs.length - 1].remove()
  }
})

document.body.appendChild(boton)
//1.6
const divs = document.querySelectorAll('div')
divs.forEach((div, index) => {
  if (index !== 0) {
    const boton = document.createElement('button')
    const textoBoton = document.createTextNode('Eliminar')
    boton.appendChild(textoBoton)

    boton.addEventListener('click', () => {
      div.remove()
    })

    div.appendChild(boton)
  }
})

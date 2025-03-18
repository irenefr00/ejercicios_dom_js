//1.1
const btn = document.querySelector('#btnToClick')
btn.addEventListener('click', (ev) => {
  console.log(ev)
})
//1.2
const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', () => {
  console.log('Valor del input (focus):', inputFocus.value)
})

//1.3
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', () => {
  console.log('Valor del input (input):', inputValue.value)
})
//1.4
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const ul = document.createElement('ul')
for (let album of albums) {
  const li = document.createElement('li')
  li.innerText = album
  ul.appendChild(li)
}
document.body.appendChild(ul)

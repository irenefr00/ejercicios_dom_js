//2.1
let div = document.createElement('div')
console.log(div)
document.body.appendChild(div)

//2.2
let div2 = document.createElement('div')
div2.innerHTML = `<p>  </p>`
document.body.appendChild(div2)
console.log(div2)
//2.3
let div3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let p = document.createElement('p')
  div3.appendChild(p)
}
document.body.appendChild(div3)
console.log(div3)
//2.4
let p = document.createElement('p')
let texto = document.createTextNode('Soy dinánmico!')
p.appendChild(texto)
document.body.appendChild(p)
console.log(p)
//2.5
let wubba = document.querySelector('.fn-insert-here')
wubba.innerText = 'Wubba Lubba dub dub'
console.log(wubba)
//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let app of apps) {
  const li = document.createElement('li')
  li.innerText = app
  ul.appendChild(li)
}
document.body.appendChild(ul)
//2.7
let quitar = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < quitar.length; i++) {
  quitar[i].remove()
}
//2.8
let div4 = document.querySelector('div')
let div5 = document.querySelector('div')[1]
div4.insertAdjacentHTML('afterend', '<p>Voy en medio!</p>')

//2.9
let divInsert = document.querySelectorAll('div.fn-insert-here')
divInsert.forEach((div) => {
  div.insertAdjacentHTML('afterbegin', '<p>Voy dentro!</p>')
})

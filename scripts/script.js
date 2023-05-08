const productsArray = [
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: 'R$99,00',
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: 'Mario',
    price: 'R$275,00',
    type: 'Paintings'
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: 'PacMan',
    price: 'R$160,00',
    type: 'Paintings'
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: 'Smart Watch',
    price: 'R$120,00',
    type: 'Paintings'
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: 'Godzilla',
    price: 'R$700,00',
    type: 'Action Figures'
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: 'Groot',
    price: 'R$950,00',
    type: 'Action Figures'
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: 'Homem de Ferro',
    price: 'R$1030,00',
    type: 'Action Figures'
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: 'Sr Yoda',
    price: 'R$870,00',
    type: 'Action Figures'
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: 'Wolverine',
    price: 'R$510,00',
    type: 'Action Figures'
  }
];


//Funcoes que separa os produtos por categoria e adiciona em um array de objetos
function separatingPaintings(productsArray) {

  let productsPaintings = []

  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === 'Paintings') {
      productsPaintings.push(productsArray[i])
    }
  }
  return productsPaintings
}

function separatingActionFigures(productsArray) {

  let productsActionFigures = []

  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === 'Action Figures') {
      productsActionFigures.push(productsArray[i])
    }
  }
  return productsActionFigures
}

//funcoes que adiciona os produtos separadamente por categoria ao site 
function addProductsPainting(productsPainting) {

    for (let i = 0; i < productsPainting.length; i++) {
      let select = {}
      let product = document.createElement('li')
      let productImg = document.createElement('img')
      let productName = document.createElement('h6')
      let productPreco = document.createElement('p')
      
      select = document.querySelector('ul')
      productImg.setAttribute('src', productsPainting[i].image)
      productName.innerText = productsPainting[i].name
      productPreco.innerText = productsPainting[i].price
      
      product.append(productImg, productName, productPreco)
      select.append(product)
    }
}

function addProductsActionFigures(productsActionFigures) {
  
  for (let i = 0; i <productsActionFigures.length; i++) {
    let select = {}
    let product = document.createElement('li')
    let productImg = document.createElement('img')
    let productName = document.createElement('h6')
    let productPreco = document.createElement('p')
    
    select = document.getElementById('ul-two')
    productImg.setAttribute('src', productsActionFigures[i].image)
    productName.innerText = productsActionFigures[i].name
    productPreco.innerText =productsActionFigures[i].price

    product.append(productImg, productName, productPreco)
    select.append(product)
  }
}

//armazenando um array de objetos que foi seperado por funcoes
const productsPainting = separatingPaintings(productsArray)
const productsActionFigures = separatingActionFigures(productsArray)
//funcoes que cria e adicionam os elementos na tela
addProductsActionFigures(productsActionFigures)
addProductsPainting(productsPainting)


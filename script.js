
const botao = document.querySelector('#button-mostrarTudo');
const buttonMap = document.querySelector('#button-map')
const buttonReduce = document.querySelector('#button-reduce')
const buttonFiltrar = document.querySelector('#button-filtrar')
const ul = document.querySelector('ul');
let myList = ''

const menuOptions = [

    { name: 'X-Salada', price: 30, vegan: false, src: './image/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './image/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './image/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './image/monstruoso-vegan.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './image/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './image/monstruoso-vegan.png' },

];

function buscar(productarray) {
    myList = ''
    productarray.forEach((product) => {

        myList += `
            
            <li>
                <img src=${product.src} alt="">
                <h3 id="h3">${product.name}</h3>
                <h2 id="h2">R$ ${product.price.toFixed(2)}</h2>
           </li>
            
            `
        ul.innerHTML = myList

    })
}

function mapDesconto() {
    const novoPreco = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    buscar(novoPreco)
}

function somar() {
    const totalValue = menuOptions.reduce((acc, atual) => acc + atual.price, 0)

    ul.innerHTML =

        `
    <li>
               
        <h2 style='color: white'> Valor Total <br> R$ ${totalValue.toFixed(2)}</h2>
    </li>
    
    
    `
}

function filtrar() {

    const filtrando = menuOptions.filter((product) => product.vegan === true)

    buscar(filtrando)
}

buttonFiltrar.addEventListener('click', filtrar)
buttonReduce.addEventListener('click', somar)
buttonMap.addEventListener('click', mapDesconto)
botao.addEventListener('click', () => buscar(menuOptions))


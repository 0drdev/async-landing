/**
 * 
 * En este desafío debes crear una función que usando fetch haga llamadas a una API y esta función debe contar las siguientes características:

Realiza la transformación de datos a JSON
Solo permite hacer peticiones tipo GET
Recibir como parámetro de entrada un string que será la URL
Validar que una URL sea correcta, si no lo es debe lanzar un error con el mensaje Invalid URL
Si la URL tiene el formato correcto, pero no existe, debería lanzar un error con el mensaje Something was wrong
Recuerda, para lanzar el error debes usar throw, ejemplo:


 */

const API_PRODUCTS = 'https://fakestoreapi.com/products'

const content = null || document.getElementById('content')


async function fetchDataProducts(urlApi) {
    try {
        const response = await fetch(urlApi)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

async function DrawProducts() {
    try {
        const products = await fetchDataProducts(API_PRODUCTS)
        let view = products.map(product => `
            <div class="card col-3 m-2">
                <img src="${product.image}" class="card-img-top pt-2" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${product.title}</h5>
                    <p class="card-text"><strong>Price: $${product.price}</strong></p>
                </div>
            </div>
            `).join('')
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
}

DrawProducts()

fetch('js/productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos)
    })

const containerProductos = document.querySelector('#container-productos');
const containerDestacados = document.querySelector('#container-destacados');
const containerVelas = document.querySelector('#container-velas');
const containerDifusores = document.querySelector('#container-difusores');


function cargarProductos() {

    const destacados = productos.filter(p => p.destacado === true)
    const velas_aromaticas = productos.filter(p => p.categoria === "Velas Aromaticas")
    const difusores_aromaticos = productos.filter(p => p.categoria === "Difusores Aromaticos")

    destacados.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('product-card', 'col-6', 'col-md-3')

        div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded">
                    <p class="fw-medium m-0">${producto.nombre}</p>
                    <p class="fw-semibold m-0">$${producto.precio}</p>
            `;



        containerDestacados.append(div);
    })

    velas_aromaticas.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('product-card', 'col-6', 'col-md-3', 'col-lg-2')

        div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded">
                    <p class="fw-medium m-0">${producto.nombre}</p>
                    <p class="fw-semibold m-0">$${producto.precio}</p>
            `;

        containerVelas.append(div);
    })

    difusores_aromaticos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('product-card', 'col-6', 'col-md-3', 'col-lg-2')

        div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded">
                    <p class="fw-medium m-0">${producto.nombre}</p>
                    <p class="fw-semibold m-0">$${producto.precio}</p>
            `;

        containerDifusores.append(div);
    })

    productos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('product-card', 'col-6', 'col-md-3', 'col-lg-2')

        div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded">
                    <p class="fw-medium m-0">${producto.nombre}</p>
                    <p class="fw-semibold m-0">$${producto.precio}</p>
            `;

        containerProductos.append(div);
    })

}
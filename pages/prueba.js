
// crearemos funcionalidad a la tienda, que se añadan al 
// carrito todo los productos que seleccionamos en la cesta 

// boton Añadir 
const botonAñadir = document.querySelector('.Añadir');
// console.log(botonAñadir);

// lista de todos los contenedores 
const containerProduct = document.querySelector('.sectionthree');
console.log(containerProduct);
// contenedor de nuevos productos
const rowProduct = document.querySelector('.all-product')

let allProduct = [];

containerProduct.addEventListener('click', e => {

    if (e.target.classList.contains('Añadir')) {
        const product = e.target.parentElement;

        let imgCafeComprado = product.querySelector('img').src;
        let nombreComprado = product.querySelector('button').innerHTML;
        let priceComprado = product.querySelector('p').innerHTML;

        allProduct.push(
            {
                cafeCompradoShow: imgCafeComprado,
                nameBuys: nombreComprado,
                priceBuys: priceComprado,
                key: nombreComprado
            }

        )
        console.log(allProduct);

        const cafeComprado = {
            cafeCompradoShow: imgCafeComprado,
            nameBuys: nombreComprado,
            priceBuys: priceComprado,
            cantidad : 1
        }
        localStorage.setItem('cafeStorage', JSON.stringify(cafeComprado));
    };

})

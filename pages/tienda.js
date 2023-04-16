
// crearemos funcionalidad a la tienda, que se añadan al 
// carrito todo los productos que seleccionamos en la cesta 
// Botón "Añadir"
const btnAñadir = document.querySelector('.Añadir');

// Contenedor de todos los productos
const containerProduct = document.querySelector('.sectionthree');

// Contenedor de productos comprados
const rowProduct = document.querySelector('.all-product');

let allProduct = JSON.parse(localStorage.getItem('cafeStorage')) || [];

containerProduct.addEventListener('click', e => {

  if (e.target.classList.contains('Añadir')) {

    let quantity1 = document.querySelector('.iconCarrito2');
   
    if (e.target.classList.contains('Añadir')) {
      quantity1.innerText++;
    }

    if (quantity1.innerText == 0){
      const divQuantity = document.querySelector('.iconCarrito');
      console.log(divQuantity);
      divQuantity.style.visibility = 'visible';
    }
    
    const product = e.target.parentElement;

    let imgCafeComprado = product.querySelector('img').src;
    let nombreComprado = product.querySelector('button').innerHTML;
    let priceComprado = product.querySelector('p').innerHTML;
    let id = product.querySelector('span').innerHTML;

    let exists = false;
    allProduct.forEach(element => {
      if (element.nameBuys === nombreComprado) {
        element.cantidad++;
        exists = true;
      }
    });

    if (!exists) {
      allProduct.push({
        cafeCompradoShow: imgCafeComprado,
        nameBuys: nombreComprado,
        priceBuys: priceComprado,
        id:id ,
        cantidad: 1,
  
      });

    }




    console.log(allProduct);
    localStorage.setItem('cafeStorage', JSON.stringify(allProduct));

  }
});

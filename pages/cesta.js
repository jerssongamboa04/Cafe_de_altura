

// contenedor de nuevas Compras 
const allProductShow = document.querySelector('.all-newProduct');

const cafeStorage = JSON.parse(localStorage.getItem('cafeStorage')) || [];
console.log(cafeStorage);

//===== Funcionalidad de agregar productos al carrito ============

function actualizarLocalStorage() {
  localStorage.setItem('cafeStorage', JSON.stringify(cafeStorage));
}

function actualizarCarrito() {
  allProductShow.innerHTML = '';

  cafeStorage.forEach(product => {
    // Creo el div contenedor de cada producto nuevo
    const contenedorNuevoProduct = document.createElement('div');
    contenedorNuevoProduct.classList.add('all-product');

    // ===============Creo los elementos del contador=================

    // funcionalidad de disminuir con el boton - 
    const imgIconDisminuir = document.createElement('img');
    imgIconDisminuir.classList.add('btn-disminuir');
    imgIconDisminuir.src = '/asset/iconDisminuir.png';

    imgIconDisminuir.addEventListener('click', function () {

      if (product.cantidad !== 0) {
        product.cantidad--;
        containerQuantity.innerHTML = product.cantidad;
        let multiplicante = product.priceBuys;
        let multiplicador2 = multiplicante.substring(0, 4);
        priceCoffeStorage.innerHTML = (product.cantidad * Number(multiplicador2.replace(',', '.'))).toFixed(2).replace('.', ',') + ' €';
        actualizartitle();
        actualizarLocalStorage();

      }

      if (product.cantidad == 0) {
        const index = cafeStorage.findIndex(item => item.id === product.id);
        cafeStorage.splice(index, 1);
        contenedorNuevoProduct.remove();
        divisory.remove();
        actualizartitle();
        actualizarLocalStorage();
      }

    });

    const containerQuantity = document.createElement('div');
    containerQuantity.innerHTML = product.cantidad;
    containerQuantity.classList.add('number-contador');

    // funcionalidad de aumentar con boton + 
    const imgIconAumentar = document.createElement('img');
    imgIconAumentar.src = '/asset/iconAumentar.png';

    imgIconAumentar.addEventListener('click', function () {

      if (product.cantidad > 0) {
        product.cantidad++;
        containerQuantity.innerHTML = product.cantidad;
      }

      if (product.cantidad > 0) {
        let multiplicante = product.priceBuys;
        let multiplicador2 = multiplicante.substring(0, 4);
        priceCoffeStorage.innerHTML = (product.cantidad * Number(multiplicador2.replace(',', '.'))).toFixed(2).replace('.', ',') + ' €';
      };
      actualizartitle();
      actualizarLocalStorage();

    })

    // Creo el contenedor del contador y lo agrego los elementos
    const containerContador = document.createElement('div');
    containerContador.classList.add('container-contador');
    containerContador.append(imgIconDisminuir, containerQuantity, imgIconAumentar);

    // Creo la imagen del producto comprado y la agrego al contenedor
    const imgCafeStorage = document.createElement('img');
    imgCafeStorage.src = product.cafeCompradoShow;
    imgCafeStorage.style.background = 'white';
    imgCafeStorage.classList.add('imagen-compra');

    // Creo el contenedor de detalles del producto y agrego los elementos
    const divDetails = document.createElement('div');
    divDetails.classList.add('details-coffe');

    const nameCoffeStorage = document.createElement('button');
    nameCoffeStorage.innerHTML = product.nameBuys;
    nameCoffeStorage.classList.add('Laos');
    divDetails.appendChild(nameCoffeStorage);

    const textDescription = document.createElement('p');
    textDescription.innerText = 'Paquete de café, 250 gr';
    divDetails.appendChild(textDescription);

    // Creo el precio del producto comprado y lo agrego al contenedor
    let priceCoffeStorage = document.createElement('h3');
    priceCoffeStorage.id = 'multiplicador';
    priceCoffeStorage.innerHTML = product.priceBuys;

    const divisory = document.createElement('img');
    divisory.src = "/asset/Divider.png";

    // Aqui creamos un multiplicador de el precio por la cantidad de los productos
    if (product.cantidad > 0) {
      let multiplicante = product.priceBuys;
      let multiplicador2 = multiplicante.substring(0, 4);
      priceCoffeStorage.innerHTML = (product.cantidad * Number(multiplicador2.replace(',', '.'))).toFixed(2).replace('.', ',') + ' €';
    };

    // Agrego los contenedores y elementos al contenedor de nuevos productos
    contenedorNuevoProduct.append(containerContador, imgCafeStorage, divDetails, priceCoffeStorage);

    allProductShow.appendChild(contenedorNuevoProduct);
    allProductShow.appendChild(divisory);

  });

}


function actualizartitle() {
  let sumaTotal = 0;
  for (let i = 0; i < cafeStorage.length; i++) {
    sumaTotal += cafeStorage[i].cantidad;
    actualizarCarrito();
    actualizarLocalStorage();
  }
  const titleCesta = document.querySelector('#title-cesta');
  titleCesta.innerHTML = `Cesta (${sumaTotal})`;

  const quantity = document.querySelector('.iconCarrito2');
  quantity.innerHTML = sumaTotal;
  quantity.style.fontSize = "12px";
  quantity.style.visibility = 'visible';

  const divQuantity = document.querySelector('.iconCarrito');
  divQuantity.style.background = 'background: rgba(247, 245, 243, 0.1)';
  divQuantity.style.visibility = 'visible';
  
}

// Actualizo el carrito cuando cambian los datos en el almacenamiento local
window.addEventListener('storage', function (e) {
  actualizarCarrito();

});

// Llamo a la función actualizarCarrito para que muestre los productos en la página
actualizartitle();
actualizarCarrito();
actualizarLocalStorage();





// contenedor de nuevas Compras 
const allProductShow = document.querySelector('.all-newProduct');

const cafeStorage = JSON.parse(localStorage.getItem('cafeStorage')) || [];

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

    function disminuirProducto() {
      imgIconDisminuir.addEventListener('click', function () {
        if (product.cantidad !== 0) {
          product.cantidad--;
          containerQuantity.innerHTML = product.cantidad;
          let multiplicante = product.priceBuys;
          let multiplicador2 = multiplicante.substring(0, 4);
          priceCoffeStorage.innerHTML = (product.cantidad * Number(multiplicador2.replace(',', '.'))).toFixed(2).replace('.', ',') + ' €';
          actualizartitle();
          addCheckboxEvents();
          actualizarPrice();
          actualizarLocalStorage();
        }

        if (product.cantidad == 0) {
          const index = cafeStorage.findIndex(item => item.id === product.id);
          cafeStorage.splice(index, 1);
          contenedorNuevoProduct.remove();
          divisory.remove();
          actualizartitle();
          actualizarPrice();
          addCheckboxEvents();
          actualizarLocalStorage();
        }

      });
    }
    disminuirProducto();
    const containerQuantity = document.createElement('div');
    containerQuantity.innerHTML = product.cantidad;
    containerQuantity.classList.add('number-contador');

    // funcionalidad de aumentar con boton + 
    const imgIconAumentar = document.createElement('img');
    imgIconAumentar.src = '/asset/iconAumentar.png';

    function aumentarProduct() {
      imgIconAumentar.addEventListener('click', function () {

        if (product.cantidad > 0) {
          product.cantidad++;
          containerQuantity.innerHTML = product.cantidad;
          actualizarPrice();
          addCheckboxEvents()
        }

        if (product.cantidad > 0) {
          let multiplicante = product.priceBuys;
          let multiplicador2 = multiplicante.substring(0, 4);
          priceCoffeStorage.innerHTML = (product.cantidad * Number(multiplicador2.replace(',', '.'))).toFixed(2).replace('.', ',') + ' €';
        };
        actualizarPrice();
        actualizarLocalStorage();
        actualizartitle();
        addCheckboxEvents()
      })
    }
    aumentarProduct();

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

// ======== Creamos una funcion =======================
// que me actualice el precio sub total=================

function actualizarPrice() {
  let sumaSub = 0;
  for (let i = 0; i < cafeStorage.length; i++) {
    const product = cafeStorage[i];
    const price = parseFloat(product.priceBuys);
    const quantity = product.cantidad;
    const totalPrice = price * quantity;
    sumaSub += totalPrice;
  }
  const subTotalShow = document.querySelector('.priceSubTotal');
  subTotalShow.innerHTML = sumaSub.toFixed(2).replace('.', ',') + ' €';

  addCheckboxEvents()
  actualizarCarrito();
  actualizarLocalStorage();

  localStorage.setItem('totalCarrito', sumaSub.toFixed(2).replace('.', ',') + ' €');
}

// ========= creamos una funcion para actualizar el titulo ============
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

  localStorage.setItem('title', JSON.stringify(sumaTotal));

}
// ============ Creamos una funcion que me sume ==============
//  =========== el subtotal con el tipo de envio ============== 

const btnEnvioUrgente = document.querySelector('.product-table');
const checkBox2 = document.querySelector('#checkCobrado');
const checkBox1 = document.querySelector('#checkGratis')
const envio = document.querySelector('.envio');
const priceMostrado = document.querySelector('.priceSubTotal');
const envioCobro = 9;
const totalCarrito = document.querySelector('#totalCarrito');
const subLocal = localStorage.getItem('totalCarrito');
totalCarrito.innerHTML = subLocal;

function addCheckboxEvents() {


  checkBox1.addEventListener('change', function () {
    if (this.checked) {
      envio.innerHTML = 'GRATIS';
      const subLocal = localStorage.getItem('totalCarrito');
      totalCarrito.innerHTML = subLocal;
      actualizarPrice();
      actualizarCarrito();
      actualizarLocalStorage();
    }
   
  });

  checkBox2.addEventListener('change', function () {
    if (this.checked) {
      const subLocal = localStorage.getItem('totalCarrito');
      totalCarrito.innerHTML = subLocal + ' €';
      envio.innerHTML = envioCobro.toFixed(2).replace('.', ',') + '€';
      actualizarPrice();
      actualizarCarrito();
      actualizarLocalStorage();
    }
  });


  // Función para actualizar el total
  function actualizarTotal() {
    if (checkBox1.checked) {
      const subLocal = localStorage.getItem('totalCarrito');
      totalCarrito.innerHTML = subLocal;
    } else if (checkBox2.checked) {
      const subLocal = localStorage.getItem('totalCarrito');
      totalCarrito.innerHTML = (parseFloat(subLocal) + envioCobro).toFixed(2).replace('.', ',') + ' €';
    }
  }


  // Actualizar el total al cargar la página
  actualizarTotal();
}

// Actualizo el carrito cuando cambian los datos en el almacenamiento local
window.addEventListener('storage', function (e) {
  actualizarCarrito();

});

// Llamo a la función actualizarCarrito para que muestre los productos en la página

addCheckboxEvents();
actualizarPrice();
actualizartitle();
actualizarCarrito();
actualizarLocalStorage();



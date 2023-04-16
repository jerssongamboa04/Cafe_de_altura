
// ================== Section one ======================

// creo un evento al boton origenes que me dirija a la tienda

const origenes = document.querySelector('.source');
// console.log(origenes);

origenes.addEventListener('click', function () {
    window.location.href = "pages/tienda.html";
})


// creo un evento al boton comprarCafe que me dirija a la cesta

const comprarCafe = document.querySelector('.purchase')
// console.log(comprarCafe);

comprarCafe.addEventListener('click', function () {
    window.location.href = "pages/cesta.html";
})

// ================== Section three ======================


//  agrego un evento a la img row para que me dirija a la tienda
const rowTienda = document.querySelector('.see')
// console.log(rowTienda);

rowTienda.addEventListener('click', function () {
    window.location.href = "pages/tienda.html";
})

// le agrego un style "pointer" al cursor 
rowTienda.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
});


// ================== Section four ======================

// funcionalidad del parrafo desplegable para las FAQ
const container = document.querySelector('.containerthree');
const text = document.querySelector('.pFaq');
const selection = document.querySelector('.selection');

container.addEventListener('click', e => {
    if (e.target.classList.contains('iconAbove')) {
        const parent = e.target.parentElement.parentElement;
        const text2 = parent.querySelector('p');
        const selection = e.target.parentElement.parentElement;
        const icon = e.target.parentElement.querySelector('img');

        if (text2.style.display !== "block") {
            text2.style.display = "block";
            icon.src = "/asset/Icon (2).png";
        } else {
            text2.style.display = "none";
            icon.src = "/asset/Icon (3).png";
        }
    }
});

//  agrego un evento a la img row para que me dirija al formulario de contacto
const resolvemos = document.querySelector('.doubt')
// console.log(resolvemos);

resolvemos.addEventListener('click', function () {
    window.location.href = "#sectionsix";
})

// le agrego un style "pointer" al cursor 
resolvemos.addEventListener("mouseover", function () {
    this.style.cursor = "pointer";
});

// ================== Section formularios validacion ======================

const formCafe = document.querySelector('#formulario')

const input = document.querySelectorAll('#formulario input')

const inputEnviar = document.querySelector('.kia');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {

    switch (e.target.name) {

        case "name2":
            if (expresiones.usuario.test(e.target.value)) {
                const name2 = document.querySelector('#name2');
                name2.style.border = "1px solid rgba(63, 143, 107, 1)";
            }

            break;

        case "email":

            if (expresiones.correo.test(e.target.value)) {
                const email = document.querySelector('#email');
                email.style.border = "1px solid rgba(63, 143, 107, 1)";
            }

            break;
        case "phone_number":

            if (expresiones.telefono.test(e.target.value)) {
                const telefono = document.querySelector('.apple');
                telefono.style.border = "1px solid rgba(63, 143, 107, 1)";
            }
            break;

        case "mensaje":

            if (expresiones.usuario.test(e.target.value)) {
                const textarea = document.querySelector('#mensaje');
                textarea.style.border = "1px solid rgba(63, 143, 107, 1)";
            }
            break;
    }
}

input.forEach((input) => {

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})

formCafe.addEventListener('submit', (e) => {
    e.preventDefault();

    const name2 = document.querySelector('#name2');
    name2.style.border = "rgba(63, 143, 107, 1)";
    const email = document.querySelector('#email');
    email.style.border = "1px solid #D1D5DB";
    const textarea = document.querySelector('#mensaje');
    textarea.style.border = "1px solid #D1D5DB";
    const telefono = document.querySelector('.apple');
    telefono.style.border = "1px solid #D1D5DB";

    formCafe.reset();
});


/*===========================carrito ======================= */
document.addEventListener('DOMContentLoaded', function () {
    const tarjetas = document.querySelectorAll('.contenido-tarjeta');

    tarjetas.forEach(function (tarjeta) {
        const stars = Array.from(tarjeta.querySelectorAll('.star'));

        stars.forEach(function (star, index) {
            star.addEventListener('click', function () {
                stars.forEach((s) => s.classList.remove('checked'));
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('checked');
                }
            });
        });
    });

    const botonesAgregar = document.querySelectorAll('.boton-agregar');

    botonesAgregar.forEach(function (boton) {
        boton.addEventListener('click', function () {
            // Obtén la información de la tarjeta actual
            const tarjetaSeleccionada = boton.closest('.tarjeta');
            const imagenSeleccionada = tarjetaSeleccionada.querySelector('.imgTarjetas').src;

            // Almacena la información en el localStorage para usarla en la página de productos
            localStorage.setItem('tarjetaSeleccionada', JSON.stringify({ imagen: imagenSeleccionada }));

            // Redirige a la página de productos
            window.location.href = "../pages/productos.html";
        });
    });

    const btnLogin = document.getElementById('btnLogin');

    if (btnLogin) {
        btnLogin.addEventListener('click', function () {
            window.location.href = "../pages/inicio.html";
        });
    }

    const menuIcon = document.getElementById('menuIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuIconDropdown = document.getElementById('menuIconDropdown');

    menuIcon.addEventListener('click', function () {
        toggleMenu();
    });
    
    if (menuIconDropdown) {
        menuIconDropdown.addEventListener('click', function () {
            toggleMenu();
        });
    }

    function toggleMenu() {
        dropdownMenu.classList.toggle('show-menu');
        if (dropdownMenu.classList.contains('show-menu')) {
            dropdownMenu.classList.remove('slideOut');
            dropdownMenu.classList.add('slideIn');
        } else {
            dropdownMenu.classList.remove('slideIn');
            dropdownMenu.classList.add('slideOut');
        }
    }
});

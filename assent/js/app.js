// const linkUsuario = document.getElementById('linkUsuario');
// const title = document.getElementById('productosTitulo');


// linkUsuario.addEventListener('click', () => {
//     let userName = prompt('ingrese su nomobre de usuario');

//     localStorage.setItem('user', userName);

//     title.textContent = localStorage.getItem('user');
// })


const linkUsuario = $("#linkUsuario");
const title = $("#productosTitulo");

linkUsuario.click(() => {
    let userName = prompt('ingrese su nomobre de usuario');

    localStorage.setItem('user', userName);

    
    title.textContent = localStorage.getItem('user');
})

const nome = document.getElementById('nome')
const comentarios = document.getElementById('comentarios')
const formulario = document.getElementById('formulario')
const comentPost = document.getElementById('comentPost')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    p.innerHTML = `<strong>${nome.value}: </strong> ${textcomement.value}`
    comentPost.appendChild(p);
    nome.value = '';
    comentarios.value = '';
    nome.focus();


});

module.exports = script-comentario;


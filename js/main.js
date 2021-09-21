let nomeUsuario = document.querySelector('.avatar-content div');
nomeUsuario.innerHTML = '<strong>Giovana</strong>'


// let inputNome = document.getElementsByName('name')[0];
// inputNome.setAttribute('placeholder', 'Primeiro Nome');

let nomeUsuarioByName = document.getElementsByName('name')[0];
console.log(nomeUsuarioByName);
nomeUsuarioByName.setAttribute('placeholder', 'Primeiro Nome')

// ALTERANDO O CSS
//01

let inputs = document.querySelectorAll('.form-auth input');
for (let i = 0; i<inputs.length; i++) {
    inputs[i].style.cssText = 'border-radius: 8px; width: 85%';
}

//02
let botao = document.querySelector('.form-auth button');
botao.style.cssText = 'width: 100%';


//03
let cor = document.querySelector('body');
cor.style.backgroundColor = '#fafafa';

//04






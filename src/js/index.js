/*
    I - Se não preencher nada e CLICAR no botão, a caixa fica vermelho E aparece mensagem 'campo obrigatório';
    II - Se preencher tudo, o border fica verde;

*/

const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoTel = document.querySelector('#telefone');
const campoMensagem = document.querySelector('#mensagem');

const nomeErro = document.getElementById('nome-erro');
const emailErro = document.getElementById('email-erro');
const telefoneErro = document.getElementById('telefone-erro');
const mensagemErro = document.getElementById('mensagem-erro');

const botao = document.querySelector('.btn')


botao.addEventListener('click', function (event) {
    event.preventDefault()
    
    if (campoNome.value === ''){
        campoNome.classList.add('mostrar-erro');
        nomeErro.classList.add('mostrar-erro');
    } else {
        campoNome.classList.add('mostrar-sucesso');
    }

    if (campoEmail.value === ''){
        campoEmail.classList.add('mostrar-erro');
        emailErro.classList.add('mostrar-erro');
    } else {
        campoEmail.classList.add('mostrar-sucesso');
    }

    if (campoTel.value === ''){
        campoTel.classList.add('mostrar-erro');
        telefoneErro.classList.add('mostrar-erro');
    } else {
        campoTel.classList.add('mostrar-sucesso');
    }

    if (campoMensagem.value === ''){
        campoMensagem.classList.add('mostrar-erro');
        mensagemErro.classList.add('mostrar-erro');
    } else {
        campoMensagem.classList.add('mostrar-sucesso');
    }
})










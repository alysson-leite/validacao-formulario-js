/*
    I - Se não preencher nada e CLICAR no botão, a caixa fica vermelho E aparece mensagem 'campo obrigatório';
    II - Se preencher tudo, o border fica verde;

*/

const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoTel = document.querySelector('#telefone');
const campoMensagem = document.querySelector('#mensagem');

const campos = document.querySelectorAll('.input')
const botao = document.querySelector('.btn')


botao.addEventListener('click', function (event) {
    event.preventDefault()
    campos.forEach(function(element){
    if(element.value !== ''){
      element.classList.add('mostrar-sucesso');
      retirarMensagemErro(element);
      return;
    }
    mostrarMensagemErro(element);
})
})
  
function mostrarMensagemErro(element){
    const divErroId = `${element.id}-erro`
    const divErro = document.getElementById(divErroId);
    divErro.classList.add('mostrar-erro');
    element.classList.add('mostrar-erro')
}

function retirarMensagemErro(element){
    const divErroId = `${element.id}-erro`
    const divErro = document.getElementById(divErroId);
    divErro.classList.remove('mostrar-erro');
}

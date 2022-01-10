function somenteNumeros(num) {
  var er = /[^0-9.]/
  er.lastIndex = 0
  var campo = num
  if (er.test(campo.value)) {
    campo.value = ''
  }
}

let nome = document.querySelector('#nome')
let nomeLabel = document.querySelector('#nomeLabel')
let validnome = false

let endereco = document.querySelector('#endereco')
let enderecoLabel = document.querySelector('#enderecoLabel')
let validendereco = false

let cep = document.querySelector('#cep')
let cepLabel = document.querySelector('#cepLabel')
let validcep = false

let telefone = document.querySelector('#telefone')
let telefoneLabel = document.querySelector('#telefoneLabel')
let validtelefone = false

let email = document.querySelector('#email')
let emailLabel = document.querySelector('#emailLabel')
let validemail = false

let msgError = document.querySelector('#msgError')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => {
  if (nome.value.length < 2) {
    nomeLabel.setAttribute('style', 'color: red')
    nomeLabel.innerHTML = '<strong>Digite um nome válido</strong>'
    validnome = false
  } else {
    nomeLabel.setAttribute('style', 'color: #323232')
    nomeLabel.innerHTML = 'Nome'
    validnome = true
  }
})

endereco.addEventListener('keyup', () => {
  if (endereco.value.length < 2) {
    enderecoLabel.setAttribute('style', 'color: red')
    enderecoLabel.innerHTML = '<strong> Insira um endereço válido </strong>'
    validendereco = false
  } else {
    enderecoLabel.setAttribute('style', 'color: #323232')
    enderecoLabel.innerHTML = 'Endereço'
    validendereco = true
  }
})

cep.addEventListener('keyup', () => {
  if (cep.value.length != 8) {
    cepLabel.setAttribute('style', 'color: red')
    cepLabel.innerHTML = '<strong>Insira um CEP válido</strong>'
    validcep = false
  } else {
    cepLabel.setAttribute('style', 'color: #323232')
    cepLabel.innerHTML = 'CEP'
    validcep = true
  }
})

telefone.addEventListener('keyup', () => {
  if (!(telefone.value.length == 10 || telefone.value.length == 11)) {
    telefoneLabel.setAttribute('style', 'color: red')
    telefoneLabel.innerHTML = '<strong>Insira um telefone válido</strong>'
    validtelefone = false
  } else {
    telefoneLabel.setAttribute('style', 'color: #323232')
    telefoneLabel.innerHTML = 'Telefone'
    validtelefone = true
  }
})

email.addEventListener('keyup', () => {
  if (!email.checkValidity()) {
    emailLabel.setAttribute('style', 'color: red')
    emailLabel.innerHTML = '<strong>Insira um e-mail válido</strong>'
    validemail = false
  } else {
    emailLabel.setAttribute('style', 'color: #323232')
    emailLabel.innerHTML = 'Email'
    validemail = true
  }
})
function validar() {
  if (validnome && validendereco && validcep && validtelefone && validemail) {
    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = '<strong>Cadastro realizado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    alert('Cadastro efetuado com sucesso!')

    setTimeout(() => {
      window.location.href = 'index.html'
    }, 2000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML =
      '<strong>Por favor, responda corretamente os campos!</strong>'
    msgSucesso.innerHTML = ''
    msgSucesso.setAttribute('style', 'display: none')
  }
}

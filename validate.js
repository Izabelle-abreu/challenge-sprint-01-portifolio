//Seu JavaScript de validação aqui
const formulario = document.querySelector(".formContato__form");
const nome = document.querySelector("#nome");
const email= document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");


formulario.addEventListener("submit", (e) => {
    //previne recarregar a página
    e.preventDefault();

    //verificaEntrada();
    validarFormulario();

});


function verificaEntrada(){
    const nomeTexto = nome.value.trim();
    const emailTexto = email.value.trim();
    const assuntoTexto = assunto.value.trim();
    const mensagemTexto = mensagem.value.trim();

    if (nomeTexto === ""){
        validacaoDeErro(nome, "O campo nome não pode estar vazio");
                
    } else {
        validacaoDeSucesso(nome);
        
        
    }

    if (emailTexto === ""){
        validacaoDeErro(email, "O campo email não pode estar vazio");
                
    } else {
        validacaoDeSucesso(email);
    }

    if (assuntoTexto === ""){
        validacaoDeErro(assunto, "O campo assunto não pode estar vazio");
                
    } else {
        validacaoDeSucesso(assunto);
    }

    if (mensagemTexto === ""){
        validacaoDeErro(mensagem, "O campo de mensagem não pode estar vazio");
                
    } else {
        validacaoDeSucesso(mensagem);
    }
        
}


function validacaoDeErro(input, message){
    const controleDeFormulario = input.parentElement;
    const mensagemDeErro = controleDeFormulario.querySelector(".mensagem__erro");

    mensagemDeErro.innerText = message;
    const contador = document.querySelector(".caracteres");
    contador.innerText = "";
    controleDeFormulario.className = "formContato__form--controle erro";
  
}

function validacaoDeSucesso(input){
    const controleDeFormulario = input.parentElement;
    
    controleDeFormulario.className = "formContato__form--controle sucesso";

}

function atualizaCaracteresNome() {
    const textoNome = nome.value;
    const caracteresNome = textoNome.length;
    const mensagemDeErro = document.querySelector("#erroNome");
    
    mensagemDeErro.innerHTML = "";
    
    const contadorNome = document.querySelector("#caracteres__nome");
    contadorNome.innerHTML = `${caracteresNome} / 50 caracteres`;

}

function atualizaCaracteresEmail() {
    const textoEmail = email.value;
    const caracteresEmail = textoEmail.length;
    const mensagemDeErro = document.querySelector("#erroEmail");
    
    mensagemDeErro.innerHTML = "";
    
    const contadorEmail = document.querySelector("#caracteres__email");
    contadorEmail.innerHTML = `${caracteresEmail} / 50 caracteres`;

}

function atualizaCaracteresAssunto() {
    const textoAssunto = assunto.value;
    const caracteresAssunto = textoAssunto.length;
    const mensagemDeErro = document.querySelector("#erroAssunto");
    
    mensagemDeErro.innerHTML = "";
    
    const contadorAssunto = document.querySelector("#caracteres__assunto");
    contadorAssunto.innerHTML = `${caracteresAssunto} / 50 caracteres`;

}


function atualizaCaracteresMensagem() {
    const textoMensagem =mensagem.value;
    const caracteresMensagem = textoMensagem.length;
    const mensagemDeErro = document.querySelector("#erroMensagem");
    
    mensagemDeErro.innerHTML = "";
    
    const contadorMensagem = document.querySelector("#caracteres__mensagem");
    contadorMensagem.innerHTML = `${caracteresMensagem} / 300 caracteres`;

}

email.addEventListener("keyup", () => {
    const mensagemDeErro = document.querySelector("#erroEmail");
    if(validaEmail(email.value) !== true){
        mensagemDeErro.className = "formContato__form--controle valida__email";
        mensagemDeErro.textContent = "O formato do email deve ser texto@texto.com"
    }else {
        mensagemDeErro.textContent = "";
    }
})

function validaEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{3}$/;
    return emailRegex.test(email);
}

function validarFormulario(){
    verificaEntrada();
    const itemsFormulario = formulario.querySelectorAll(".formContato__form--controle");

    const eValido = [...itemsFormulario].every( (item) => {
        return item.className === "formContato__form--controle sucesso";
    });

    if(eValido) {
        alert("FORMULÁRIO ENVIADO COM SUCESSO!")
    }
}

//link do curriculo
const curriculo = document.getElementById("curriculo");

curriculo.addEventListener("click", gerarPdf);

function gerarPdf (){
   window.print();
};



const body = document.body;
const nav = body.firstElementChild.nextElementSibling;

function manipularElementos() {
    // getElementById
    const nomePerfil = document.getElementById("nome-perfil");
    nomePerfil.textContent = "Nome Alterado";

    // getElementsByTagName
    const sections = document.getElementsByTagName("section");
    sections[0].innerHTML = "<p>Novo conteúdo para a primeira seção</p>";

    // getElementsByClassName
    const buttons = document.getElementsByClassName("button");
    buttons[0].innerHTML = "<a href='#'>Novo Texto do Botão</a>";

    // querySelector
    const header = document.querySelector("header");
    header.style.backgroundColor = "brown";

    // const primeiroButton = document.querySelector(".button");
    // primeiroButton.style.backgroundColor = "<a href='#'>Novo Texto do Botão</a>";

    // querySelectorAll
    const buttonsAll = document.querySelectorAll("section");
    buttonsAll.forEach(button => {
        button.style.backgroundColor = "lightgreen";
    });

    const listItems = document.querySelectorAll("ul li b");
    listItems.forEach((item, index) => {
        item.textContent = `Testando ${index + 1}`;
    });
}

function navegarEManipularDOM() {
    // Alterando o background do nav
    nav.style.backgroundColor = "red";

    // Alterando o conteúdo da primeira seção
    const primeiraSection = nav.nextElementSibling;
    primeiraSection.style.backgroundColor = "black";

    // Alterando o conteúdo da segunda seção
    const segundaSection = primeiraSection.nextElementSibling;
    segundaSection.firstElementChild.textContent = "Título da seção 2 alterado";
}

function manipularElementosComMetodosDOM() {
    // Criando e inserindo um novo elemento h3 após o header
    const novoH3 = document.createElement("h3");
    const textoH3 = document.createTextNode("Este é um novo título h3 após o header.");
    novoH3.appendChild(textoH3);
    body.insertBefore(novoH3, nav.nextElementSibling);
}

function manipularEstilos() {
    // Selecionando elementos
    const header = document.querySelector("header");
    const botao = document.querySelector("button");
    const paragrafo = document.createElement("p");

    // Alterando a cor do texto do header para verde claro
    header.style.color = "lightgreen";

    // Alterando a fonte do botão para 'Arial'
    botao.style.fontFamily = "Arial, sans-serif";

    // Adicionando um novo parágrafo com estilos personalizados
    paragrafo.textContent = "Este é um novo parágrafo com estilos personalizados.";
    paragrafo.style.backgroundColor = "lightblue";
    paragrafo.style.padding = "10px";
    paragrafo.style.border = "1px solid black";
    paragrafo.style.borderRadius = "5px";
    body.appendChild(paragrafo);
    body.insertBefore(paragrafo, nav.nextElementSibling);
}

function manipularEventos() {
    const botao = document.querySelector("#eventoBotao");
    const paragrafo = document.querySelector("#eventoSubtitulo");

    function handleClick() {
        alert("Botão clicado!");
        paragrafo.style.color = paragrafo.style.color === "red" ? "blue" : "red";
    }

    function handleMouseOver() {
        paragrafo.style.fontWeight = "bold";
    }
 
    function handleMouseOut() {
        paragrafo.style.fontWeight = "normal";
    }

    botao.addEventListener("click", handleClick);
    paragrafo.addEventListener("mouseover", handleMouseOver);
    paragrafo.addEventListener("mouseout", handleMouseOut);
}

function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}

// Função de máscara de telefone
function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

// Adicionar evento de input ao campo de telefone
const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp(input) {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581982180856'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}
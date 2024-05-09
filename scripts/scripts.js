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

function formatPhoneNumber(phoneNumber) {
    // Remove todos os caracteres não numéricos
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Aplica a máscara (XXX) XXX-XXXX
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    return phoneNumber;
}

// Exemplo de uso:
let phoneNumber = '1234567890';
let formattedPhoneNumber = formatPhoneNumber(phoneNumber);
console.log(formattedPhoneNumber); // Saída: (123) 456-7890

// Adicionar evento de input ao campo de telefone
const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp(){
    const nome = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581982180856'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}
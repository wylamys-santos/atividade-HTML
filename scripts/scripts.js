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


function formatPhoneNumber(phoneNumber) {
    // Remove todos os caracteres não numéricos
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Aplica a máscara (xx) xxxx-xxxx
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');

    return phoneNumber;
}

// Exemplo de uso:
var phoneNumber = "551234567890";
var phoneNumberFormatted = formatPhoneNumber(phoneNumber);
console.log(phoneNumberFormatted); // Saída: (55) 12345-6789
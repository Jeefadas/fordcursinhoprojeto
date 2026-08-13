document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.style.transition = 'all 0.3s ease';

    submitBtn.addEventListener('mouseover', function () {
        submitBtn.style.transform = 'scale(1.08)';
        submitBtn.style.backgroundColor = '#003366';
        submitBtn.style.color = '#ffffff';
    });

    submitBtn.addEventListener('mouseout', function () {
        submitBtn.style.transform = 'scale(1)';
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const tipoContato = document.getElementById('tipo-contato').value;
        const mensagem = document.getElementById('mensagem').value;

        const dadosFormulario = {
            nome: nome,
            email: email,
            telefone: telefone,
            tipoContato: tipoContato,
            mensagem: mensagem
        };

        console.log('Dados capturados do formulário:', dadosFormulario);
        alert('Obrigado pelo contato, ' + nome + '! Sua mensagem foi enviada com sucesso.');

        form.reset();
    });
});

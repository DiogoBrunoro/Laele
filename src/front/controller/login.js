// Função de login
function login(event) {
    event.preventDefault(); // Prevenir envio do formulário

    // Obtenha os valores dos campos de email e senha digitados pelo usuário
    const emailDigitado = document.getElementById('email').value.trim();
    const senhaDigitada = document.getElementById('password').value.trim();

    // Verifique se há dados salvos no LocalStorage
    const dadosCadastrados = JSON.parse(localStorage.getItem('cadastro'));

    if (dadosCadastrados) {
        // Verificar o tipo de cadastro
        let emailCorreto;
        if (dadosCadastrados.tipo === 'Pessoa') {
            // Se o cadastro for de Pessoa, usa o campo 'email'
            emailCorreto = dadosCadastrados.email;
        } else if (dadosCadastrados.tipo === 'Fornecedor') {
            // Se o cadastro for de Fornecedor, usa o campo 'emailCorporativo'
            emailCorreto = dadosCadastrados.emailCorporativo;
        }

        const senhaCorreta = dadosCadastrados.senha;

        // Comparar email e senha digitados com os salvos
        if (emailDigitado.toLowerCase() === emailCorreto.toLowerCase() && senhaDigitada === senhaCorreta) {
            alert("Login realizado com sucesso!");
            // Redirecionar para a página inicial ou outra página desejada
            window.location.href = '../pages/home.html';
        } else {
            alert("Email ou senha inválidos. Verifique seus dados.");
        }
    } else {
        alert("Nenhum usuário cadastrado encontrado.");
    }
}

// Associar a função de login ao evento de submit do formulário
document.querySelector('form').addEventListener('submit', login);
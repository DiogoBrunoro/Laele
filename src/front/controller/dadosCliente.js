document.addEventListener('DOMContentLoaded', function () {
    carregarDadosDoLocalStorage();
});

// Função para carregar os dados do usuário do LocalStorage
function carregarDadosDoLocalStorage() {
    const dados = localStorage.getItem('cadastro');

    if (dados) {
        const { nomeCompleto, nomeUsuario, dataNascimento, email, senha } = JSON.parse(dados);

        // Preencher os campos do perfil com os dados existentes
        document.getElementById('nomeCompleto').textContent = `Nome Completo: ${nomeCompleto || ''}`;
        document.getElementById('usuario').textContent = `Login: ${nomeUsuario || ''}`;
        document.getElementById('dataNascimento').textContent = `Data de nascimento: ${dataNascimento || ''}`;
        document.getElementById('email').textContent = `Email: ${email || ''}`;
        document.getElementById('senha').textContent = `Senha: ${senha || ''}`;
    }
}

// Função para salvar as alterações feitas pelo usuário
document.getElementById('editarPerfil').addEventListener('click', function () {
    // Coleta os dados atualizados do formulário de edição
    const nomeCompleto = document.getElementById('nomeCompletoInput').value; // Input onde usuário edita
    const nomeUsuario = document.getElementById('usuarioInput').value; // Input onde usuário edita
    const dataNascimento = document.getElementById('dataNascimentoInput').value; // Input onde usuário edita
    const email = document.getElementById('emailInput').value; // Input onde usuário edita
    const senha = document.getElementById('senhaInput').value; // Input onde usuário edita

    const dadosAtualizados = {
        nomeCompleto,
        nomeUsuario,
        dataNascimento,
        email,
        senha
    };

    // Atualiza a interface com os novos dados
    document.getElementById('nomeCompleto').textContent = `Nome Completo: ${nomeCompleto || ''}`;
    document.getElementById('usuario').textContent = `Login: ${nomeUsuario || ''}`;
    document.getElementById('dataNascimento').textContent = `Data de nascimento: ${dataNascimento || ''}`;
    document.getElementById('email').textContent = `Email: ${email || ''}`;
    document.getElementById('senha').textContent = `Senha: ${senha || ''}`;

    // Atualiza o LocalStorage com os novos dados
    localStorage.setItem('cadastro', JSON.stringify(dadosAtualizados));

    alert('Dados atualizados com sucesso!');

    // Fechar o modal após salvar
    const modalElement = document.getElementById('modalEditarPerfil');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
});

// Confirmar a exclusão do perfil
document.getElementById('confirmarExclusao').addEventListener('click', function () {
    // Remove os dados do LocalStorage
    localStorage.removeItem('cadastro');

    // Atualiza a interface para mostrar que não há dados
    document.getElementById('nomeCompleto').textContent = 'Nome Completo: ';
    document.getElementById('usuario').textContent = 'Login: ';
    document.getElementById('dataNascimento').textContent = 'Data de nascimento: ';
    document.getElementById('email').textContent = 'Email: ';
    document.getElementById('senha').textContent = 'Senha: ';

    alert('Perfil excluído com sucesso!');

    // Fechar o modal após excluir
    const modalElement = document.getElementById('modalExcluirPerfil');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();

    // Remover a classe de fundo cinza
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop').remove();
});
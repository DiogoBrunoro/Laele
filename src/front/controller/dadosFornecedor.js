document.addEventListener('DOMContentLoaded', function () {
    carregarDadosDoLocalStorage();

    // Adiciona o evento ao botão
    document.getElementById('editarPerfil').addEventListener('click', salvarAlteracoes);
});

// Função para carregar os dados do usuário do LocalStorage
function carregarDadosDoLocalStorage() {
    const dados = localStorage.getItem('cadastro');

    if (dados) {
        const { nomeFornecedor, cnpj, endereco, emailCorporativo, senha } = JSON.parse(dados);

        // Preencher os campos do perfil com os dados existentes
        document.getElementById('nomeFornecedor').textContent = `Nome do Fornecedor: ${nomeFornecedor || ''}`;
        document.getElementById('cnpj').textContent = `CNPJ: ${cnpj || ''}`;
        document.getElementById('endereco').textContent = `Endereço: ${endereco || ''}`;
        document.getElementById('emailCorporativo').textContent = `Email: ${emailCorporativo || ''}`;
        document.getElementById('senha').textContent = `Senha: ${senha || ''}`;
    }
}

// Função para salvar as alterações feitas pelo usuário
function salvarAlteracoes() {
    const nomeFornecedor = document.getElementById('nomeFornecedorInput').value; // Input onde usuário edita
    const cnpj = document.getElementById('cnpjInput').value; // Input onde usuário edita
    const endereco = document.getElementById('enderecoInput').value; // Input onde usuário edita
    const emailCorporativo = document.getElementById('emailCorporativoInput').value; // Input onde usuário edita
    const senha = document.getElementById('senhaInput').value; // Input onde usuário edita

    const dadosAtualizados = {
        nomeFornecedor,
        cnpj,
        endereco,
        emailCorporativo,
        senha
    };

    // Atualiza a interface com os novos dados
    document.getElementById('nomeFornecedor').textContent = `Nome do Fornecedor: ${nomeFornecedor || ''}`;
    document.getElementById('cnpj').textContent = `CNPJ: ${cnpj || ''}`;
    document.getElementById('endereco').textContent = `Endereço: ${endereco || ''}`;
    document.getElementById('emailCorporativo').textContent = `Email: ${emailCorporativo || ''}`;
    document.getElementById('senha').textContent = `Senha: ${senha || ''}`;

    // Atualiza o LocalStorage com os novos dados
    localStorage.setItem('cadastro', JSON.stringify(dadosAtualizados));

    alert('Dados atualizados com sucesso!');

    // Fechar o modal após salvar
    const modalElement = document.getElementById('modalEditarPerfil');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
}

// Confirmar a exclusão do perfil
document.getElementById('confirmarExclusao').addEventListener('click', function () {
    // Remove os dados do LocalStorage
    localStorage.removeItem('cadastro');

    // Atualiza a interface para mostrar que não há dados
    document.getElementById('nomeFornecedor').textContent = 'Nome do Fornecedor: ';
    document.getElementById('cnpj').textContent = 'CNPJ: ';
    document.getElementById('endereco').textContent = 'Endereço: ';
    document.getElementById('emailCorporativo').textContent = 'Email: ';
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
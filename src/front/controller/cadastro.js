const formulario = document.querySelector("form");
const InomeCompleto = document.querySelector(".nomeCompleto");
const InomeUsuario = document.querySelector(".nomeUsuario");
const IdataNascimento = document.querySelector(".dataNascimento");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senhaPessoa");
const butaoCadastro = document.querySelector("button");

// Recebendo as informações do campo do fornecedor

const InomeFornecedor = document.querySelector(".nomeFornecedor");
const Icnpj = document.querySelector(".cnpj");
const Iendereco = document.querySelector(".endereco");
const IemailCorporativo = document.querySelector(".emailCorporativo");
const IsenhaFornecedor = document.querySelector(".senhaFornecedor");

function cadastrar() {

    fetch("http://localhost:8080/clientes", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nomeCompleto: InomeCompleto.value, // Certifique-se de usar o nome correto aqui
            nomeUsuario: InomeUsuario.value,
            dataNascimento: dataNascimentoFormatada,
            email: Iemail.value,
            senha: Isenha.value
        })
    })

    //cadastro de fornecedor
    fetch("http://localhost:8080/fornecedores", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nomeFornecedor: InomeFornecedor.value,
            cnpj: Icnpj.value,
            endereco: Iendereco.value,
            emailCorporativo: IemailCorporativo.value,
            senhaFornecedor: IsenhaFornecedor.value
        })
    })

    .then(function (res) {
        if (res.ok) {
            console.log('Cadastro realizado com sucesso!');
        } else {
            console.log('Erro no cadastro.');
        }
    })
    .catch(function (error) {
        console.log('Erro na requisição:', error);
    });
};


console.log(InomeCompleto.value);

function limpar(){
    InomeCompleto.value = "",
    InomeUsuario.value = "",
    IdataNascimento.value = "",
    Iemail.value = "",
    Isenha.value = ""
}

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    cadastrar();
    limpar();

})
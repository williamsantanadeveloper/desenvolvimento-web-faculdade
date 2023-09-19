const calcular_idade = () => {
    let ano_nascimento = document.getElementById("ano_nascimento").value;
    let resultado = document.getElementById("resultado");

    let data_atual = new Date();
    let ano_atual = data_atual.getFullYear();
    let idade = ano_atual - ano_nascimento;

    resultado.textContent = 'A idade do usuário é: ' + idade + ' anos.';
}
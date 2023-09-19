const verificar_idade = () => {
    let idade_pessoa = document.getElementById("idade").value;
    let idade_falta = parseInt(idade_pessoa) - 65
    let resultado = document.getElementById("resultado");

    if (parseInt(idade_pessoa) >= 65) {
        resultado.textContent = 'Já pode aposentar';
    }
    else {
        resultado.textContent = 'Não pode aposentar falta' .concat(idade_falta);
    }
}
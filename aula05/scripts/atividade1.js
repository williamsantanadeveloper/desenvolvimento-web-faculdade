const validar_senha = () => {
    var entrada = document.getElementById("senha").value;
    var resultado = document.getElementById("resultado");

    if (entrada === "senha123") {
        resultado.textContent = 'Senha válida!'
    }
    else {
        resultado.textContent = "Senha inválida!"
    }
}
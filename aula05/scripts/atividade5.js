const verificar_paridade = () => {
    let number = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    if (number % 2 == 0) {
        resultado.textContent = 'O número é par';
    }
    else {
        resultado.textContent = 'O número é ímpar'
    }
}
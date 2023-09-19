const verificacao_aprovacao = () => {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    let resultado = document.getElementById("resultado");

    if (media === 10) {
        resultado.textContent = 'Aprovado com Distinção!';
    }
    else if (media >= 7) {
        resultado.textContent = 'Aprovado!';
    }
    else if (media < 7) {
        resultado.textContent = 'Reprovado!';
    }
}
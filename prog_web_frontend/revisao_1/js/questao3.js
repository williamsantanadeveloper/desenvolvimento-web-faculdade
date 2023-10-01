const ajuste_salario = () => {
    let salario = document.getElementById("salario").value;

    let salario_anterior = document.getElementById("salario_anterior");
    let porcentagem = document.getElementById("porcentagem");
    let valor_aumentado = document.getElementById("valor_aumentado");
    let novo_salario = document.getElementById("novo_salario");

    let resultado = document.getElementById("result");

    if (salario <= 280) {
        salario_anterior.textContent = 'O salário anterior é ' + (salario_anterior = salario),
            porcentagem.textContent = 'A porcentagem é de 20%',
            valor_aumentado.textContent = 'O valor aumentado foi: ' + parseFloat((salario * 0.20)),
            novo_salario.textContent = 'O novo salário é: ' + parseFloat((salario * 0.20) + parseFloat(salario))
    }

    else if (salario > 280 && salario <= 700) {
        salario_anterior.textContent = 'O salário anterior é ' + (salario_anterior = salario),
            porcentagem.textContent = 'A porcentagem é de 15%',
            valor_aumentado.textContent = 'O valor aumentado foi: ' + parseFloat((salario * 0.15)),
            novo_salario.textContent = 'O novo salário é: ' + parseFloat((salario * 0.15) + parseFloat(salario))
    }

    else if (salario > 700 && salario <= 1500) {
        salario_anterior.textContent = 'O salário anterior é ' + (salario_anterior = salario),
            porcentagem.textContent = 'A porcentagem é de 10%',
            valor_aumentado.textContent = 'O valor aumentado foi: ' + parseFloat((salario * 0.10)),
            novo_salario.textContent = 'O novo salário é: ' + parseFloat((salario * 0.10) + parseFloat(salario))
    }

    else if (salario > 1500) {
        salario_anterior.textContent = 'O salário anterior é ' + (salario_anterior = salario),
            porcentagem.textContent = 'A porcentagem é de 5%',
            valor_aumentado.textContent = 'O valor aumentado foi: ' + parseFloat((salario * 0.05)),
            novo_salario.textContent = 'O novo salário é: ' + parseFloat((salario * 0.05) + parseFloat(salario))
    }

    resultado.textContent = 'Salário ajustado!';

};
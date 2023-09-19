const comparar_valores = () => {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado = document.getElementById("resultado")
    
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = 'Por favor, digite valores numéricos válidos.';
        
    }
    
    else if (valor1 === valor2) {
        resultado.textContent = 'Os valores são iguais';
    }

    else if (valor1 > valor2) {
        resultado.textContent = 'O primerio valor é maior.';
    }
    else {
        resultado.textContent = 'O segundo valor é maior';
    }
}
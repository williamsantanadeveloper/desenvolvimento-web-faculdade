const verificar_ano_bissexto = () => {
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");

    if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.textContent = 'O ano é bissexto';
    }
    else {
        resultado.textContent = 'O ano não é bissexto';
    }
}
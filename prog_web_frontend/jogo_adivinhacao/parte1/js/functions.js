const adivinhar_numero = () => {
    let number = document.getElementById("number").value;
    let number_predefinido = 25;
    let result = document.getElementById("result");

    if (number > 100 || number < 1) {
        result.textContent = 'Informe um número entre 1 e 100'
    }

    if (number == number_predefinido) {
        let contador = 0;
        while (number != number_predefinido) {
            contador += 1
            contador++
        }
        result.textContent = 'Você acertou! Parabéns! '.concat('Você acertou em ', contador += 1, ' tentativas')
    }

    else if (number < number_predefinido) {
        result.textContent = 'O número é maior'
    }

    else {
        result.textContent = 'O número é menor'
    }

    // if (number == number_predefinido) {
    //     result.textContent = 'Parabéns! Você adivinhou o número é '.concat(number_predefinido).concat('Você acertou em ').concat(contador).concat('tentativas')
    // }

    // else {
    //     result.textContent = 'Tente novamente!'
    // }
};
const my_funtion = () => {
    let hour = new Date().getHours();
    let greeting;

    if (hour < 18) {
        greeting = 'Bom dia!';
    }

    else {
        greeting = 'Boa tarde!';
    }
    
    document.getElementById("demo").innerHTML = greeting;
}
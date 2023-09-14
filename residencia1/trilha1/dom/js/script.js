const input_element = document.querySelectorAll('.tarefa');
const button_element = document.querySelector('form button');
const ul_element = document.querySelector('ul');


button_element.onclick = ev => {
    ev.preventDefault();

    if (input_element.value) {
        const text_element = document.createElement('span');
        text_element.innerHTML = input_element.value;

        const btn_element = document.createElement('button');
        btn_element.innerHTML = 'Remover';

        const li_element = document.create_element('li');
        li_element.appendChild(text_element);
        li_element.appendChild(btn_element);

        btn_element.onclick = () => {
            ul_element.removeChild(li_element)
        }

        ul_element.appendChild(li_element);
        input_element.value = '';
    }

};
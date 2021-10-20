const container_color = document.querySelector('.container_color');
const btn_ramdom_color = document.querySelector('#btn_random_color');
const text_code_color = document.querySelector('#text_code_color');
const container_btn_copy = document.querySelector('.container_btn_copy');
const container_message = document.querySelector('.container_message');

text_code_color.textContent = '#FFFF';

btn_ramdom_color.addEventListener('click', () => {
    container_color.style.background = `${ramdomColor()}`;
    text_code_color.textContent = ramdomColor();
});

container_btn_copy.addEventListener('click', () => {
    container_btn_copy.style.background = '#20a100';
    container_btn_copy.innerHTML = '<i class="fas fa-check btn_copy"></i>';

    setTimeout(() => {
        container_btn_copy.innerHTML = '<i class="far fa-copy btn_copy"></i>';
        container_btn_copy.style.background = '#2e4cf7';
    },2000)
    copy();
});

// Method to generate ramdom numbers
const ramdomNumbers = (min, max) => {
    return Math.floor(Math.random () * (max - min)) + min;
}

// Method to generate ramdom color
function ramdomColor() {
    let listColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];
    let color = '#';
    for(var i = 0; i < 6; i++) {
        const numbercolor = ramdomNumbers(0, listColor.length);
        color = color + listColor[numbercolor];
    }
    return color; 
}

// Method to copy clipboard
function copy(){

    var seleccion = document.createRange(); 
    seleccion.selectNodeContents(text_code_color);   
    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);

    var res = document.execCommand('copy'); 
    if (res) {
        container_message.classList.remove('ocult');
        setInterval( () => {
            container_message.classList.add('ocult');
        },2000)
        container_message.textContent = 'Copied successfully';
    }     

    window.getSelection().removeRange(seleccion);
}
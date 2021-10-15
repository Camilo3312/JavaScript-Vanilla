const txt_username = document.querySelector('#txt_username');
const txt_comment = document.querySelector('#txt_comment');
const btn_comment = document.querySelector('#btn_comment');
const img = document.querySelector('#img_profile');
const p_username = document.querySelector('#p_username');
const cont = document.querySelector('#cont');
const container_twitts = document.querySelector('#container_twitts');
const message_error = document.querySelector('#message_error');

cont.textContent = 'Maximo de caracteres: 200';

const ConverString = () => {
    const getValue = txt_username.value.substring(0,1).toUpperCase();
    return getValue;
}

function aleatorio(inferior,superior){
   numPosibilidades = superior - inferior
   aleat = Math.random() * numPosibilidades
   aleat = Math.floor(aleat)
   return parseInt(inferior) + aleat
}

function ColorRamdom(){
    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    color_aleatorio = "#";
    for (i=0;i<6;i++){
       posarray = aleatorio(0,hexadecimal.length)
       color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
 }

const ValuateCaracters = () => {
    let quantity = txt_comment.value; 
    let value =  200 - (quantity.length); 
    cont.textContent = 'Maximo de caracteres: ' + value;
    if(value <= 50) {
        cont.style.color = 'red';
        if(value == 0) {
            cont.textContent = 'Maximo de caracteres alcanzado';
        }
    }
    else {
        cont.style.color = '#7e7e7e';
    }
}

const CreateComment = () => {
    img.textContent = ConverString();
    img.style.background = `${ColorRamdom()}`
    p_username.textContent = txt_username.value;
    
    const comment = document.createElement('div');
    comment.classList.add('comment');
    const username = document.createElement('p');
    const comment_text = document.createElement('p');

    username.textContent = `${txt_username.value}`;
    comment_text.textContent = `${txt_comment.value}`;

    comment.appendChild(username);
    comment.appendChild(comment_text);
    container_twitts.appendChild(comment);
}

btn_comment.addEventListener('click', () => {
    if(txt_comment.value.length == 0 || txt_username.value.length == 0) {
        txt_username.focus();
        txt_username.classList.add('error');
        message_error.textContent = 'Rellene todos los campos'
        setTimeout(() => {
            message_error.textContent = '';       
        }, 3000);
    }
    else {
        txt_username.classList.remove('error');
        CreateComment();
        message_error.textContent = 'Comment add'
        setTimeout(() => {
            message_error.textContent = '';       
        }, 3000);
    }
});

txt_comment.addEventListener('keydown', ValuateCaracters);
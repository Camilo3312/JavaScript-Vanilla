const txt_name = document.querySelector('#txt_name');
const date_birthday = document.querySelector('#date_birthday');
const conatiner_message = document.querySelector('.conatiner_message');

const btn_calc = document.querySelector('#btn_calc');
const message = document.querySelector('#message');

date_birthday.addEventListener('change', function(){
    if(date_birthday.value){
        if (txt_name.value == '') {
            txt_name.focus();
            message.textContent = 'Ingrese un nombre';
            conatiner_message.style.background = '#ff3939';

        } else {
	    if(calculateAge() >= 18) {
		conatiner_message.style.background = '#1a9c00';
	    } else {
		conatiner_message.style.background = 'red';
	    }
            message.textContent = `Hola ${txt_name.value} su edad es de ${calculateAge()} años`;
            
        }
    }
});

const calculateAge = () => {

    let current_date = new Date;

    const date = date_birthday.value.split("-");
    
    const current_year = current_date.getFullYear();
    const current_month = current_date.getMonth() + 1;
    const current_day = current_date.getDate();

    let age = current_year - parseInt(date[0]);
    if (current_month < parseInt(date[1])) {
        age--;
    } else if (current_month === parseInt(date[1])){
        if(current_day < parseInt(date[2])){
            age--;
        }
    }
    return age;
}


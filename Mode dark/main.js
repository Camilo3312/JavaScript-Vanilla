const btn_toggle = document.querySelector('.btn');
const title = document.querySelector('.title');

const mode_dark = () => {
    document.body.classList.toggle('dark');
    btn_toggle.classList.toggle('rotate');
}

btn_toggle.addEventListener('click',  mode_dark);

const select_characters = document.querySelector('.select_characters');
const container_cards = document.querySelector('.container_cards');

const url = 'https://rickandmortyapi.com/api/character/';

const getCharacters = () => {
    fetch(url)
        .then(response => response.json())
        .then(response => setSelectCharacters(response))
}

const setSelectCharacters = (datas) => {
    const selectAllCharacters = document.createElement('option');
    selectAllCharacters.setAttribute('value','all_characters');
    selectAllCharacters.textContent = 'Todos los personajes'
    select_characters.appendChild(selectAllCharacters);
    datas.results.map(item => {
        const option = document.createElement('option');
        option.textContent = item.name;
        option.setAttribute('value', item.id);
        select_characters.appendChild(option);
    });
}

const showCharacter = () => {
    container_cards.innerHTML = '';
    

    if(select_characters.value == 'all_characters') {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                response.results.map(item => { 
                    const card = document.createElement('div');
                    const image = document.createElement('img');
                    const name = document.createElement('p');
                    card.classList.add('card');
                    name.classList.add('name');

                    image.setAttribute('src', item.image);
                    name.textContent = item.name;
    
                    card.appendChild(image);
                    card.appendChild(name);
                    container_cards.appendChild(card);
                })
            })
    }
    else {
        fetch(url + select_characters.value)
            .then(response => response.json())
            .then(response => {       
                const card = document.createElement('div');
                const image = document.createElement('img');
                const name = document.createElement('p');
                card.classList.add('card');
                name.classList.add('name');

                image.setAttribute('src', response.image);
                name.textContent = response.name;

                card.appendChild(image);
                card.appendChild(name);
                container_cards.appendChild(card);
            });
    }
}

select_characters.addEventListener('change', showCharacter)

getCharacters();
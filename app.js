document.addEventListener("DOMContentLoaded", function () {
    
    fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => response.json())
        .then((data) => {
            const characters = data.results; // Extract character data here

            
            const sliderList = document.querySelector('.splide__list');
            const paginationList = document.querySelector('.splide__pagination');

            
            characters.forEach((character, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'splide__slide';

                const characterContainer = document.createElement('div');
                characterContainer.className = 'character';
                characterContainer.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <div class="status-container">
                        
                        <p>${character.name}</p>
                        <div class="status-dot"></div>
                        <p>${character.status} - ${character.gender}</p>
                    </div>
                `;

                listItem.appendChild(characterContainer);
                sliderList.appendChild(listItem);

            });

           
            var splide = new Splide('.splide', {
                perPage: 3,
                pagination: true,
            });

            splide.mount();
        })
        .catch((error) => console.error(error));
});

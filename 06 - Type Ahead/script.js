const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// to use new API called fetch
/* const promp = fetch(endpoint);
console.log(promp); => promise라는게 나옴*/ 

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //here we need to fiture out if the city or state matches that was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
};

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join(''); // join을 안 하니까 backtick이 남아있네??;; 왜죠??
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // 검색어를 쓰고나서 다른데 클릭해줘야 change event를 들을 수 있음
searchInput.addEventListener('keyup', displayMatches); // 쓰는 와중에도 event로 인식
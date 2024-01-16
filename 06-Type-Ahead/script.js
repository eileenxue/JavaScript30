const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// First convert the raw data into JSON, then add them to the cities array
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

console.log(cities);

const findMatches = (words, cities) => {
  return cities.filter((place) => {
    // Create the regex outside of the match, cannot do it inside
    // g means global, i means insensitive
    const regex = new RegExp(words, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

const displayMatches = (e) => {
  const matchArray = findMatches(e.target.value, cities);
  const listItems = matchArray
    .map((place) => {
      const regex = new RegExp(e.target.value, "gi");
      const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);
      const population = parseInt(place.population).toLocaleString();
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${population}</span>
        </li>
      `;
    })
    .join("");
  console.log(listItems);
  suggestions.innerHTML = listItems;
};

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

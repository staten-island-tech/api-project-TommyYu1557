import "./style.css";

const URL = "https://www.dnd5eapi.co/api/classes";
// const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.results;
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
console.log(URL);

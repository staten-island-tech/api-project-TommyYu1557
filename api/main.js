import "./style.css";

const URL = "https://www.dnd5eapi.co/api/classes";
// const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.results.forEach((classes) => {
      console.log(classes.name);
      data.results.forEach((classes) => {
        document.body.insertAdjacentHTML(
          "beforebegin",
          `
          <h2>${classes.name}</h2>`
        );
      });

      displayclasscard();
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);

console.log(URL);

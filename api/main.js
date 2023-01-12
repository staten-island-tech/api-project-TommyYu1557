import "./style.css";

const URL = "https://www.dnd5eapi.co/api/classes";
const URL2 = "https://www.dnd5eapi.co/api/spells";
const URL3 = "https://www.dnd5eapi.co/api/alignments";

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
          `<h2>Class: ${classes.name}</h2>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
}

async function getData2(URL2) {
  try {
    const response = await fetch(URL2);
    const data = await response.json();
    data.results.forEach((spells) => {
      console.log(spells.name);
      console.log(spells.desc);
      data.results.forEach((spells) => {
        document.body.insertAdjacentHTML(
          "beforebegin",
          `<h3>Spell: ${spells.name}</h3>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
}

async function getData3(URL3) {
  try {
    const response = await fetch(URL3);
    const data = await response.json();
    data.results.forEach((alignment) => {
      console.log(alignment.name);
      console.log(alignment.desc);
      data.results.forEach((alignment) => {
        document.body.insertAdjacentHTML(
          "beforebegin",
          `<h3>Alignment: ${alignment.name}</h3>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
getData2(URL2);
getData3(URL3);

console.log(URL);

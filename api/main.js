import "./style.css";

const DOMselectors = {
  input: document.getElementById("input"),
  descbox: document.getElementById("descriptionbox"),
  form: document.getElementById("info"),
};

let spellname = "fireball";

//const URL = "https://www.dnd5eapi.co/api/classes";

// const specificURL = `https://www.dnd5eapi.co/api/spells/${spellname}`;
const specificURL = "https://www.dnd5eapi.co/api/spells/fireball";
console.log(specificURL);

const URL2 = "https://www.dnd5eapi.co/api/spells";

//const URL3 = "https://www.dnd5eapi.co/api/alignments";

// const URL = "https://api.quotable.io/random";

/* async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.results.forEach((classes) => {
      console.log(classes.name);
      data.results.forEach((classes) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<h2>Class: ${classes.name}</h2>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
} */

async function getData2(URL2) {
  try {
    const response = await fetch(URL2);
    const data = await response.json();
    data.results.forEach((spells) => {
      console.log(spells.name);
      data.results.forEach((spells) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<h3>Spell: ${spells.name}</h3>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
}

async function descData1(specificURL) {
  try {
    const response = await fetch(specificURL);
    const data = await response.json();
    data.desc.forEach((bruh) => {
      console.log(bruh);
      data.desc.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<h2>Description: ${text}</h2>`
        );
      });
      data.classes.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<h2>Available Classes: ${text.name}</h2>`
        );
      });
      data.subclasses.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<h2>Available Subclasses: ${text.name}</h2>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
}

descData1(specificURL);

/* async function getData3(URL3) {
  try {
    const response = await fetch(URL3);
    const data = await response.json();
    data.results.forEach((alignment) => {
      console.log(alignment.name);
      data.results.forEach((alignment) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<h4>Alignment: ${alignment.name}</h4>`
        );
      });
      idk;
    });
  } catch (error) {
    console.log(error);
  }
} */

function makedesc() {
  const input = DOMselectors.input.value;
  DOMselectors.descbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
}

getData2(URL2);

DOMselectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  createcard();
  clearinputs();
});

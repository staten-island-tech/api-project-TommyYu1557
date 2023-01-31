import "./style.css";

const DOMselectors = {
  input: document.getElementById("input"),
  descbox: document.getElementById("descriptionbox"),
  form: document.getElementById("info"),
};

let spellname = DOMselectors.input.value;

const specificURL = `https://www.dnd5eapi.co/api/spells/${spellname}`;
console.log(specificURL);

const URL2 = "https://www.dnd5eapi.co/api/spells";

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
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Name: ${data.name}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Level: ${data.level}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Cast Time: ${data.casting_time}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Duration: ${data.duration}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Range: ${data.range}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Components: ${data.components}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Ritual?: ${data.ritual}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>DC Type: ${data.dc.dc_type.name}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Materials: ${data.material}</h2>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<h2>Higher Level: ${data.higher_level}</h2>`
      );
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

getData2(URL2);

DOMselectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
});

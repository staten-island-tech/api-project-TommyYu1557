import "./style.css";

const DOMselectors = {
  input: document.getElementById("input"),
  descbox: document.getElementById("descriptionbox"),
  form: document.getElementById("info"),
  button: document.getElementById("funnybutton"),
  h2: document.getElementById("description"),
  desclines: document.getElementById("desclines"),
};

const URL2 = "https://www.dnd5eapi.co/api/spells";

DOMselectors.button.addEventListener("click", function (bruh) {
  poof();
  bruh.preventDefault();
  let spellname = DOMselectors.input.value;
  const specificURL = `https://www.dnd5eapi.co/api/spells/${spellname}`;
  descData1(specificURL);
});

function poof() {
  DOMselectors.descbox.innerHTML = "";
}

async function descData1(specificURL) {
  try {
    const response = await fetch(specificURL);
    const data = await response.json();
    data.desc.forEach((bruh) => {
      console.log(bruh);
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Name: ${data.name}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Level: ${data.level}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Cast Time: ${data.casting_time}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Duration: ${data.duration}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Range: ${data.range}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Components: ${data.components}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Ritual?: ${data.ritual}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">DC Type: ${data.dc.dc_type.name}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Materials: ${data.material}</p>`
      );
      DOMselectors.descbox.insertAdjacentHTML(
        "beforeend",
        `<p = id = "desclines">Higher Level: ${data.higher_level}</p>`
      );
      data.desc.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<p = id = "desclines">Description: ${text}</p>`
        );
      });
      data.classes.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<p id = "desclines">Available Classes: ${text.name}</p>`
        );
      });
      data.subclasses.forEach((text) => {
        DOMselectors.descbox.insertAdjacentHTML(
          "beforeend",
          `<p id = "desclines">Available Subclasses: ${text.name}</p>`
        );
      });
      stopdouble;
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
      data.results.forEach((spells) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<p id = "spelltips">Spell: ${spells.name}</p>`
        );
      });
      stopdouble;
    });
  } catch (error) {
    console.log(error);
  }
}

getData2(URL2);

DOMselectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
});

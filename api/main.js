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
          "beforeend",
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

async function getData3(URL3) {
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
}

function makecard() {
  seals.forEach((seal) => {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div class="sealcard"> 
    <h2 class="sealcardname"> ${seal.names} </h2>
     <p class ="sealcardtext"> Species: ${seal.species}</p>
     <p class ="sealcardtext"> Age: ${seal.age} </p>
     <p class ="sealcardtext"> Weight: ${seal.weight}lbs </p>
     <p class ="sealcardtext"> Gender: ${seal.gender} </p>
     <p class ="sealcardtext"> Angry? ${seal.hostile} </p>
     <p class ="sealcardtext"> Stock: ${seal.stock} </p>
     <h3 class ="sealcardtext"> $${seal.value}</h3>
    </div>`
    );
  });
}

getData(URL);
getData2(URL2);
getData3(URL3);

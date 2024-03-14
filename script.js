const validateButton = document
  .getElementById("validateButton")
  .addEventListener("click", sendFormData);
const output = document.querySelector(".output");
const errorOutput = document.querySelector(".outputError");

// const switchZone = document.getElementById("switchZone");
// const switchSearchFilter = document.getElementById("switchSearch");
// const outputFilterSearchText = document.getElementById("rangeSelectionText");
// switchSearchFilter.addEventListener("input", changeFilter);

// const inputSearch = document.getElementById("searchBox");
// console.log(switchSearchFilter.value);
const contactList = [];
let contactID = 0;

// const found = array1.find((element) => element > 10);

// function changeFilter() {
//   if (switchSearchFilter.value == 1) {
//     console.log(switchSearchFilter.value);
//     outputFilterSearchText.innerText = "Email";
//   } else if (switchSearchFilter.value == 2) {
//     outputFilterSearchText.innerText = "Nom";
//   } else if (switchSearchFilter.value == 3) {
//     outputFilterSearchText.innerText = "Numero";
//   } else if (switchSearchFilter.value == 3) {
//     outputFilterSearchText.innerText = "Numero";
//   }
// }
// changeFilter();

// function hideSearch() {
//   if (contactList.length === 0) {
//     switchZone.style.display = "none";
//     inputSearch.style.display = "none";
//   } else {
//     switchZone.style.display = "flex";

//     inputSearch.style.display = "block";
//   }
// }
// hideSearch();

function clearTextBox() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((e) => {
    e.value = "";
  });
}

function sendFormData() {
  const contactNameValue = document.getElementById("contactName").value;
  const contactMailValue = document.getElementById("contactEmail").value;
  const contactNumberValue = document.getElementById("contactNumber").value;
  contactID++;
  // hideSearch();
  if (
    contactNameValue === "" ||
    contactMailValue === "" ||
    contactNumberValue === ""
  ) {
    errorOutput.innerHTML = "Merci de remplir les champs du dessus";
  } else {
    errorOutput.innerHTML = "";
    contactList.push({
      ID: contactID,
      Name: contactNameValue,
      Mail: contactMailValue,
      Number: contactNumberValue,
    });
    let indexGenerate = contactList.length - 1;
    const containerOutput = document.createElement("div");
    containerOutput.id = `containerOutput${contactID}`;
    containerOutput.classList = `containerOutput`;
    output.appendChild(containerOutput);

    const textZoneOutput = document.createElement("div");
    textZoneOutput.id = `textZoneOutput${contactID}`;
    textZoneOutput.classList = `textZoneOutput`;
    containerOutput.appendChild(textZoneOutput);

    const textDivNameOutput = document.createElement("div");
    textDivNameOutput.classList = "textDivOutput";
    textZoneOutput.appendChild(textDivNameOutput);
    const tittleNameZoneOutput = document.createElement("h3");
    textDivNameOutput.appendChild(tittleNameZoneOutput);
    const pNameZoneOutput = document.createElement("h3");
    textDivNameOutput.appendChild(pNameZoneOutput);

    tittleNameZoneOutput.textContent = "Nom:";
    pNameZoneOutput.textContent = contactList[indexGenerate].Name;

    let inputH3ZoneOutput = document.createElement("input");
    inputH3ZoneOutput.value = contactList[indexGenerate].Name;

    const textDivMailOutput = document.createElement("div");
    textDivMailOutput.classList = "textDivOutput";
    textZoneOutput.appendChild(textDivMailOutput);
    const tittleMailZoneOutput = document.createElement("p");
    textDivMailOutput.appendChild(tittleMailZoneOutput);
    const pMailZoneOutput = document.createElement("p");
    textDivMailOutput.appendChild(pMailZoneOutput);

    tittleMailZoneOutput.textContent = "Email:";
    pMailZoneOutput.textContent = contactList[indexGenerate].Mail;

    let inputpMailZoneOutput = document.createElement("input");
    inputpMailZoneOutput.value = contactList[indexGenerate].Mail;

    const textDivNumberOutput = document.createElement("div");
    textDivNumberOutput.classList = "textDivOutput";
    textZoneOutput.appendChild(textDivNumberOutput);
    const tittleNumberZoneOutput = document.createElement("p");
    textDivNumberOutput.appendChild(tittleNumberZoneOutput);
    const pNumberZoneOutput = document.createElement("p");
    textDivNumberOutput.appendChild(pNumberZoneOutput);

    tittleNumberZoneOutput.textContent = "Numero:";
    pNumberZoneOutput.textContent = contactList[indexGenerate].Number;

    let inputpNumberZoneOutput = document.createElement("input");
    inputpNumberZoneOutput.value = contactList[indexGenerate].Number;

    const buttonTextOutput = document.createElement("div");
    buttonTextOutput.id = `buttonTextOutput${contactID}`;
    buttonTextOutput.classList = `buttonTextOutput`;
    containerOutput.appendChild(buttonTextOutput);

    const deleteButton = document.createElement("button");
    deleteButton.id = `deleteButton${contactID}`;
    deleteButton.classList = `deleteButton`;
    deleteButton.innerHTML = "Supprimer";
    buttonTextOutput.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteButton.parentNode.parentNode.remove();
    });

    const modifyButton = document.createElement("button");
    modifyButton.id = `modifyButton${contactID}`;
    modifyButton.classList = `modifyButton`;
    modifyButton.innerHTML = "modifier";
    buttonTextOutput.appendChild(modifyButton);

    modifyButton.addEventListener("click", () => {
      if (textDivNameOutput.lastChild === pNameZoneOutput) {
        pNameZoneOutput.replaceWith(inputH3ZoneOutput);
        pMailZoneOutput.replaceWith(inputpMailZoneOutput);
        pNumberZoneOutput.replaceWith(inputpNumberZoneOutput);
      } else if (textDivNameOutput.lastChild === inputH3ZoneOutput) {
        pNameZoneOutput.innerText = inputH3ZoneOutput.value;
        inputH3ZoneOutput.replaceWith(pNameZoneOutput);
        contactList[indexGenerate].Name = inputH3ZoneOutput.value;

        pMailZoneOutput.innerText = inputpMailZoneOutput.value;
        inputpMailZoneOutput.replaceWith(pMailZoneOutput);
        contactList[indexGenerate].Mail = inputpMailZoneOutput.value;

        pNumberZoneOutput.innerText = inputpNumberZoneOutput.value;
        inputpNumberZoneOutput.replaceWith(pNumberZoneOutput);
        contactList[indexGenerate].Number = inputpNumberZoneOutput.value;

        console.table(contactList);
      }
    });

    // const found = array1.find((element) => element > 10); lache de touche event range selector
    console.table(contactList);
    clearTextBox();
  }
}

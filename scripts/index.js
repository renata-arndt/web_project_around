const initialCards = [
  {
    name: "Yosemite National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Blue Ridge Parkway",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Sierra Nevada",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Swiftcurrent Lake",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Glacier National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

const editProfileButton = document.querySelector(".profile__info_header_edit-button");
const editPopup = document.querySelector("#edit-popup");
const closeEditPopupButton = document.querySelector("#close-edit-popup");

const profileName = document.querySelector(".profile__info_header_name");
const profileInputName = document.querySelector("#name");
const profileDescription = document.querySelector(".profile__info_description");
const profileInputDescription = document.querySelector("#description");
const editForm = document.querySelector("#form");

const elementAddButton = document.querySelector(".profile__button");
const addElementPopup = document.querySelector("#add-element-popup");
const closePopupAddButton = document.querySelector("#close-add-popup");

const addElementForm = document.querySelector("#add-form");
const elementInputTitle = document.querySelector("#title");
const elementInputLink = document.querySelector("#image-link");

const elementTemplate = document.querySelector("#element-template");
const elementCard = document.querySelector(".elements__card");

function openPopup(){  
    editPopup.classList.add("popup_opened");

    profileInputName.value = profileName.textContent;

    profileInputDescription.value = profileDescription.textContent;

}

function openAddElementPopup(){
  addElementPopup.classList.add("popup_opened");
}

function closePopup(popup){
    popup.classList.remove("popup_opened");
}

function handleEditForm(event){
    event.preventDefault();

    profileName.textContent = profileInputName.value;

  if(profileInputName.value.trim() ===  ""){
    alert("Nome não pode estar vazio");
    return;
  }

    profileDescription.textContent = profileInputDescription.value;

    if(profileDescription.value.trim() ===  ""){
    alert("Descrição não pode estar vazia");
    return;
  }

    closePopup(editPopup);
}

function handleClosePopup(event){
  console.log(event.currentTarget);
  if(
    event.target === event.currentTarget ||
    event.target.closest(".popup__container_close-button")
  ){
    closePopup(event.currentTarget);
  }
}

function createElement ({name, link}){
  const cloneElement = elementTemplate.content.cloneNode(true);
  const imgLink = cloneElement.querySelector(".elements__card-image");
  const title = cloneElement.querySelector(".elements__card_info-text");

  if (imgLink){
    imgLink.src = link;
    imgLink.alt = name;
  imgLink.setAttribute("loading", "lazy");
  }

  if(title){
    title.textContent = name;
  }
  return cloneElement
}

function renderInitialElements(){
  initialCards.forEach(createElement);
}

function handleAddElementForm(event){
  event.preventDefault();

  const elementTitle = elementInputTitle.value.trim();
  const elementLink = elementInputLink.value.trim();

  if(elementTitle === "" || elementLink === ""){
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const newCard = createElement({name: elementTitle, link: elementLink});
  elementCard.prepend(newCard);
  
  addElementForm.reset();
  closePopup(addElementPopup);
}

editProfileButton.addEventListener("click", openPopup);
elementAddButton.addEventListener("click", openAddElementPopup);

editForm.addEventListener("submit", handleEditForm);
addElementForm.addEventListener("submit", handleAddElementForm);

editPopup.addEventListener("click", handleClosePopup);
addElementPopup.addEventListener("click", handleClosePopup);

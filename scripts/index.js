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
const elementsContainer = document.querySelector(".elements__cards");

const likeButton = document.querySelectorAll(".elements__card_info-icon");

const trashButtons = document.querySelectorAll(".elements__card_info-trash");

const imgPopup = document.querySelector("#image-popup");
const imgPopupImage = imgPopup.querySelector(".popup__container_image");
const imgPopupCaption = imgPopup.querySelector(".popup__container_caption");
const imgPopupCloseButton = document.querySelector("#close-img-popup");

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

function renderInitialElements(element){
  const elementCard = elementTemplate.content.cloneNode(true);

  const title = elementCard.querySelector(".elements__card_info-text");
  title.textContent = element.name;

  const image = elementCard.querySelector(".elements__card_image");
  image.src = element.link;
  image.alt = element.name;

  image.addEventListener("click", () => openImgPopup(image));

  const trashButton = elementCard.querySelector(".elements__card_info-trash");
  trashButton.src = "./images/Trash.png";
  trashButton.alt = "Ícone de lixeira";

  const likeButton = elementCard.querySelector(".elements__card_info-icon");
  likeButton.src = "./images/heart.png";

  elementsContainer.prepend(elementCard);
}

initialCards.forEach((item) => {
  renderInitialElements(item);
});

function handleAddElementForm(event){
  event.preventDefault();

  const newElement = {
    name: elementInputTitle.value.trim(),
    link: elementInputLink.value.trim(),
  };

  if(newElement.name === "" || newElement.link === ""){
    alert("Por favor, preencha todos os campos.");
    return;
}
  renderInitialElements(newElement);

  addElementForm.reset();
  closePopup(addElementPopup);

  const newCardLikeButton = newElement.querySelector(".elements__card_info-icon");
     newCardLikeButton.addEventListener("click", () => {
     newCardLikeButton.classList.toggle("active");
   });
};

function addLikeButtonListener(button){
  button.addEventListener("click", () => {
    const active = button.classList.toggle("active");
  });
};

trashButtons.forEach((button) =>{
  console.log(button);
  button.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
});

function openImgPopup(imageElement){
  imgPopup.classList.add("popup_opened");
  imgPopupImage.src = imageElement.src;
  imgPopupImage.alt = imageElement.alt;
  imgPopupCaption.textContent = imageElement.alt;
};

function closeImgPopup(){
  imgPopup.classList.remove("popup_opened");
};

editProfileButton.addEventListener("click", openPopup);
elementAddButton.addEventListener("click", openAddElementPopup);

editForm.addEventListener("submit", handleEditForm);
addElementForm.addEventListener("submit", handleAddElementForm);

editPopup.addEventListener("click", handleClosePopup);
addElementPopup.addEventListener("click", handleClosePopup);

imgPopupCloseButton.addEventListener("click", closeImgPopup);

document.querySelectorAll(".elements__card_info-icon").forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.classList.toggle("active");
  });
});

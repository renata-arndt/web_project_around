let editProfileButton = document.querySelector(".profile__info_header_edit-button");
let editPopup = document.querySelector("#edit-popup");
let closePopupButton = document.querySelector(".popup__container_close-button");
let profileName = document.querySelector(".profile__info_header_name");
let profileInputName = document.querySelector("#name");
let profileDescription = document.querySelector(".profile__info_description");
let profileInputDescription = document.querySelector("#description");
let editForm = document.querySelector("#form");

function openPopup(){  
    editPopup.classList.add("popup_opened");

    profileInputName.value = profileName.textContent;

    profileInputDescription.value = profileDescription.textContent;
}

function closePopup(){
    editPopup.classList.remove("popup_opened")
}

function handleEditForm(event){
    event.preventDefault();

    profileName.textContent = profileInputName.value;

    profileDescription.textContent = profileInputDescription.value;

    closePopup();
}

editProfileButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", handleEditForm);
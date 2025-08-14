let editPopupButton = document.querySelector(".profile__info_header_edit-button");
let editPopup = document.querySelector("#edit-popup");
let closeEditPopupButton = document.querySelector(".popup__container_close-button");
let profileName = document.querySelector(".profile__info_header_name");
let profileNameInput = document.querySelector(".popup__container_form_input-name");
let editForm = document.querySelector("#form");
let profileDescription = document.querySelector(".profile__info_description");
let profileDescriptionInput = document.querySelector(".popup__container_form_input-description");

function openPopup() {
    editPopup.classList.add("popup_is-opened");

    profileNameInput.value = profileName.textContent;

    profileDescriptionInput.value = profileDescription.textContent;
}

function closePopup(){
    editPopup.classList.remove("popup_is-opened");
}

function handleEditForm(event) {
    event.preventDefault();

    profileName.textContent = profileNameInput.value;

    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
}

editPopupButton.addEventListener("click", openPopup);
closeEditPopupButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", handleEditForm);
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

//colocando o texto dos elementos de perfil nos inputs do popup

    profileInputName.value = profileName.textContent;

    profileInputDescription.value = profileDescription.textContent;
}

function closePopup(){
    editPopup.classList.remove("popup_opened")
}

function handleEditForm(event){
    event.preventDefault();

    //Agora, quando editarmos o texto do input, ele será atualizado no elemento de perfil    

    profileName.textContent = profileInputName.value;

    profileDescription.textContent = profileInputDescription.value;

    closePopup();
}

editProfileButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", handleEditForm);
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close-icon');
let name = document.querySelector('.profile__name');
let title = document.querySelector('.profile__title');

// Находим форму в DOM
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.form__input_id_name');
let jobInput = formElement.querySelector('.form__input_id_title');



function handleOpen(){
    nameInput.value = name.textContent
    jobInput.value = title.textContent
    popup.classList.add('popup_opened');
};

function handleClose(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleOpen);

close.addEventListener('click', handleClose);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


                                          
    name.textContent = nameInput.value;
    title.textContent = jobInput.value;
    handleClose();

    
    // Вставьте новые значения с помощью textContent
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 



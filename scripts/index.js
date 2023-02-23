let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close-icon');
let save = document.querySelector('.form__submit-button');
let name = document.querySelector('.profile__name');
let title = document.querySelector('.profile__title');
let logo = document.querySelector('.header__logo');
let like = document.querySelectorAll('.element__group');

// Находим форму в DOM
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.form__input_id_name');
let jobInput = formElement.querySelector('.form__input_id_title');


editButton.addEventListener('click', function(){
    nameInput.value = name.textContent
    jobInput.value = title.textContent
    popup.classList.add('popup_opened');
});

close.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
});



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    name.textContent = nameInput.value;
    title.textContent = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
save.addEventListener('submit', handleFormSubmit); 



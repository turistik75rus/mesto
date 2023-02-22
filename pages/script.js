let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
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
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#title');

like[0].addEventListener('click', function(){
    like[0].setAttribute('src', './images/setLike.svg');
});


logo.addEventListener('mouseover', function(){
    logo.setAttribute('src', './images/logoBlack.svg');
});
logo.addEventListener('mouseout', function(){
    logo.setAttribute('src', './images/logo.svg');
});

editButton.addEventListener('click', function(){
    nameInput.setAttribute('value', name.textContent);
    jobInput.setAttribute('value', title.textContent);
    popup.classList.add('popup_opend');
});

close.addEventListener('click', function(){
    popup.classList.remove('popup_opend');
});

save.addEventListener('click', function(){
    name.innerHTML = nameInput.value + `<a class="profile__edit-button" href="#"><img src="./images/pencil.svg" alt=""></a>`;
    title.textContent = jobInput.value;

    popup.classList.remove('popup_opend');
});






// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 



let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', function(){
    popup.classList.add('popup_opend');
});


let name = document.querySelector('.profile__name')
let title = document.querySelector('.profile__title')

// Находим форму в DOM
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#title');


nameInput.setAttribute('value', name.textContent);
jobInput.setAttribute('value', title.textContent);

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



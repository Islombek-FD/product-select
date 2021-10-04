window.addEventListener('DOMContentLoaded', function () {
    const   elOpenBtn = document.querySelector('.open'),
            elProducts = document.querySelectorAll('.product'),
            elProductBtns = document.querySelectorAll('.product-btn');
    
    function createCard() {
        const   elCard = document.createElement('div'),
                elCardField = document.createElement('div'),
                elCardHeading = document.createElement('h2'),
                elCardCloseBtn = document.createElement('button');

        elCard.classList.add('card');
        elCardField.classList.add('card-field');
        elCardHeading.classList.add('card-heading');
        elCardCloseBtn.classList.add('card-close__btn');

        elCardHeading.textContent = 'В нащей корзине';
        elCardCloseBtn.textContent = 'Закрыть'; 

        elCard.appendChild(elCardHeading);
        elCard.appendChild(elCardField);
        elCard.appendChild(elCardCloseBtn);

        document.body.appendChild(elCard);
    }

    createCard();

    const   elCard = document.querySelector('.card'),
            elCardCloseBtn = document.querySelector('.card-close__btn'),
            elCardField = document.querySelector('.card-field');

    elOpenBtn.addEventListener('click', function () {
        elCard.style.display = 'block'; 
    });

    elCardCloseBtn.addEventListener('click', function () {
        elCard.style.display = 'none';
    });

    elProductBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            const elCloneProduct = elProducts[i].cloneNode(true);
                elCloneProductBtn = elCloneProduct.querySelector('.product-btn');

            elCloneProductBtn.remove();
            elCardField.appendChild(elCloneProduct);
            elProducts[i].remove();
        })

    })
})

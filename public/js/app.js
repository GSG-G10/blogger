const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.close');

modalButton.addEventListener('click',() => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
})
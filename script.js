const button = document.querySelector('.iconRow');
const card = document.querySelector('.card');

var isDisplayed = true;

button.addEventListener('click', () => {
    if(isDisplayed){
        card.style.display = 'none';
        isDisplayed = false;
    }else{
        card.style.display = 'flex';
        isDisplayed = true;
    }
});
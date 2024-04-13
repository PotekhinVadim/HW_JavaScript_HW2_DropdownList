function dropdownList (){
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
};

function closeList (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
};

const selectActive = document.querySelector('.dropdown__value')
selectActive.addEventListener('click', dropdownList);

var newChoice = Array.from(document.querySelectorAll('.dropdown__item'))
newChoice.forEach((item, index) =>{
    item.onclick = () => {
        closeList()
        selectActive.textContent = newChoice[index].textContent
        return false
};
});
const buttonChoose = document.querySelector('.main .logo-btn button');
const peopleList = document.querySelector('.main .people-list')


window.onload = function(){
    buttonChoose.addEventListener('click', function(){
        if(peopleList.style.display == 'flex'){
            peopleList.style.display = 'none';
        }else{
            peopleList.style.display = 'flex';
        }
})}

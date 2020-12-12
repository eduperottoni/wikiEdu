const buttonChoose = document.querySelector('.main .logo-btn button');
const peopleList = document.querySelector('.main .people-list')
const foot = document.querySelector('footer')

window.onload = function(){
    buttonChoose.addEventListener('click', function(){
        if(peopleList.style.display == 'flex'){
            peopleList.style.display = 'none';
            foot.style.position = 'absolute';
            foot.style.bottom = '0';
        }else{
            peopleList.style.display = 'flex';
            foot.style.position = 'initial';
        }
})}

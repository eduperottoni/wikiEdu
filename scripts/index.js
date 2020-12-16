const buttonChoose = document.querySelector('.main .logo-btn button');
const peopleList = document.querySelector('.main .people-list')
const foot = document.querySelector('footer')
const main = document.querySelector('.main .container')

window.onload = function(){
    buttonChoose.addEventListener('click', function(){
        if (window.matchMedia('(min-width:1100px)').matches){
            if(peopleList.style.display == 'flex'){
                peopleList.style.display = 'none';
            }else{
                peopleList.style.display='flex';
            }
        }else{
            if(peopleList.style.display == 'flex'){
                peopleList.style.display = 'none';
                foot.style.position = 'absolute';
            }else{
                peopleList.style.display = 'flex';
                foot.style.position = 'initial';
                peopleList.style.marginBottom = '20px';
            }
        }    
    }
)}

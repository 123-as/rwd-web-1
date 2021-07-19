const hamburger=document.querySelector('.hamburger');
const header=document.querySelector('.header');
const body=document.querySelector('body');
hamburger.addEventListener('click',function(e){
    e.preventDefault();
    if(header.classList.contains("open")){
        header.classList.remove('open');
        body.classList.remove('noscroll');
    }
    else{
        header.classList.add('open');
        body.classList.add('noscroll');
    }
})
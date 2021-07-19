const hamburger=document.querySelector('.hamburger');
const header=document.querySelector('.header');

hamburger.addEventListener('click',function(e){
    e.preventDefault();
    if(header.classList.contains("open")){
        header.classList.remove('open');
    }
    else{
        header.classList.add('open');
    }
})
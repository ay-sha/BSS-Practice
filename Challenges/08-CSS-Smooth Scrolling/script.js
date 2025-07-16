document.addEventListener('DOMContentLoaded',function(){
    const header = document.querySelector('.header');
    
    function transparentNav(){
        if(window.scrollY>0){
            header.classList.add('transparent');
            // console.log('Aysha')
        }
        else{
            header.classList.remove('transparent');
        }
    }

    window.addEventListener('scroll', transparentNav);
});
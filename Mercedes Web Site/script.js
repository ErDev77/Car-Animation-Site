const logo = document.querySelector('.logo');
const amg = document.querySelector('.amg'); 
const car_start = document.querySelector('.car_start');
const car_name = document.querySelector('.car_name');
const car_right = document.querySelector('.car_right');
const background = document.querySelector('.background');
const car_back = document.querySelector('.car_back');




window.addEventListener("scroll",(event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll >= 260){
        logo.style.transform = 'translate(12%, 0%) scale(0.5)'
        amg.style.transform = 'translate(460%, 100%)'
        amg.style.opacity = '1'
        car_start.style.opacity = '1'
        car_start.style.transform = 'translate(105%, 70%) scale(1)'
        car_name.style.transform = 'translate(10%, 170%) scale(1)'
        car_name.style.opacity = '0.6'
        car_name.style.fontSize = '40px'
        background.style.transform = 'translate(-150%, 58%) scale(0)'
        background.style.opacity = '0'
    }
    if(scroll <= 260){
        logo.style.transform = 'translate(12%, 60%) scale(1)'
        amg.style.transform = 'translate(460%, 450%)'
        amg.style.opacity = '0'
        car_start.style.opacity = '0'
        car_start.style.transform = 'translate(105%, 70%) scale(0)'
        car_name.style.transform = 'translate(10%, 170%) scale(0)'
        car_name.style.opacity = '0'
        car_name.style.fontSize = '40px'
        background.style.transform = 'translate(-150%, 58%) scale(0)'
        background.style.opacity = '0'
    }

    if(scroll >= 800) {
        logo.style.transform = 'translate(-33%, -25%) scale(0.3)'
        amg.style.transform = 'translate(890%, 1%)'
        amg.style.opacity = '1'
        car_start.style.opacity = '0'
        car_start.style.transform = 'translate(105%, 70%) scale(0)'
        car_name.style.transform = 'translate(2%, 128%) scale(1)'
        car_name.style.fontSize = '17px'
        car_name.style.opacity = '1'
        car_right.style.transform = 'translate(110%, 80%) scale(1)'
        car_right.style.opacity = '1'
        background.style.transform = 'translate(5%,58%) scale(1)'
        background.style.opacity = '1'
    }
    if(scroll <= 800  && scroll >= 260){
        logo.style.transform = 'translate(12%, 0%) scale(0.5)'
        amg.style.transform = 'translate(460%, 100%)'
        amg.style.opacity = '1'
        car_start.style.opacity = '1'
        car_start.style.transform = 'translate(105%, 70%) scale(1)'
        car_name.style.transform = 'translate(10%, 170%) scale(1)'
        car_name.style.opacity = '0.6'
        car_name.style.fontSize = '40px'
        car_right.style.transform = 'translate(80%, 100%) scale(0)'
        car_right.style.opacity = '0'
        background.style.transform = 'translate(-150%, 58%) scale(0)'
        background.style.opacity = '0'
    }
    if(scroll >= 1300) {
        car_back.style.transform = 'translate(75%, 80%) scale(1)'          
        car_back.style.opacity = '1'  
        logo.style.transform = 'translate(12%, 0%) scale(0.5)'
        amg.style.transform = 'translate(460%, 100%)'
        amg.style.opacity = '1'
        car_start.style.opacity = '0'
        car_start.style.transform = 'translate(105%, 70%) scale(0)'
        car_name.style.transform = 'translate(10%, 170%) scale(1)'
        car_name.style.opacity = '0.6'
        car_name.style.fontSize = '40px'
        car_right.style.transform = 'translate(80%, 100%) scale(0)'
        car_right.style.opacity = '0'
        background.style.transform = 'translate(-150%, 58%) scale(0)'
        background.style.opacity = '0'                                          
    }
    if(scroll <= 1280 && scroll >= 800) {
        car_back.style.transform = 'translate(75%, 80%) scale(0)'          
        car_back.style.opacity = '0'
        car_back.style.transition = '3.5s'
    }
    if(scroll >= 1800) {
        car_back.style.transform = 'translate(75%, 80%) scale(0)'          
        car_back.style.opacity = '0'
        car_back.style.transition = '3.5s'
        logo.style.transform = 'translate(12%, 60%) scale(1)'
        amg.style.transform = 'translate(460%, 450%)'
        amg.style.opacity = '0'
        car_name.style.transform = 'translate(10%, 170%) scale(0)'
        car_name.style.opacity = '0'
        car_name.style.fontSize = '40px'
    }
})


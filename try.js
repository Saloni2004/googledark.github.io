const body = document.querySelector('body');
const h=document.querySelectorAll('.h');
const icons=document.querySelectorAll('.material-icons');
const logo=document.querySelector(".logo-img");
const c_2=document.querySelector('#c-2');
const btn_1=document.querySelector('#btn-1');
const btn_2=document.querySelector('#btn-2');
const c_6=document.querySelector('#c-6');
const lan=document.querySelectorAll('.lan');
const footer=document.querySelector('footer');
const f=document.querySelectorAll('.f');


function lightmode(){
    body.style.background='white';
    body.style.transition = '2s';

    h.forEach(function(h){
        h.style.color='black';
        h.style.transition='2s';
    })

    icons.forEach(function(icons){
        icons.style.color='#9aa0a6';
        icons.style.transition='2s';
    })

    logo.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png";
    logo.style.tranistion='2s';

    c_2.style.color='black';
    c_2.style.transition='2s';
    c_2.style.background='transparent';

    btn_1.style.color='#3c4043';
    btn_1.style.transition='2s';
    btn_1.style.backgroundColor='#f8f9fa';

    btn_2.style.color='#3c4043';
    btn_2.style.transition='2s';
    btn_2.style.backgroundColor='#f8f9fa';
    
     
    c_6.style.color='black';
    c_6.style.transition='2s';

    lan.forEach(function(lan){
        lan.style.color='blue';
        lan.style.transition='2s';
    })
    
    footer.style.background='#f2f2f2';
    footer.style.transition='2s';

    f.forEach(function(f){
        f.style.color='gray';
        f.style.transition='2s';
    })   
}

function darkmode(){
    body.style.background='#2b2c2c';
    body.style.transition='2s';
    
    
    h.forEach(function(h){
        h.style.color='white';
        h.style.transition='2s';
    })

    icons.forEach(function(icons){
        icons.style.color='#9aa0a6';
        icons.style.transition='2s';
    })

    logo.src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    logo.style.transition='2s';

    c_2.style.color='#e8eaed';
    c_2.style.transition='2s';
    c_2.style.background='transparent';

    btn_1.style.color='#e8eaed';
    btn_1.style.transition='2s';
    btn_1.style.backgroundColor='#303134';
    btn_1.style.border='1px solid #303134';

    btn_2.style.color='#e8eaed';
    btn_2.style.transition='2s';
    btn_2.style.backgroundColor='#303134';
    btn_2.style.border='1px solid #303134';

     
    c_6.style.color='#f2f2f2';
    c_6.style.transition='2s';
    
    lan.forEach(function(lan){
        lan.style.color='#8ab4f8';
        lan.style.transition='2s';
    })
    
    footer.style.background='#202021';
    footer.style.transition='2s';

    f.forEach(function(f){
        f.style.color='#9aa0a6';
        f.style.transition='2s';
    })
}

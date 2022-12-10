const img=document.querySelector(".gimg");
const adv=document.querySelector('#adv');
const find=document.querySelector('#find');
const all=document.querySelector('#all');
const d_1=document.querySelector('#xX4UFf');
const d_2=document.querySelector('#CwYCWc');
const d_3=document.querySelector('#mSoczb');
const d_4=document.querySelector('#t2dX1c');
const d_5=document.querySelector('#LK5akc');
const d_6=document.querySelector('#d_6');
const thiis=document.querySelector('#this');
const any=document.querySelector('#any');
const none=document.querySelector('#none');
const number=document.querySelector('#number');
const to=document.querySelector('#to');
const bu=document.querySelector('#advanced-submit-button');
const body=document.querySelector('body');

function lightmode(){
    body.style.background='white';
    img.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png";
    adv.style.color='red';
    find.style.color='black';
    all.style.color='black';
    thiis.style.color='black';
    any.style.color='black';
    none.style.color='black';
    number.style.color='black';
    to.style.color='black';
    d_1.style.background='#d9d9d9';
    d_2.style.background='white';
    d_3.style.background='white';
    d_4.style.background='white';
    d_5.style.background='white';
    d_6.style.background='white';
    d_1.style.borderColor='#d9d9d9';
    d_1.style.borderTopColor='#c0c0c0';
   
  
    d_1.style.color='black';
    d_2.style.color='black';
    d_3.style.color='black';
    d_4.style.color='black';
    d_5.style.color='black';
    d_6.style.color='black';
    bu.style.background='#007cf8';
    bu.style.border='#f8f9fa';
    bu.style.color='#f5f7f8';
}

function darkmode(){
    body.style.background='#2b2c2c';
    img.src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    adv.style.color='#f28b82';
    find.style.color='#e8eaed';
    all.style.color='#bdc1c6';
    thiis.style.color='#bdc1c6';
    any.style.color='#bdc1c6';
    none.style.color='#bdc1c6';
    number.style.color='#bdc1c6';
    to.style.color='#bdc1c6';
    d_1.style.background='#202124';
    d_2.style.background='#202124';
    d_3.style.background='#202124';
    d_4.style.background='#202124';
    d_5.style.background='#202124';
    d_6.style.background='#202124';
    d_1.style.border='#5f6368';
    d_2.style.border='#5f6368';
    d_3.style.border='#5f6368';
    d_4.style.border='#5f6368';
    d_5.style.border='#5f6368';
    d_6.style.border='#5f6368';
    d_1.style.color='#bdc1c6';
    d_2.style.color='#bdc1c6';
    d_3.style.color='#bdc1c6';
    d_4.style.color='#bdc1c6';
    d_5.style.color='#bdc1c6';
    d_6.style.color='#bdc1c6';
    bu.style.background='#8ab4f8';
    bu.style.border='#8ab4f8';
    bu.style.color='#202124';

}
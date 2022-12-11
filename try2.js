const img=document.querySelector(".gimg");
const adv=document.querySelector('#adv');
const so=document.querySelectorAll('.so');
const find=document.querySelector('#find')
const d=document.querySelectorAll('.dabba');
const d_1=document.querySelectorAll('.dabba-1');
const bu=document.querySelector('#advanced-submit-button');
const body=document.querySelector('body');

function lightmode(){
    body.style.background='white';
    body.style.transition='2s';

    img.style.transition='2s';
    img.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png";
    
    adv.style.color='red';
    adv.style.transition='2s';

    find.style.color='black';
    find.style.transition='2s';
    
    so.forEach(function(so){
        so.style.color='black';
        so.style.transition='2s';
    })

    d.forEach(function(d){
        d.style.color='black';
        d.style.transition='2s';
        d.style.border='1px solid #d9d9d9';
        d.style.borderTopColor='#c0c0c0';
        d.style.background='white'
    })
    d_1.forEach(function(d_1){
        d_1.style.color='black';
        d_1.style.transition='2s';
        d_1.style.border='1px solid #d9d9d9';
        d_1.style.borderTopColor='#c0c0c0';
        d_1.style.background='white';
    })

    bu.style.background='#007cf8';
    bu.style.border='#f8f9fa';
    bu.style.color='#f5f7f8';
}

function darkmode(){
    body.style.background='#2b2c2c';
    body.style.transition='2s';

    img.src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
    img.style.transition='2s';

    adv.style.color='#f28b82';
    adv.style.transition='2s';

    find.style.color='#e8eaed';
    find.style.transition='2s';

    so.forEach(function(so){
        so.style.color='#bdc1c6';
        so.style.transition='2s';
    })

    d.forEach(function(d){
        d.style.color='#bdc1c6';
        d.style.transition='2s';
        d.style.border='1px solid #5f6368';
        d.style.borderTopColor='#c0c0c0';
        d.style.background='#202124';
    })
    d_1.forEach(function(d_1){
        d_1.style.color='#bdc1c6';
        d_1.style.transition='2s';
        d_1.style.border='1px solid #5f6368';
        d_1.style.borderTopColor='#c0c0c0';
        d_1.style.background='#202124';
    })
   
  
    bu.style.background='#8ab4f8';
    bu.style.border='#8ab4f8';
    bu.style.color='#202124';

}

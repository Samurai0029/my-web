starter = document.getElementById('starter');
function clickToStart() {
    starter.style.display = 'none'
}

const menu_btn = document.querySelector('.ri-menu-3-line');
const menu_box = document.querySelector('.menu ul');
const menu_items = document.querySelectorAll('.menu ul li');
function menuOption(){ 
    if (document.documentElement.offsetWidth <= 768){
        if (menu_btn.className == 'ri-menu-3-line') {
            menu_btn.className = 'ri-close-line';
            menu_box.style.right = '0%';
        }
        else{
            menu_btn.className = 'ri-menu-3-line';
            menu_box.style.right = '-100%';
        }
    }

}

function xaker(params){
    console.log(params);
}


//Mail settings


function sendMail(){
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    } 
    const serviceID = 'service_jn8yp8k';
    const templateID = 'template_l01bx7c';
    emailjs.sendForm(serviceID, templateID, params).then(
        () =>{
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            alert("Your message sent successfully");
        }
        ),(err) => {
        alert("Error");
        console.log(err)
    };
}



let emoji = ['✌', '👽' , '👻', '😎', '🔥'];

const iconSlot = document.getElementById('change-icon');
setInterval(()=>{
    iconSlot.textContent = emoji[Math.floor((Math.random()*emoji.length))] + ' Javokhir';
},2000)
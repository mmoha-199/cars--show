const carBtn = document.getElementById('show-cr');
const carList = document.getElementById('list-cr');
const navBtn = document.getElementById('menu-btn');
const navList = document.getElementById('top-list');
const CONTA = document.getElementById('main-dv');


function toogleCarL(){ carList.classList.toggle('visible')};
function toogleNav(){ navList.classList.toggle('visible');
CONTA.classList.toggle('shrink')};

carBtn.addEventListener('click',toogleCarL);
navBtn.addEventListener('click',toogleNav);


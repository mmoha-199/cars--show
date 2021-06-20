const carbtn = document.getElementById('show-cr');
const carlist = document.getElementById('list-cr');
const navbtn = document.getElementById('menu-btn');
const navlist = document.getElementById('top-list');
const conta = document.getElementById('main-dv');


function tooglecarl(){ carlist.classList.toggle('visible')};
function tooglenav(){ navlist.classList.toggle('visible');
conta.classlist.toggle('shrink')};

carbtn.addEventListener('click',tooglecarl);
navbtn.addEventListener('click',tooglenav);


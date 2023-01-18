 burger=document.getElementsByClassName('burger');
 navbar=document.getElementsByClassName('navbar');
 navlist=document.getElementsByClassName('nav-list');
 rightnav=document.getElementsByClassName('rightnav');

burger.addEventListener('click', function click(){
rightnav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})
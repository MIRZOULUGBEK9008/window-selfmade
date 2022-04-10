const elLightMode = document.querySelector('.light-mode');
const elNightMode = document.querySelector('.night-mode');
elNightMode.addEventListener('click', function (){
document.body.classList.add('dark-mode');
});
elLightMode.addEventListener('click', function (){
document.body.classList.remove('dark-mode');
});
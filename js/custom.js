// ARROWS MENU DROPDPWN 1 E 2 

var myDropdown1 = document.getElementById('navbarScrollingDropdown1');
var myDropdown2 = document.getElementById('navbarScrollingDropdown2');
var arrow1 = document.querySelector(".arrow-menu1");
var arrow2 = document.querySelector(".arrow-menu2");

(function(){
    myDropdown1.addEventListener('show.bs.dropdown', function () {
        arrow1.className = "arrow-menu1 gira";    
    });    
    myDropdown1.addEventListener('hide.bs.dropdown', function () {
        arrow1.className = "arrow-menu1 gira-volta";
    });    
    
    myDropdown2.addEventListener('show.bs.dropdown', function () {
        arrow2.className = "arrow-menu1 gira";    
    });    
    myDropdown2.addEventListener('hide.bs.dropdown', function () {
        arrow2.className = "arrow-menu1 gira-volta";
    });
})();

var modal = document.querySelector(".modal");
var popup = document.querySelector(".popup");
var html = document.querySelector("html");
var site = document.querySelector(".site");    
var fechar = document.querySelector(".btn-fechar");
var abrePopup = 0;


// ABRE O POPUP UMA VEZ APENAS
(function(){
    document.addEventListener("mouseleave", function() {
        if (abrePopup < 1) {
            site.className = "site visivel";
            popup.className = "popup visivelPopup";        
            modal.className = "modal visivel";        
            html.style.cssText = "overflow-y: hidden";
            abrePopup = abrePopup + 1;
        }                
    });    
})();


// FECHAR POPUP QUANDO CLICADA EM QUALQUER LUGAR DA JANELA
(function(){
    document.addEventListener('mouseup', function(e) {    
        if (!popup.contains(e.target)) {
            site.className = "site invisivel";
            modal.className = "modal invisivel";
            html.style.cssText = "overflow-y: normal"
        }
    });
})();

// FECHA POPUP QUANDO CLICA NO "X"
(function(){
    fechar.addEventListener('click', function(e) {    
        if (modal.className === "modal visivel") {
            site.className = "site invisivel";
            modal.className = "modal invisivel";
            html.style.cssText = "overflow-y: normal"
        }
    });
})();





   
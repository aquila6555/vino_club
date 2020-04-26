// https://www.youtube.com/watch?v=qaKoEd39dFY
// https://github.com/escueladigital/viviendo-sin-jquery

var toggleMenu = document.getElementById("js-toggle-menu");
var menu = document.getElementById("js-menu");

// classList es una propiedad de los elementos que devuelve
// un DomTokenList con todas las clases. Esta propiedad
// poseee los siguientes métodos:
// add()
// remove()
// toggle()

toggleMenu.addEventListener("click", function(){
  // menu.classList.add("mostrar");
  // menu.classList.remove("mostrar");
  toggleMenu.classList.toggle("mostrarx");
  menu.classList.toggle("mostrar");
})

// Correspondencia entre jQuery y JS
// jQuery       $(el).toggleClass("myClass");
// JavaScript   el.classList.toggle("myClass");

// jQuery version
// $("js-toggle-menu").click(function(){
//  $(this).next().slidetoggle();  
// })
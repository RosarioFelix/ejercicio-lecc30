 window.onload=function(){

   var lastScrollTop = 0;


   var link=document.getElementsByClassName('link');
   var h1=document.getElementsByTagName('h1');
//srcoll
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById("nav-background").style.height ="80px";
     document.getElementById("nav-background").style.paddingTop ="2%";
     document.getElementById("nav-background").style.transition ="0.5s";
     h1[0].style.fontSize= "22px";
   };
   if(currentScroll<=3){
       document.getElementById("nav-background").style.height="120px";
       document.getElementById("nav-background").style.paddingTop ="3%";
       h1[0].style.fontSize="30px";

};
   lastScrollTop = currentScroll;

});


//IMAGENES

  var pagImagenes= document.getElementById('container-portafolio');

  for(var i =1; i<=6; i++){

  var creandoDiv = document.createElement("div");
  creandoDiv.classList.add("grid");

  var figura = document.createElement("figure");
  figura.classList.add("imagenPag");

  var creandoDivDos= document.createElement("div");
  creandoDivDos.classList.add("modal")

  var imagen = document.createElement("img");
  imagen.classList.add("img-box");

  var nombre= document.createElement('span')
  nombre.innerText="";

  imagen.setAttribute("src","assets/images/portfolio/"+ i+".png");

  figura.appendChild(imagen);
  figura.appendChild(creandoDivDos);
  creandoDiv.appendChild(figura);
  // el span se pone como hijo de creandoDiv
  creandoDiv.appendChild(nombre);
  pagImagenes.appendChild(creandoDiv);
}
};

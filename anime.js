function openCity(evt, name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Calculer la largeur du body

const widthOutput = document.querySelector('body');
var header = document.querySelector("header");
var footer = document.querySelector("footer");

function reportWindowSize() {
  widthOutput.contains = window.innerWidth;
  const style = getComputedStyle(header)
  const style1 = getComputedStyle(footer)

  //des que la largeur change enlever les dropdown et le menu et le fond
  var drop = document.querySelectorAll(".dropdown");
  var fond = document.querySelector('.op')

  drop.forEach(element => element.classList.add("display_none") && element.classList.remove("display_flex"))

  fond.classList.add("display_none")
  fond.classList.remove("display_block")


  var menu = document.querySelector(".menu");
  menu.classList.add("display_none")
  menu.classList.remove("display_flex")

  close_drop()


}
window.addEventListener('resize', reportWindowSize);






// Menu

// afficher le menu quand click sur le burgeur
function menu(e) {
  var menu = document.querySelector(".menu");
  var footer = document.querySelector("footer");
  var fond = document.querySelector('.op')

  if(menu.classList.contains("display_none")){

    menu.classList.remove("display_none")
    menu.classList.add("display_flex")

    footer.classList.add("footer1");

    fond.classList.remove("display_none")
    fond.classList.add("display_block")


  }else{

    menu.classList.add("display_none")
    menu.classList.remove("display_flex")

    footer.classList.remove("footer1");

    fond.classList.add("display_none")
    fond.classList.remove("display_block")
  }
}

function close_menu(){
  var menu = document.querySelector(".menu");
  var footer = document.querySelector("footer");
  var fond = document.querySelector('.op')
  menu.classList.add("display_none")
  menu.classList.remove("display_flex")

  footer.classList.remove("footer1");

  fond.classList.add("display_none")
  fond.classList.remove("display_block")
}


function drope1(){
  var drop1 = document.querySelector(".dropdown1")
  var fond = document.querySelector(".op")
  const style = getComputedStyle(drop1)

  var drop2 = document.querySelector(".dropdown2")
  var drop3 = document.querySelector(".dropdown3")

  if(style.display == "none"){
    drop1.classList.add("display_flex")
    drop1.classList.remove("display_none")

    fond.classList.add("display_block")
    fond.classList.remove("display_none")

    drop2.classList.remove("display_flex")
    drop2.classList.add("display_none")

    drop3.classList.remove("display_flex")
    drop3.classList.add("display_none")
  }else{
    drop1.classList.remove("display_flex")
    drop1.classList.add("display_none")

    fond.classList.remove("display_block")
    fond.classList.add("display_none")
  }

}

function drope2(){
  var drop2 = document.querySelector(".dropdown2")
  var fond = document.querySelector(".op")
  const style2 = getComputedStyle(drop2)

  var drop1 = document.querySelector(".dropdown1")
  var drop3 = document.querySelector(".dropdown3")

  if(style2.display == "none"){
    drop2.classList.add("display_flex")
    drop2.classList.remove("display_none")

    fond.classList.add("display_block")
    fond.classList.remove("display_none")

    drop1.classList.remove("display_flex")
    drop1.classList.add("display_none")

    drop3.classList.remove("display_flex")
    drop3.classList.add("display_none")
  }else{
    drop2.classList.remove("display_flex")
    drop2.classList.add("display_none")

    fond.classList.remove("display_block")
    fond.classList.add("display_none")
  }

}

function drope3(){
  var drop3 = document.querySelector(".dropdown3")
  var fond = document.querySelector(".op")
  const style3 = getComputedStyle(drop3)

  var drop1 = document.querySelector(".dropdown1")
  var drop2 = document.querySelector(".dropdown2")

  if(style3.display == "none"){
    drop3.classList.add("display_flex")
    drop3.classList.remove("display_none")

    fond.classList.add("display_block")
    fond.classList.remove("display_none")

    drop1.classList.remove("display_flex")
    drop1.classList.add("display_none")

    drop2.classList.remove("display_flex")
    drop2.classList.add("display_none")
  }else{
    drop3.classList.remove("display_flex")
    drop3.classList.add("display_none")

    fond.classList.remove("display_block")
    fond.classList.add("display_none")
  }

}

function close_drop1(){
  var drop1 = document.querySelector(".dropdown1")

  var fond = document.querySelector(".op")

  drop1.classList.remove("display_flex")
  drop1.classList.add("display_none")

  fond.classList.remove("display_block")
  fond.classList.add("display_none")

}

function close_drop2(){
  var drop2 = document.querySelector(".dropdown2")

  var fond = document.querySelector(".op")

  drop2.classList.remove("display_flex")
  drop2.classList.add("display_none")

  fond.classList.remove("display_block")
  fond.classList.add("display_none")

}

function close_drop3(){
  var drop3 = document.querySelector(".dropdown3")

  var fond = document.querySelector(".op")

  drop3.classList.remove("display_flex")
  drop3.classList.add("display_none")

  fond.classList.remove("display_block")
  fond.classList.add("display_none")

}


function close_drop(){
  close_drop1()
  close_drop2()
  close_drop3(

  )
}

// Page html charger ? Alors faire la function
window.onload = function(){
  // au click sur l'id burger executer function menu()
  const burger = document.querySelector('#burger');
  burger.addEventListener("click", (e) => menu(e))

  const croix = document.querySelector('#croix');
  croix.addEventListener("click", (e) => menu(e));


  // dropdown()

  const text1 = document.querySelector("#text1")
  text1.addEventListener("click", (e) => drope1(e));

  const text2 = document.querySelector("#text2")
  text2.addEventListener("click", (e) => drope2(e));

  const text3 = document.querySelector("#text3")
  text3.addEventListener("click", (e) => drope3(e));

  const croix1 = document.querySelector('.croix1');
  croix1.addEventListener("click", (e) => close_drop1(e));

  const croix2 = document.querySelector('.croix2');
  croix2.addEventListener("click", (e) => close_drop2(e));

  const croix3 = document.querySelector('.croix3');
  croix3.addEventListener("click", (e) => close_drop3(e));
}
// Menu

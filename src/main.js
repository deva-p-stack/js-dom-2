import './style.css'
function removeitem(){
    section.classList.remove(
    "bg-red-300",
    "bg-blue-300",
    "bg-gray-400",
    "bg-indigo-400",
    "bg-green-400",
    "bg-teal-600",
    "bg-emerald-400",
    "bg-sky-300",
    "bg-slate-900",

  );
}
let colorbtn = document.querySelector('#colorchange');

let section = document.querySelector('.containersection');
let colorcode = document.querySelector("#colorcode");

colorbtn.addEventListener("click",function(){

let color  = [
  { colors: "bg-red-300", hex: "#FCA5A5" },
  { colors: "bg-green-400", hex: "#4ADE80" },
  { colors: "bg-blue-300", hex: "#93C5FD" },
  { colors: "bg-gray-400", hex: "#9CA3AF" },
  { colors: "bg-indigo-400", hex: "#818CF8" },
  { colors: "bg-emerald-400", hex: "#34D399" },
  { colors: "bg-sky-300", hex: "#7DD3FC" }
];
let randomcolor = Math.floor(Math.random() * color.length)
removeitem();

section.classList.add(color[randomcolor].colors);
colorcode.textContent = `Hex color: ${color[randomcolor].hex}`;


})
//  dark mode and light mode 
let darkbtn = document.querySelector('#darkbtn');
let lightbtn = document.querySelector('#lightbtn');
let parent = document.querySelector('#parent');
let title = document.querySelector('#title');
let btncon = document.querySelector('.btncon');

lightbtn.addEventListener("click",function(){

 parent.classList.remove("bg-slate-800");
 title.classList.remove("text-gray-100");
 section.classList.remove("bg-slate-900");
 colorbtn.classList.remove("bg-emerald-600");


  btncon.querySelectorAll('button').forEach((btn) => {
    btn.classList.remove("bg-emerald-600"); });

 section.classList.add("bg-teal-600");
 parent.classList.add("bg-green-100");
 title.classList.add("text-black");
 colorbtn.classList.add("bg-emerald-300");


  btncon.querySelectorAll('button').forEach((btn) => {
    btn.classList.add("bg-emerald-300");
  });

})

darkbtn.addEventListener("click",function(){

section.classList.remove("bg-teal-600");
 colorbtn.classList.remove("bg-emerald-300");

section.classList.add("bg-slate-900");
 parent.classList.add("bg-slate-800");
 title.classList.add("text-gray-100");
 btncon.querySelectorAll('button').forEach((btn) => {
        btn.classList.add("bg-emerald-600"); })

 colorbtn.classList.add("bg-emerald-600");

})

// button  fixed color

let indigo = document.querySelector("#indigo");
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let teal = document.querySelector('#teal');
let gray = document.querySelector('#gray');

indigo.addEventListener("click",function(){

    removeitem();
 section.classList.add("bg-indigo-400");
})

red.addEventListener("click",function(){
    removeitem();
 section.classList.add("bg-red-300");
})

blue.addEventListener("click",function (){
    removeitem();
 section.classList.add("bg-blue-300");
})

teal.addEventListener("click",function(){
    removeitem();
 section.classList.add("bg-teal-600");
})

gray.addEventListener("click",function(){
    removeitem();
 section.classList.add("bg-gray-400");
})
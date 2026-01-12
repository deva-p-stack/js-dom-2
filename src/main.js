import './style.css'

let inputname = document.querySelector('#inputname');
let errorname = document.querySelector('.errorname')
let greetbtn = document.querySelector('#Greet');
let containersection = document.querySelector('.containersection');
let colorbtn = document.querySelector('#colorchange');

 function success(){  
  if(inputname.value === ""){
    errorname.classList.remove("invisible");
    return ;
  }
  else{
    errorname.classList.add("invisible");
  }
    let namevalue = inputname.value;
    let newdiv = document.createElement("div");
    newdiv.className="flex flex-col w-full max-w-sm bg-green-100 m-5 justify-center items-center rounded-2xl h-[30vh] newdiv";
    
    let content = document.createElement("h2");
    content.className="text-xl font-semibold text-center p-3";
    content.textContent = `Hello ${namevalue}, Welcome to CyberDude!`;

    newdiv.append(content);
    containersection.append(newdiv);

    greetbtn.removeEventListener("click",success);

  }
greetbtn.addEventListener("click", success);


colorbtn.addEventListener("click",function(){

let color = [ "bg-red-400","bg-green-100","bg-blue-400","bg-gray-400","bg-indigo-400"];

let newdiv = document.querySelector('.newdiv');

let randomcolor = Math.floor(Math.random() * color.length)


newdiv.classList.remove(
    "bg-red-400",
    "bg-blue-400",
    "bg-gray-400",
    "bg-indigo-400",
    "bg-green-100"
  );


newdiv.classList.add(color[randomcolor]);

})
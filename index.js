const text = document.querySelector(".fancy")

const strText = text.textContent;

const splitText = strText.split("");

text.textContent = ""

for(let i = 0; i < splitText.length; i++){
text.innerHTML += "<span>" + splitText[i] + "</span>";

}

let char = 0;
let timer = setInterval(onTick, 50); 

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
    
        complete();
        switchUP()
        return;
    }
}

function complete(){

    clearInterval(timer);
     timer = null;
    
}
const text2 = document.querySelector(".fancy2")

const strText2 = text2.textContent;

const splitText2 = strText2.split("");

text2.textContent = "";

for(let i = 0; i < splitText2.length; i++){
text2.innerHTML += "<span>" + splitText2[i] + "</span>";

}

let char2 = 0;
let timer2 = setInterval(onTick2, 40); 

function onTick2(){
    const span = text2.querySelectorAll('span')[char2];
    span.classList.add('fade');
    char2++
    if(char2 === splitText2.length){
        complete2();
        
        return;
    }
}





function complete2(){
    clearInterval(timer2);
     timer2 = null;
    
}

function switchUP(){
const text = document.querySelector(".fancy");

const strText = "Hello, I'm Brian Cancel."

const splitText = strText.split("");

text.textContent = ""; 

for(let i = 0; i < splitText.length; i++){
text.innerHTML += "<span>" + splitText[i] + "</span>";
} 

let char = 0;
let timer = setInterval(onTick, 50); 

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        welcome();
        return;
    }
}
}


function welcome (){
    const text = document.querySelector(".fancy2");

    
    let strText = "I'm an ATL based full-stack developer, #frontend passionate";

const splitText = strText.split("");

text.textContent = ""; 

for(let i = 0; i < splitText.length; i++){
text.innerHTML += "<span>" + splitText[i] + "</span>";
} 

let char = 0;
let timer = setInterval(onTick, 60); 

function onTick(){
    const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

}


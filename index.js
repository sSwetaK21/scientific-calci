let screen = document.querySelector('#screen')
// let buttons = Array.from(document.getElementsByClassName('btn'))
let btn = document.querySelectorAll('.btn');


// buttons.map( (btn) => {
//     btn.addEventListener("click", (event)=>{
//         console.log(event);
//         let key = event.target.innerText
//         if(key == "A/c"){
//             screen.value += ""
//         }


//     })
// }

// )

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = "*";
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin(){
    screen.value = Math.sin(screen.value)
}

function cos(){
    screen.value = Math.cos(screen.value)
}

function tan(){
    screen.value = Math.tan(screen.value)
}

function pi(){
    screen.value = Math.pi(screen.value)
}


function pow(){
    screen.value = Math.pow(screen.value, 2)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value)
}

function log(){
    screen.value = Math.log(screen.value)
}


function e(){
    screen.value *= 2.71828182846;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function fact(){
    let fact = 1;
    for(let i=1; i<=screen.value ; i++){
        fact *= i
    }
    screen.value= fact
}
let screen = document.querySelector('#screen')
// let buttons = Array.from(document.getElementsByClassName('btn'))
var btn = document.querySelectorAll('.btn');


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
    screen.value = Math.pow(screen.value)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value)
}

function log(){
    screen.value = Math.log(screen.value)
}


function e(){
    screen.value = 2.71828182846;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
// console.log("Hello world");

// let answer = 0;
// let math = "";
// let first = true;

// function num_inp(num) {
//     // let but = document.getElementsByName("seven")[0];
//     // but.style.backgroundColor = "red";
//     let input = document.getElementById('input_box').value;
//     document.getElementById('input_box').value = input+`${num}`;
// }

// function ac() {
//     document.getElementById('input_box').value = "";
//     answer = 0;
//     first = true;
// }

// function del() {
//     let input = document.getElementById('input_box').value;
//     document.getElementById('input_box').value = input.substring(0, input.length - 1);
// }

// function display_result() {
//     let input = parseInt(document.getElementById('input_box').value);
//     if(math == "add"){
//         answer += input;
//         math = "";
//     }else if(math == "subtract"){
//         answer -= input;
//         math = "";
//     }else if(math == "multiply"){
//         answer *= input;
//         math = "";
//     }else if(math == "divide"){
//         answer /= input;
//         math = "";
//     }else if(math == ""){
//         return;
//     }
//     document.getElementById('input_box').value = answer;
// }

// function operation1(operator) {
//     if(first){
//         answer = parseInt(document.getElementById('input_box').value);
//         document.getElementById('input_box').value = "";
//         math = operator;
//         first = false;
//         return;
//     }else {
//         display_result();
//         answer = parseInt(document.getElementById('input_box').value);
//         document.getElementById('input_box').value = "";
//         math = operator;
//     }
//     console.log("hello");
//     eval()
// }

console.log("hello world");

let display = document.getElementById("input_box");
display.value = "123";
let buttons = Array.from(document.getElementsByClassName('box'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                console.log(display.value);
                display.value = '';
                break;
            case '=':
                try{
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error"
                }
                break;
            case 'DEL':
                if (display.value){
                   display.value = display.value.slice(0, -1);
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});

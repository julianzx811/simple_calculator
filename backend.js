let result = 0;
let last_operator = '';
let add = (string_num1,string_num2)=>{return (parseInt(string_num1)+ parseInt(string_num2))};

let subtract = (string_num1,string_num2)=>{return (parseInt(string_num1)-parseInt(string_num2))};

let multiply = (string_num1,string_num2)=>{return (parseInt(string_num1)*parseInt(string_num2))};

let divide = (string_num1,string_num2)=>{return (parseInt(string_num1)/parseInt(string_num2))};

//opearators to work with
let divide_button = document.querySelector('#divide');
let product_button = document.querySelector('#product');
let rest_button = document.querySelector('#rest');
let plus_button = document.querySelector('#plus');
//functions to work with 
let display_button = document.getElementById('display');
let equal = document.querySelector('#equal');
let clear_button = document.querySelector('#clear_display');
//add number to the display
function click_number_button(e){
    let button_content = document.getElementById(`${e.target.id}`).textContent;
    if(!isNaN(button_content)){
        if(display_button.textContent == '0'){
            display_button.textContent = button_content;
        }else{
            display_button.textContent += button_content;
        }
    }
    else if(isNaN(button_content)){
        if (button_content == '+') {
            last_operator = '+';
            result += parseFloat(display_button.textContent);
            clear_display_XD();
        }
        if (button_content == '/') {
            if (result == 0) {
                result = 1;
            }
            last_operator = '/';
            result /= parseFloat(display_button.textContent);
            clear_display_XD();
        }
        if (button_content == '-') {
            last_operator = '-';
            result -= parseFloat(display_button.textContent);
            clear_display_XD();
        }
        if (button_content == '*') {
            if (result == 0) {
                result = 1;
            }
            last_operator = '*';
            result *= parseFloat(display_button.textContent);
            clear_display_XD();
        }
        if (button_content == '=') {
            if (last_operator == '+') {
                result += parseFloat(display_button.textContent);
                clear_display_XD();
            }
            if (last_operator == '/') {
                if (result == 0) {
                    result = 1;
                }
                result /= parseFloat(display_button.textContent);
                clear_display_XD();
            }
            if (last_operator == '-') {
                result -= parseFloat(display_button.textContent);
                clear_display_XD();
            }
            if (last_operator == '*') {
                if (result == 0) {
                    result = 1;
                }
                result *= parseFloat(display_button.textContent);
                clear_display_XD();
            }
            clear_display_XD();
        }
    }
}

let number_buttons = document.querySelectorAll('button');

number_buttons.forEach(
    button=> {button.addEventListener('click',click_number_button);
        }
    );

//operators
//display the display XD
let display_display = ()=> display_button.textContent = result;
//clear the board 
let clear_display = ()=>{display_button.textContent = '0';result = 0};
//clear the display without changing the result vartiable
let clear_display_XD = ()=>{display_button.textContent = '0'};
clear_button.addEventListener('click',clear_display);
// result 
let in_display = () =>display_button.textContent = result;
equal.addEventListener('click',in_display);
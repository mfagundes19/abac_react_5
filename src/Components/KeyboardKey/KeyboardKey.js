import React from "react";

function clearCalculator() {
    document.getElementById("sentence_calculator").value = "";
    document.getElementById("display_calculator").value = "";
}

function calculatorKey(element) {
    let display_calculator = document.getElementById("display_calculator").value;
    switch(element){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            display_calculator+= element;
            document.getElementById("display_calculator").value = display_calculator;
            document.getElementById("sentence_calculator").value+= element;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            display_calculator = "";
            document.getElementById("display_calculator").value = display_calculator;
            document.getElementById("sentence_calculator").value+= element;    
            break;
        case 'A/C':
            clearCalculator();
            break;
    }
}


const KeyboardKey = (props) => {
    return (
        <div class="keyboard-control">
            <button type="button" class="btn-keyboard" id="btn_keyboard_{props.name}" data-param="{props.name}" onClick={() => calculatorKey(props.name)}>
                {props.name}
            </button>
        </div>
    );
}

export default KeyboardKey; 
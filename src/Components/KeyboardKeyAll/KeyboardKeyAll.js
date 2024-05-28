import React from "react";


function executeCalculator() {
    let sentence = document.getElementById("sentence_calculator").value;
    let sentence_one = "";
    let operator = "";
    let sentence_two = "";
    let array = sentence.split('');
    for(var i=0; i < array.length; i++){
        switch(array[i]) {
            case '+':
                operator = array[i];
                break;
            case '-':
                operator = array[i];
                break;
            case '*':
                operator = array[i];
                break;
            case '/':
                operator = array[i];
                break;
        }
    }
    let explode = sentence.split(operator);
    sentence_one = explode[0];
    sentence_two = explode[1];
    let result = 0;
    switch(operator) {
        case '+':
            result = (parseFloat(sentence_one)) + (parseFloat(sentence_two));
            break;
        case '-':
            result = Math.abs((parseFloat(sentence_one)) - (parseFloat(sentence_two)));
            break;
        case '*':
            result = (parseFloat(sentence_one)) * (parseFloat(sentence_two));
            break;
        case '/':
            result = (parseFloat(sentence_one)) / (parseFloat(sentence_two));
            break;
    }
    let strCalculator = new String(result);
    strCalculator = strCalculator.replace(".",",");
    result = strCalculator;
    document.getElementById("display_calculator").value = result;
    document.getElementById("sentence_calculator").value = result;
}

const KeyboardKeyAll = (props) => {
    return (
        <div class="keyboard-control-all">
            <button type="button" class="btn-keyboard" id="btn_keyboard_{props.name}" onClick={() => executeCalculator()}>
                {props.name}
            </button>
        </div>
    );
}

export default KeyboardKeyAll; 
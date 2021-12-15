import {createDiv} from "./HTML.js";
import {createInput} from "./HTML.js";
import {createLabel} from "./HTML.js";

let result = document.getElementById('result');
createDiv(result);

result.innerHTML += createInput();
result.innerHTML += createLabel();
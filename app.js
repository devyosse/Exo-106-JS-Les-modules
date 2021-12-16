import {createDiv} from "./HTML.js";
import {createInput} from "./HTML.js";
import {createLabel} from "./HTML.js";

let result = document.getElementById('result');


 createInput("result", "email");
 createLabel("result", "password");

 createInput("result", "password");
createLabel("result", "E-mail");

let newDiv = createDiv();
result.appendChild(newDiv);

let newInput = createInput("email");
result.appendChild(newInput);

let newLabel =  createLabel( "password");
result.appendChild(newLabel);

let newInput2 = createInput("password");
result.appendChild(newInput2);

let newLabel2 =  createLabel( "E-mail");
result.appendChild(newLabel2);
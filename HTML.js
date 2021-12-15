export function createDiv(element){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "Hello je suis une div !";
    element.appendChild(newDiv);
}

export function createInput(){
    return "Hello je suis un input !";
}

export function createLabel(){
    return "Hello je suis un label !";
}


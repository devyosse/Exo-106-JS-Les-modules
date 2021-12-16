export function createDiv(){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "Hello je suis une div !";
  return newDiv;
}

export function createInput(type){
    let newInput = document.createElement('input');
    newInput.type = type;
    return newInput;
}

export function createLabel(type){
    let newLabel = document.createElement('label');
    newLabel.innerHTML = type;
    return newLabel
}


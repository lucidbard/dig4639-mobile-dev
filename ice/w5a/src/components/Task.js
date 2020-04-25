class Task {
    constructor() {

    
    
    this.props = props;
    this.element = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change",this.inputChanged);
    this.element.appendChild(checkbox);
    let taskText = document.createElement("span");
    taskText.innerHTML = inputElement.value;
   this.element.appendChild(taskText);

    }

}


export default Task
import  Card from "./component/Card/index.js"

function runOnLoad()
{
    // Create a container for us
    let element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newTask = new Card({content:"WOAH ITS A NEW CARD"});
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);

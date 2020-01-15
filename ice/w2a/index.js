var x = 0;
console.log("Test");
function scopeDemo() {
    console.log("hello world");
    let a = 3, b = 4, c = 5;
    x1[0] = 500;
    console.log(a);
    console.log(b);
    console.log(c);
    var x = 2;
    if(true) {
        var x = 0;
    }
}

function runOnLoad()
{
<<<<<<< HEAD
    //console.log(x);
=======
    // console.log(x);
>>>>>>> b8247c2fd80d905d3ad7473693cb639fd57f7f32
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click",onClick);
    var submitButton = document.getElementById("");
}
var a = 0;
a = 10;
console.log(a);
function onClick() {
    console.log("clicked!");
}
window.addEventListener("DOMContentLoaded", runOnLoad);
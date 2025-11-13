function init(){
//add your javascrip between these two lines of code
 
    // get elements
    const button = document.getElementById("entrybutton");
    const input = document.getElementById("entryinput");
    const output = document.getElementById("textoutput");

    // add click event to the Alert Me button
    button.addEventListener("click", function () {

        const text = input.value;   // whatever user typed

        // 1. show alert with your name + colon + text
        alert("Isaiah Pacheco: " + text);

        // 2. update the h2 text to JUST the input text
        output.textContent = text;

    });

}

window.addEventListener('load', init);


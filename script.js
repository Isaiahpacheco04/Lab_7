function init() {
    const input = document.getElementById('entryinput');
    const button = document.getElementById('entrybutton');
    const output = document.getElementById('textoutput');

    button.addEventListener('click', function () {
        let text = input.value;
        alert("Isaiah Pacheco: " + text);
        output.textContent = text;
    });
}

window.addEventListener('load', init);

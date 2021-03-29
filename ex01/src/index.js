var keyboard = document.getElementById("keyBoardButtons");
var keyboardButtons = document.getElementsByTagName("button");
var keyboardInput = document.getElementById("virtualInput");
keyboardInput.focus();
function keyboardInit() {
    for (var i = 0; i < keyboardButtons.length; i++) {
        keyboardButtons[i].onclick = function () {
            var keyValue = this.textContent;
            switch (keyValue) {
                case "backspace":
                    deleteChar();
                    break;
                case "caps lock":
                    changeCaps();
                    break;
                case "shift":
                    shiftCaps();
                    break;
                case "OK":
                    submitForm();
                    break;
                case "enter":
                    buttonClick("\r\n");
                    break;
                case "space":
                    buttonClick(" ");
                    break;
                default:
                    buttonClick(keyValue);
            }
        };
    }
}
function buttonClick(char) {
    if (keyboard.classList.contains("change-caps")) {
        if (keyboard.classList.contains("shift-caps")) {
            keyboardInput.value += char.toLowerCase();
            keyboard.classList.remove("shift-caps");
        } else {
            keyboardInput.value += char.toUpperCase();
        }
    } else if (keyboard.classList.contains("shift-caps")) {
        keyboardInput.value += char.toUpperCase();
        keyboard.classList.remove("shift-caps");
    } else {
        keyboardInput.value += char;
    }
}
function deleteChar() {
    keyboardInput.value = keyboardInput.value.slice(0, -1);
}
function shiftCaps() {
    keyboard.classList.add("shift-caps");
}
function changeCaps() {
    keyboard.classList.toggle("change-caps");
}
function submitForm() {
    alert(keyboardInput.value);
    keyboardInput.value = "";
    startPosition = 0;
    endPosition = 0;
}
window.onload = keyboardInit;
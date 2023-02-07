
let btn = document.querySelector("#btn");
let textComponent = document.querySelector("#text")

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
    // var name = prompt("Enter your name");
    // alert("Hello "+name);

    var userText = textComponent.value;
    console.log(userText);
}

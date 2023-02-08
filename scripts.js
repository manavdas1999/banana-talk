
let btn = document.querySelector("#btn");
let inputTextComponent = document.querySelector("#text");
let outputTextComponent = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/minion.json"
// let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// to generate request url
function getTranslationUrl(text){
    return url+"?text="+text;
}

// error handle callback function
function errorHandler(error){
    console.log("Error:", error);
    alert("Some Thing went wrong with server. Please try again later");
}

// button event click
function onBtnClick() {
    var userText = inputTextComponent.value;
    // console.log(getTranslationUrl(userText))
    fetch(getTranslationUrl(userText))
    .then(response => response.json())
    .then(data => {
        outputTextComponent.innerText = data.contents.translated;
    })
    // .catch(errorHandler);

    // outputComponent.innerText = userText;
}

btn.addEventListener("click", onBtnClick);


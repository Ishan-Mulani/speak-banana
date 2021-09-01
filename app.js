var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#input-text")
var outputText = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text){
    return serverURL + "?" + "text=" + text

}

function errorHandler(){
    alert("Something wrong with server")
}

function clickHandler(){
    fetch(getTranslationUrl(inputText.value))
    .then(response => response.json())
    .then(json => {
        outputText.innerHTML = json.contents.translated
    })
}


btnTranslate.addEventListener("click", clickHandler)

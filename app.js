var serverURL = "https://api.funtranslations.com/translate/minion.json";

function fetchURL(text){
    return serverURL + "?"+"text="+ text
}

function errorHandler(error) {
    console.log("error occured", error);

}

function btnHandler() {
    var inputText = inputReference.value
    fetch(fetchURL(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        outputReference.innerText = outputText;
    })
    .catch(errorHandler)
}





var inputReference = document.querySelector("#inputRef");
var btnReference = document.querySelector("#btnRef");
var outputReference = document.querySelector("#outputRef");
btnReference.addEventListener("click", btnHandler);
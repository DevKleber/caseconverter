function getSentence() {
    return document.getElementById("text").value;
}

function sentenceCase() {
    lowerCase()
    document.getElementById("text").value = getSentence().charAt(0).toUpperCase() + getSentence().slice(1)
}

function lowerCase() {
    document.getElementById("text").value = getSentence().toLowerCase();
}

function upperCase() {
    document.getElementById("text").value = getSentence().toUpperCase();
}

function capitalizedCase() {
    var str = getSentence();
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.getElementById("text").value = str.join(' ');
}

function alternateCase() {
    var chars = getSentence().toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    document.getElementById("text").value = chars.join("");

};
function copy() {
  var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};
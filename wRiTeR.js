const copy = () => {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.activeElement.blur();
}

const countLettersTo = (text) => {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toUpperCase() != text[i].toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

const wRiTe = () => {
    var text = document.getElementById('input').value.toLowerCase().split('');
    var output = '';
    for (let i = 0; i < text.length; i++) {
        let appendChar = text[i] + '';
        if (countLettersTo(output) % 2 == 1) {
            appendChar = appendChar.toUpperCase();
        }
        output += appendChar;
    }
    document.getElementById('output').value = output;
}
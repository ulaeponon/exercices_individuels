function getLatinCharacterList(texte) {
    const caracteres = texte.split("");
    return caracteres;
}

console.log(getLatinCharacterList("Hello , world"));


const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}
function translateLatinCharacter(caracteres) {
    const letter = caracteres.toUpperCase();
    const morse = latinToMorse[letter];
    return morse;
};
console.log(translateLatinCharacter("A"));

function encode(texte) {
    const morseList = [];
    const caracteres = getLatinCharacterList(texte);
    for (let index = 0; index < caracteres.length; index++) {
        const morse = translateLatinCharacter(caracteres[index].toUpperCase());
        morseList.push(morse);
    }
    return morseList;
};
console.log(encode("Hello , world"))

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
};

function getMorseCharacterList(morseList) {
    const letters = morseList.trim().split(" ");
    return letters;
};

function translateMorseCharacter(morseCaracter) {
    return morseToLatin[morseCaracter];
};


function decode(letters) {
    const latinList = [];
    const caracters = getMorseCharacterList(letters);
    for (let index = 0; index < caracters.length; index++) {
        const latin = translateMorseCharacter(caracters[index]);
        latinList.push(latin);
}
    return latinList;
};
function handleEncode(){
    const input = document.getElementById("userInput").value ; 
    const result = encode(input);
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = result.join("");
    resultDiv.style.display = "block";
};
function handleDecode(){
    const input = document.getElementById("userInput").value ; 
    const result = decode(input);
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = result.join("");
    resultDiv.style.display = "block";
};
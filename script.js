const input = document.getElementById('string');
const btn = document.getElementById('submit');
const output = document.getElementById('output');



function countVowels(event) {
    event.preventDefault();
    const string = input.value;
    let count = 0;
    let array = [...string];
    for (let i=0; i<array.length; i++) {
        if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
            count += 1;
        }
    }
    let vowel;
    if (count === 1) {
        vowel = "vowel";
    } else {
        vowel = "vowels";
    }

    return output.innerHTML = "Your input contains " + count + " " + vowel + ".";
}

btn.addEventListener('click', countVowels);
const input = document.getElementById('string');
const btn = document.getElementById('submit');
const output = document.getElementById('output');

function countVowels(event) {
    event.preventDefault();
    output.innerHTML = input.value;
}

btn.addEventListener('click', countVowels);

/* 
asdfasdfasf
make into array
[a,s,d,f,a,s,d,f,a,s,f]
for loop to go through and look for a,e,i,o,u
add them up
*/
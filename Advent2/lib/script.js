const arrBlock = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';

let parsedArr = [];
let validArr = [];
let invalidArr = [];

function formatArr(rawArray) {
  const regex = /\n/;
  let array = rawArray.split(regex);
  const numOfTerms = array.length;
  let objArr = array.map(s => s.split(' '));
  parseEntry(objArr, numOfTerms);
  for (let i = 0; i < parsedArr.length; i++) {
    validate(parsedArr[i]);
  }
  if (parsedArr.length) {
    console.log(`There are ${validArr.length} VALID passwords and ${invalidArr.length} INVALID passwords.`)
  }
}

function validate(entry) {
  const letter = entry.letter;
  const password = entry.password;
  const numLow = entry.instances[0];
  const numHigh = entry.instances[1];
  const regex = new RegExp(`${letter}`, 'g')
  let occurrences;
  
  if (password.match(regex)) {
    occurrences = password.match(regex).length;

    if (occurrences >= numLow && occurrences <= numHigh) {
      entry.validity = 'YES';
      validArr.push(entry);
    } else {
      occurrences = 0;
      entry.validity = 'NO';
      invalidArr.push(entry);
    }

  } else {
    occurrences = 0;
    entry.validity = 'NO';
    invalidArr.push(entry);
  } 
}

function parseEntry(entry, numOfTerms) {
  for (let i = 0; i < (numOfTerms - 1); i++) {
    const num = entry[i][0];
    const lett = entry[i][1];
    const pass = entry[i][2];
    const entryObj = { instances: num, letter: lett, password: pass }
    formatEntry(entryObj)
    parsedArr.push(entryObj);
  }
}

// takes an array item and separates the numbers and removes the ':' from the letter
function formatEntry(entry) {
  const numberEntry = entry.instances.split('-');
  entry.instances = numberEntry;
  const re = /:/;
  const letter = entry.letter.replace(re, '');
  console.log(letter);
  entry.letter = letter;
}

formatArr(arrBlock);
console.log(parsedArr);

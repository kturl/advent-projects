const inputArray = [1721, 979, 366, 299, 675, 1456];
const inputTotal = 1345;
const realArray = 'https://adventofcode.com/2020/day/1/input'
const gf = JSON.parse(realArray)

function sortArray(arr) {
  arr.sort((a, b) => a - b)
  console.log(arr)
  // display(arr)
}

function compareSum(inputArray, inputTotal) {
  let i = 0
  let j = inputArray.length - 1
  while (i < j) {
    if (inputArray[i] + inputArray[j] === inputTotal) {
      // console.log(inputArray[i] + inputArray[j])
      console.log('Lower Number: ' + inputArray[i])
      console.log('Higher Number: ' + inputArray[j])
      console.log('Multiplied: ' + inputArray[i] * inputArray[j])
      return 1
    } else if (inputArray[i] + inputArray[j] < inputTotal) {
      // console.log(inputArray[i] + inputArray[j])
      i++
    } else if (inputArray[i] + inputArray[j] > inputTotal) {
      // console.log(inputArray[i] + inputArray[j])
      j--
    } else {
      console.log('No Match')
      return 0
    }
  }
}

function solve(inputArray, inputTotal) {
  sortArray(inputArray)
  console.log(inputArray)
  compareSum(inputArray, inputTotal)
  // compareSum(inputArray, inputTotal) ? 'Match!' : 'No Match'
}

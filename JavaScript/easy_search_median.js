// Expected Result : 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    let arr = input.sort((a, b) => a - b);
    const titiktengah = [Math.floor(input.length / 2)];
    const median = arr.length % 2 === 1
      ? arr[titiktengah] 
      : (arr[titiktengah - 1] + arr[titiktengah]) / 2;
   return median;
}

console.log(result(input));

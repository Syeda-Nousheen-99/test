//Question 1
function maxProduct(nums) {
    let maxProduct = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
        let temp = currMax;
        currMax = currMin;
        currMin = temp;
      }
      currMax = Math.max(nums[i], currMax * nums[i]);
      currMin = Math.min(nums[i], currMin * nums[i]);
      maxProduct = Math.max(maxProduct, currMax);
    }
  
    return maxProduct;
  }
let num = parseInt(prompt("Enter numbers to find Product:"));
let Result = maxProduct([2, 4, 5, 7, -2, 0, -4, 0, -3]);
let userResult = maxProduct([num]);
alert("Question 1 Ans is: " + userResult);
//Question 2

let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }

    return [];
}

const result = twoSum(nums, target);
alert("QUestion 2 Ans is: " + result);

//Question 3

let str = "Welcome to this Javascript Guide!";
let words = str.split(" ");
let reversedWords = words.map(word => word.split("").reverse().join(""));
let reversedString = reversedWords.join(" ");
console.log(reversedString);
alert("QUestion 3 Ans is ," + reversedString);

//Question 4

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steves Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay Thw Final Book of The Hunger Games',
        readingStatus: false
    }
]
for (let i = 0; i < library.length; i++) {
    const librays = library[i];
    const { title, author, readingStatus } = librays;

    alert(`Book: ${title}\nAuthor: ${author}\nReading Status: ${readingStatus ? "Read" : "Not Read"}`);


 }


//Question 5

function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

let amount = parseInt(prompt("Enter the amount:"));
let coins = amountToCoins(amount, [50, 10, 5, 2, 1]);
alert("Answer of Question 5 is:" + coins);


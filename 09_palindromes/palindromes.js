// function isAlnum(c) {
//   return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
// }

// const palindromes = function (str) {
//   for (let i = 0, j = str.length - 1; i < j; ++i, --j) {
//     while (i < j && !isAlnum(str[i]))
//       ++i;
//     while (i < j && !isAlnum(str[j]))
//       --j;

//     if (str[i].toLowerCase() !== str[j].toLowerCase())
//       return false;
//   }

//   return true;
// };

const palindromes = function (str) {
  const cleaned = str.toLowerCase().replaceAll(/[^a-z0-9]+/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;

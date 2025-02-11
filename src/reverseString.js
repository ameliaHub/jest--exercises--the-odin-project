export function reverseString(str) {
  let auxStr = [];
  let i = 0;
  for (let index = str.length; index >= 0; index--) {
    auxStr[i] = str.charAt(index);
    i++;
  }
  return auxStr.join("");
}

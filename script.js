// # 1
// const plusOneToNumber = (numbers) => {
//   return numbers.map((number) => number + 1);
// };
// console.log(plusOneToNumber([1, 2, 3, 4]));

// # 2
// const obj = {
//   items: [],
//   addItem(item) {
//     return this.items.push(item);
//   },
//   getItems() {
//     return this.items;
//   },
// };
// obj.addItem("apple");
// obj.addItem("banana");
// console.log(obj.getItems());

// # 3
const fetchData = (URL) => {
  return new Promise((resolve, reject) => {
    if (URL.includes("error")) {
      reject({
        message: 'Error: Invalid URL - так как в URL имеется слово "error"',
      });
    } else {
      resolve({
        data: "success",
      });
    }
  });
};
fetchData("https://api.example/error.com")
  .then((res) => console.log(res))
  .catch((error) => console.error(error.message));

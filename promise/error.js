// Promise会自动捕获内部异常，并交给rejected相应函数处理

console.log("here we go");

new Promise( (resolve, reject) => {
  setTimeout((hw) => {
    console.log(hw, "test");
    // reject(new Error("bye"));
   throw new Error("bye");
 }, 2000, "hello World");
})
.then( value => {
  console.log(value);
}, error => console.log("Error:", error.message))
// .catch( error => {
//   console.log("Error:", error.message);
// });

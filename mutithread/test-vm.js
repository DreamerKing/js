import { createContext, runInContext, runInNewContext } from 'vm';

const ContextObject = runInNewContext('Object');
console.log(new Object() instanceof ContextObject);
const obj = new ContextObject();
console.log(obj instanceof ContextObject);
console.log(ContextObject.name);

let x = 1;
const contextObj = { x }
const context = createContext(contextObj);

const code = "x += 2; var y = 12;";
runInContext(code, context);

console.log(context);
console.log(x);
function* gen() {
  let a = yield 1;
  console.log('test', a)
  return 2;
}

const it = gen();
console.log(it.next('🤔'));
console.log(it.next('2'));

/* const it2 = gen();
for (const it of it2) {
  console.log(it);
} */


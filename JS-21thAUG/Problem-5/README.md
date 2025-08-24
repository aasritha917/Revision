Q1.console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

o/p:
1 -> runs immediately.
4 -> also runs immediately (synchronous).
3 -> goes into microtask queue, runs before setTimeout.
2 -> goes into macrotask queue, runs last.

Q2.
console.log(a);
var a = 10;
console.log(b);
let b = 20;

o/p:
undefined -> var variables are hoisted → a exists but is undefined until assigned.
ReferenceError -> let variables are also hoisted but kept in Temporal Dead Zone (TDZ) → accessing b before declaration gives ReferenceError.

Q3.
function foo() {
  console.log(this);
}
foo();
const obj = { foo };
obj.foo();

Q3.
function foo() {
  console.log(this);
}
foo();
const obj = { foo };
obj.foo();

o/p:
undefined  -> Calling foo() directly → in strict mode, this = undefined. (In browsers without strict mode, it would be window).
{ foo: [Function: foo] } -> Calling obj.foo() → here this refers to obj.

Q4.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}

o/p:
3 -> var is function-scoped → all callbacks share the same i, which becomes 3 after the loop.
3
3
0 -> let is block-scoped → each iteration keeps its own j, so logs 0, 1, 2.
1
2

Q5.
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 100;
console.log(obj.a);

o/p:
1 -> Object.freeze makes the object immutable (cannot change existing values). So obj.a stays 1

Q6.
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name);

o/p:
Bob -> Objects are stored by reference.obj1 and obj2 point to the same object in memory.Changing obj2.name also changes obj1.name.


Q7.
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };
shallowCopy.b.c = 42;
console.log(obj.b.c);

o/p.
42 -> Spread (...) makes a shallow copy, not deep copy.The nested object { c: 2 } is still the same reference.Changing shallowCopy.b.c also changes obj.b.c.

Q8.
function foo(x, y, z) {
  console.log(x, y, z);
}
foo(...[1, 2]);
foo(...[1, 2, 3, 4]);

o/p:
1 2 undefined -> First call → only two values passed, so z is undefined.
1 2 3 -> Second call → first three values are taken, extra values are ignored.

Q9.
function foo(a, b, c) {
  arguments[0] = 99;
  console.log(a, arguments[1]);
}
foo(1, 2, 3);

o/p:
99 2 -> In non-strict mode, arguments[0] and a are linked.Changing arguments[0] updates a.arguments[1] is just 2.

Q10.
console.log(typeof null);
console.log(null instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);

o/p:
object
false
true
true

typeof null → bug in JS, returns "object".null instanceof Object → false (null is not an object).Arrays are objects → so [] instanceof Array is true, and [] instanceof Object is also true.



async function one() {
  console.log('A1');
  await null;
  console.log('A2');
  setTimeout(() => console.log('A3'), 0);
}

async function two() {
  console.log('B1');
  setTimeout(() => console.log('B2'), 0);
  await Promise.resolve();
  console.log('B3');
}

console.log('Start');
one();
two();
Promise.resolve().then(() => console.log('C1'));
console.log('End');


Start
A1
B1
End
A2
B3
C1
B2
A3


console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
    setTimeout(() => console.log('4'), 0);
  });
}, 0);

Promise.resolve().then(() => console.log('5'));
queueMicrotask(() => console.log('6'));

console.log('7');


1
7
5
6
2
3
4


async function foo() {
  console.log('foo start');
  await Promise.resolve();
  console.log('foo middle');
  await null;
  console.log('foo end');
}

console.log('start');

foo();

Promise.resolve().then(() => console.log('P1'));

setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => console.log('Micro in T1'));
}, 0);

console.log('end');


start
foo start
end
foo middle
P1
foo end
T1
Micro in T1


console.log('W');

Promise.resolve().then(() => {
  console.log('X');
  return Promise.resolve();
}).then(() => {
  console.log('Y');
  setTimeout(() => console.log('Z'), 0);
}).then(() => {
  console.log('Last');
});

setTimeout(() => {
  console.log('Timer1');
  Promise.resolve().then(() => console.log('Micro after Timer1'));
}, 0);

console.log('Done');


W
Done
X
Y
Last
Timer1
Micro after Timer1
Z


setTimeout(async () => {
  console.log('T1 start');
  await null;
  console.log('T1 after await');
}, 0);

async function test() {
  console.log('test start');
  await Promise.resolve();
  console.log('test after await');
}

console.log('start');

test();

Promise.resolve().then(() => console.log('micro'));

console.log('end');


start
test start
end
test after await
micro
T1 start
T1 after await


console.log('Init');

setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => {
    console.log('Micro in T1');
    setTimeout(() => console.log('T2'), 0);
  });
}, 0);

Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => {
    console.log('T3');
    Promise.resolve().then(() => console.log('Micro in T3'));
  }, 0);
}).then(() => console.log('P2'));

console.log('Finish');


Init
Finish
P1
P2
T1
Micro in T1
T3
Micro in T3
T2


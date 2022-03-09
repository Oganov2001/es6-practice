function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors);

console.log('---');

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam,
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);

console.log('---');

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great Post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
};
console.log(values);

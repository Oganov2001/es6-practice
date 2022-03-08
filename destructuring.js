let expense = {
  type: 'Business',
  amount: '$45 USD'
};

const { type, amount } = expense;
console.log(type);
console.log(amount);

console.log('---');

let savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));

console.log('---');

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
console.log(location);

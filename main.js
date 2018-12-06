const cdigit = require('cdigit');
const RandExp = require('randexp');
const isUPC = require('is-upc');

let arr = [];
while (arr.length < 20) {
  let n = new RandExp(/\d{10}/).gen();
  n = '2' + n;
  let nC = cdigit.gtin.generate(n);
  if (isUPC(nC)) {
    arr.push(nC);
  }
}
arr.map(code => console.log(code));
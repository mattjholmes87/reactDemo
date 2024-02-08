// pure function - no outside impact
function add(x, y) {
  return x + y;
}

// Impure / Promiscuious function as it pulls in the from outside (harder to debug)
const x = 20;
const y = 10;

function add2() {
  return x + y;
}

//Another impure
let answer;

function add(x, y) {
  answer = x + y;
}

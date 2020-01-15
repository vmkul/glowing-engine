'use strict';

const withdraw = (cash, note) => {
  const maxval = note[0];
  const rest = cash % maxval;
  if (rest === cash) {
    note.shift();
    withdraw(cash, note);
  } else {
    const quantity = (cash - rest) / maxval;
    console.log(maxval + ': ' + quantity);
    if (rest === 0) return;
    note.shift();
    withdraw(cash - (quantity * maxval), note);
  }
};

const notes = [100, 5, 1];

withdraw(238, notes);

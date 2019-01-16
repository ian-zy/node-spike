function once(fn) {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
}

function onceAndAfter(f, g) {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
      g(...args);
    }
  };
}

function alternator(f, g) {
  let first = true;
  return (...args) => {
    if (first) {
      first = !first;
      f(...args);
    } else {
      first = !first;
      g(...args);
    }
  };
}

module.exports = { once, onceAndAfter, alternator };

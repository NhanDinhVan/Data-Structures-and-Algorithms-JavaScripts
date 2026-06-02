type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
};

function createCounter(init: number): Counter {
  const reset = init;
  let cur = init;
  return {
    increment() {
      return ++cur;
    },
    decrement() {
      return --cur;
    },
    reset() {
      cur = reset;
      return reset;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

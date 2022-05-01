const wait = function (fCondition, nInterval = 200, nLifetimeLimit = 10000) {
  const WAIT_INTERVAL_CYCLE = nInterval;
  const WAIT_LIFETIME = nLifetimeLimit;
  const WAIT_LIFETIME_ITERATIONS = Math.round(WAIT_LIFETIME / WAIT_INTERVAL_CYCLE);
  return new Promise((res, rej) => {
    let nIteration = 0;
    let timerId = setInterval(() => {
      nIteration++;
      if (fCondition()) {
        res();
        clearInterval(timerId);
        return;
      }
      if (nIteration >= WAIT_LIFETIME_ITERATIONS) {
        clearInterval(timerId);
        rej();
        return;
      }
    }, WAIT_INTERVAL_CYCLE);
  });
};

export {
  wait
}
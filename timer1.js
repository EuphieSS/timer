const timers = process.argv.slice(2);

const simpleTimer = (seconds) => {
  const validTimers = seconds.filter(second => second > 0);
  validTimers.map(timer => setTimeout(() => {
    process.stdout.write('\.');
  }, timer * 1000));
};

simpleTimer(timers);
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
}

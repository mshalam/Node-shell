const func = function(cmd) {
  // pwd code
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
};

module.exports = { func };

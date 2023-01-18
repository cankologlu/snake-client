const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {
  //console.log("Data is:",data); // user input test
  if(data === '\u0003') {
    process.exit();
  }
}


module.exports = {setupInput};
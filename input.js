let connection;

const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {
 console.log("Data is:",data); // user input test
  if(data === '\u0003') {
    process.exit();
  }
  if(data === '8') {
    connection.write("Move: up");
  }
  if(data === '5') {
    connection.write("Move: down");
  }
  if(data === '4') {
    connection.write("Move: left");
  }
  if(data === '6') {
    connection.write("Move: right");
  }
}



module.exports = {setupInput};
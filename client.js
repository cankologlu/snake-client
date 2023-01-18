const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT  // Port number here,
  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Ready to play");

    conn.write("Name: CAN")
    // conn.write("Move: up")


  });


  conn.on("data", (data) => {
  console.log(`Server says: `, data)

  });

  return conn;

  
};

module.exports = {connect};
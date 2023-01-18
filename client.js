const net = require("net");


const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here
    port: "50541"  // Port number here,
  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Ready to play");

    conn.write("Name: MCK")
    // conn.write("Move: up")


  });


  conn.on("data", (data) => {
  console.log(`Server says: `, data)

  });

  return conn;

  
};

module.exports = {connect};
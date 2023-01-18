const net = require("net");

// establishes a connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here
    port: "50541"  // Port number here,
  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Ready to play");


  })

conn.on("data", (data) => {
  console.log(`Server says: `, data);
})

  return conn;

  
};

console.log("Connecting 📡...");
connect();
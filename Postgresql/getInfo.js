const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "test-server",
  port: "5432",
  database: "test-db",
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database : \n", err);
  });

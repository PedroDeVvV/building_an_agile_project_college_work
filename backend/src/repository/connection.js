import mysql2 from "mysql2/promise";

async function connect() {
  const connection = await mysql2.createConnection({
    host: "localhost",
    password: "12345",
    port: "3306",
    database: "cinema",
    user: "root",
  });

  return connection
}

export default { connect }

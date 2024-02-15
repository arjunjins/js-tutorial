The _Singleton_ Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

```js
// Singleton class
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    // Simulate initializing database connection
    this.name = "MyDatabase";
    
    // Store the instance in a static property
    Database.instance = this;
    
    // Ensure that the constructor always returns the same instance
    return this;
  }

  query(sql) {
    console.log(`Executing query "${sql}" on database "${this.name}"`);
    // Simulated query execution
  }
}

// Usage
const db1 = new Database();
const db2 = new Database();

db1.query("SELECT * FROM users"); // Output: Executing query "SELECT * FROM users" on database "MyDatabase"
db2.query("DELETE FROM products"); // Output: Executing query "DELETE FROM products" on database "MyDatabase"

console.log(db1 === db2); // Output: true, both variables refer to the same instance
```

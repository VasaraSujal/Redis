const Redis = require("ioredis");
const redis = new Redis({ host: "localhost", port: 6379 });

async function main() {
  // 1. Test connection
  console.log(await redis.ping()); // Should print "PONG"

  // 2. Save data  (string)
  // await redis.set("fruit", "apple");
  // console.log("Saved: fruit → apple");

  // Save data (list)
  // await redis.rpush("fruits", "apple", "banana", "mango");
  // console.log("Saved list: fruits → [apple, banana, mango]");

  // Save data (hash)
  await redis.hset("user:1000", "name", "John Doe", "age", 30);
  console.log("Saved hash: user:1000 → {name: 'John Doe', age: 30}");

  // Save data (set)
  await redis.sadd("users", "1000", "2000", "3000");
  console.log("Saved set: users → {1000, 2000, 3000}");

  // Save data (sorted set)
  await redis.zadd("scores", 100, "user1", 200, "user2", 150, "user3");
  console.log("Saved sorted set: scores → {user1: 100, user2: 200, user3: 150}");

  // 3. Read data
  // const fruit = await redis.get("fruit");
  // console.log("Read:", fruit); // Prints "apple"

  // 4. Delete data
  // await redis.del("fruit");
  // console.log("Deleted 'fruit'");
}

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err));
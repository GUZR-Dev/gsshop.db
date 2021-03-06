## GS Shop Database

**Support:** [discord.gg/2YXBaBgJrA](https://discord.gg/2YXBaBgJrA) <br>
**NPM:** [npmjs.com/gs.database](https://www.npmjs.com/package/gs.database)

- **Persistent Storage** - Data doesn't disappear through restart

# Example
```js
const db = require("gs.database")

(async () => {
    // self calling async function just to get async
    // Setting a modal in the database:
    await db.create("Users");
    // -> "Users": []

    // Pushing a data to the modal "userIndo"
    await db.add("Users", { userId: '852628883143524391', username: 'GUZR#3639' });
    // -> "Users": [{ userId: '852628883143524391', username: 'GUZR#3639' }]

    // Fetching properties & Fetching properties using key
    await db.get("Users");
    // -> [{ userId: '852628883143524391', username: 'GUZR#3639' }]
    // if you want to specify a key you can do so like this
    // db.get("Users", { userId: '852628883143524391' });

    // Repeating previous examples:
    await db.add("Users", { userId: '596589359562620930', username: 'Shay_#8511' });
    // -> "Users": [{ userId: '852628883143524391', username: 'GUZR#3639' }, { userId: '596589359562620930', username: 'Shay_#8511' }]
    await db.get("Users", { userId: '852628883143524391' });
    // -> { userId: '852628883143524391', username: 'GUZR#3639' }

    // 
})();
```

# Installation
```
npm install gsshop.db
```
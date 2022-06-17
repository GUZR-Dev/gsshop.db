const fs = require("fs");
const util = require('./util/functions');

class Database {
    static create(name) {
        try {
            fs.readFileSync('./database.json', 'utf-8');
        } catch {
            throw new TypeError('Database Error: can`t read the file: "database.json"');
        } finally {
            if (fs.readFileSync('./database.json', 'utf-8') == '') {
                fs.writeFileSync('./database.json', "{}");
                const myObject = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
                if (myObject[name]) return;
                else {
                    myObject[name] = []
                    fs.writeFileSync('./database.json', JSON.stringify(myObject));
                }
            } else {
                const myObject = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
                if (myObject[name]) return;
                else {
                    myObject[name] = []
                    fs.writeFileSync('./database.json', JSON.stringify(myObject));
                }
            }
        }
    }

    static add(name, data) {
        try {
            fs.readFileSync('./database.json', 'utf-8');
        } catch {
            throw new TypeError('Database Error: can`t read the file: "database.json"');
        } finally {
            if (fs.readFileSync('./database.json', 'utf-8') == '') throw new TypeError(`Database Error: can\`t find data in "database.json"`);

            const myObject = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
            if (!myObject[name]) throw new TypeError(`Database Error: can\`t find the modal '${name}' in "database.json"`);

            // if (util.search !== null) throw new TypeError(`Database Error: data already are set to this modal`);

            myObject[name].push(data)
            fs.writeFileSync('./database.json', JSON.stringify(myObject));

        }
    }

    static get(name, data) {
        try {
            fs.readFileSync('./database.json', 'utf-8');
        } catch {
            throw new TypeError('Database Error: can`t read the file: "database.json"');
        } finally {
            if (fs.readFileSync('./database.json', 'utf-8') == '') throw new TypeError(`Database Error: can\`t find data in "database.json"`);
            
            const myObject = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
            var x;
            if (myObject[name] == undefined) x = null;
            else {
                if (!data || data == undefined) x = myObject[name]
                else {
                for (const data_name of Object.keys(data)) {
                    x = util.search(data[data_name], myObject[name], data_name) ?? null
                }
                }
            }
            return x;
        }
    }

    static has(key) {
        const data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
        if (!key) throw new TypeError('Database Error: No key specified');
        
        return !util.notFound(data[key]);
    }

    static delete(modal, data) {
        const file = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
        if (!modal) throw new TypeError('Database Error: No modal specified');
        if (!file[modal]) throw new TypeError(`Database Error: can\`t find the modal '${modal}' in the database`);
        if (data == undefined) {
            console.log(1)
            delete file[modal];
        } else {
            if (!file[modal][data]) throw new TypeError(`Database error: can\`t find the data '${data}' in '${modal}'`)
            else {
                delete file[modal][data];
            }
        }
        fs.writeFileSync("./database.json", JSON.stringify(file));
         
        return true;
    }   
}

module.exports = Database;
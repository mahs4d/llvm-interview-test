const Mongoose = require('mongoose');

class Database {
    static async setup() {
        const host = 'localhost';
        const port = 27017;
        const username = '';
        const password = '';
        const dbName = 'llvm-test';
        const uri = `mongodb://${host}:${port}`;

        await Mongoose.connect(uri, {
            user: username,
            pass: password,
            dbName,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }
}

module.exports = Database;

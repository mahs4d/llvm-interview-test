const UserModel = require('./models/UserModel');

class UserRepository {
    static async getUserByUsername(username) {
        return UserModel.findOne({ username }).exec();
    }

    static async createUser(username, password, senarioId) {
        const user = new UserModel({
            username,
            password,
            senarioId,
        });

        return user.save();
    }
}

module.exports = UserRepository;

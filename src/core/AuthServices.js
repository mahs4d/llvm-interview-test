const UserRepository = require('../db/UserRepository');

class AuthServices {
    static async login(username, password, senarioId) {
        const user = await UserRepository.getUserByUsername(username);
        if (user) {
            if (user.password === password) {
                return user;
            }

            return null;
        }

        return UserRepository.createUser(username, password, senarioId);
    }
}

module.exports = AuthServices;

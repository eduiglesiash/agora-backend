'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    usersBookBorrowed: async({ users, isbn }) => {
        const result = await Promise.all(users.map(async user => {
            const users = await strapi.services['borrowed-books'].count({ "users_library.id": user.id, 'library.isbn': isbn });
            return {
                id: user.id,
                codeUser: user.codeUser,
                name: user.name,
                surname: user.surname,
                borrowed: users > 0,
            }
        }));
        return result;
    }
};

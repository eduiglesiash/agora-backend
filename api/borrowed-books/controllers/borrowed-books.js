'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    users: async ctx => {
        const users = await strapi.services['users-library'].find();
        const usersBorrowed = await strapi.services['borrowed-books'].usersBookBorrowed({ users, isbn: ctx.params.isbn })
        return ctx.send(usersBorrowed);
    }
};

'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    availability: async ctx => {
        const filter = ctx.params.isbn ? { isbn: ctx.params.isbn } : {};
        const books = await strapi.services.library.queryBooks({ filter });
        const booksAvaliability = await strapi.services.library.queryBooksAvaliability({ books })
        return ctx.send(booksAvaliability);
    }
};

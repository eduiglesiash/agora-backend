'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    queryBooks: async ({ filter }) => {
        const result = await strapi.services.library.find({
            ...filter,
            _sort: 'title:asc',
        });

        return result;
    },
    queryBooksAvaliability: async ({ books }) => {
        const result = await Promise.all(books.map(async (book) => {
            const count = await strapi.services['borrowed-books'].count({ "library.isbn": book.isbn });
            return {
                ...book,
                leftBooks: book.quantity - count,
            };
        }));
        return result;
    }
};

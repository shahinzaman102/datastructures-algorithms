/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
    const result = [];
    let prefix = '';

    for (const char of searchWord) {
        prefix += char;
        const suggestions = [];

        for (const product of products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
            }
        }

        result.push(suggestions.sort().slice(0, 3));
    }

    return result;
};

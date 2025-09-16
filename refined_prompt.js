/**
 * Converts a given string to dot.case format.
 *
 * The function transforms the input string by:
 * - Validating that the input is a non-null, non-undefined string.
 * - Ensuring the string contains only letters, numbers, spaces, underscores, or hyphens.
 * - Splitting the string into words using spaces, underscores, or hyphens as delimiters.
 * - Converting all words to lowercase.
 * - Joining the words with dots ('.') to produce dot.case.
 *
 * Examples:
 *   toDotCase('first name');      // returns 'first.name'
 *   toDotCase('user_id');         // returns 'user.id'
 *   toDotCase('SCREEN_NAME');     // returns 'screen.name'
 *   toDotCase('mobile-number');   // returns 'mobile.number'
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in dot.case format.
 * @throws {Error} If the input is undefined, null, not a string, contains invalid special characters, or has no valid words.
 */
function toDotCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    // Check for invalid special characters (allow only letters, numbers, spaces, underscores, hyphens)
    if (!/^[\w\s\-]+$/.test(str)) {
        throw new Error('Input contains invalid special characters.');
    }
    // Convert to lower case, split by space, underscore, or hyphen
    const words = str
        .replace(/[_\-\s]+/g, ' ')
        .trim()
        .split(' ')
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one valid word.');
    }

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number

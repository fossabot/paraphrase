/**
 * @module paraphrase
 * @since 1.0.0
 */

/**
 * Valid types of results for the interpolated string
 * @private
 * @type {Array}
 * @member {String|Number}
 */
const VALID_RESULT_TYPES = Object.seal(['string', 'number']);

/**
 * Create new paraphrase method instance
 * @param  {...RegExp[]} replacers
 * @returns {Function} phraser function instance
 *
 * @example const phraser = paraphrase(/\${([^{}]*)}/gm);
 *
 * phraser('Hello, ${name}', {name: 'Martin'})
 */

module.exports = (...replacers) =>

    /**
     * phraser description
     * @param  {String} string Template
     * @param  {Object} data   Data for filling
     * @return {String}        Result
     */
    function phraser(string = '', data) {
        if (typeof string !== 'string') {
            throw new TypeError(`paraphrase expects first argument to be a string, got a ${typeof string}`);
        }

        if (!data) {
            return string;
        }

        /**
         * Replace method build with internal reference to the passed in data structure
         * @param  {String} haystack The full string match
         * @param  {String} needle   The content to identify as data member
         * @return {String}          Found value
         */
        function replace(haystack, needle) {
            const replacement = data[needle.trim()];

            return VALID_RESULT_TYPES.includes(typeof replacement) ? replacement : haystack;
        }

        return replacers.reduce((string, replacer) => string.replace(replacer, replace), string);
    };


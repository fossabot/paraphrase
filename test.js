const { expect } = require('chai');
require('chai').should();

const paraphrase = require('./');

describe('paraphrase', () => {

    it('phraser function exist', () => expect(paraphrase).to.exist);

    describe('paraphrase basic functionality', () => {
        const phraser = paraphrase(/\${([^{}]*)}/g);

        it('instance is a function', () => phraser.should.be.a('function'));

        it('instance can process string', () => expect(phraser.bind(null, '')).to.not.throw(TypeError));

        it('instance can not process non string', () => expect(phraser.bind(null, {})).to.throw(TypeError));
    });

    describe('paraphrase replacers', () => {
        it('multiple and similar replacement values', () => {
            const phraser = paraphrase(/\${([^{}]*)}/g);
            const first_name = 'Martin';
            const last_name = 'Prince';

            const res = phraser('Hello, ${ first_name } ${ first_name } ${ last_name }', {first_name, last_name}); // eslint-disable-line no-template-curly-in-string
            expect(phraser(res)).to.equal(`Hello, ${first_name} ${first_name} ${last_name}`);
        });

        it('multiple replacers', () => {
            const phraser = paraphrase(
                /\${([^{}]*)}/g,
                /%{([^{}]*)}/g,
                /{{([^{}]*)}}/g
            );
            const first_name = 'Martin';
            const last_name = 'Prince';

            const res = phraser('Hello, ${ first_name } %{ first_name } {{ last_name }}', {first_name, last_name}); // eslint-disable-line no-template-curly-in-string
            expect(phraser(res)).to.equal(`Hello, ${first_name} ${first_name} ${last_name}`);
        });
    });

});

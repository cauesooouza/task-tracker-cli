const { describe, it } = require('node:test');
const assert = require('node:assert');
const { commands, aliases, reference } = require('../../../lib/utils/commands.js');

describe('Utils command', () => {
    it('Receive a correct command, should return the same', () => {
        const inputCommand = 'new';
        const resolveCommand = reference(inputCommand);

        assert.strictEqual(resolveCommand, inputCommand);
    });

    it('Receive a incorrect command, should return undefined', () => {
        const inputCommand = 'make';
        const resolveCommand = reference(inputCommand);

        assert.strictEqual(resolveCommand, undefined);
    });

    it('Receive a correct alias command, should return full command', () => {
        const aliasCommand = 'n';
        const resolveCommand = reference(aliasCommand);

        assert.strictEqual(resolveCommand, 'new');
    });

    it('Receive a incorrect alias, should return undefined', () => {
        const aliasCommand = 'j';
        const resolveCommand = reference(aliasCommand);

        assert.strictEqual(resolveCommand, undefined);
    });
})
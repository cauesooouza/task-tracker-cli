const { describe, it, todo } = require('node:test');
const assert = require('node:assert');
const Cli = require('../../lib/cli');
const testCli = new Cli();

describe('CLI', () => {
    it('Should extract command', () => {
        // simulate CLI input
        process.argv = ['node', 'task-tracker', 'new']
        const command = testCli.extractCommand()

        assert.strictEqual(command, process.argv[2]);
    })

    todo('Implement log', () => { })
})
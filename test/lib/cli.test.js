const { describe, it } = require('node:test');
const assert = require('node:assert');
const Cli = require('../../lib/cli');
const testCli = new Cli();

describe('CLI', () => {
    it('Should extract command', () => {
        // simulate CLI input
        process.argv = ['node', 'task-tracker', 'new']

        let output = '';
        let log = console.log;

        console.log = (msg) => { output = msg };
        testCli.extractCommands()

        assert.strictEqual(output, process.argv[2]);
    })
})
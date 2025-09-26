const process = require('node:process');

const commands = [
    'new',
    'list',
    'update',
    'delete',
    'version'
]

class Cli {
    // todo: implement util function to log
    // #log;


    /**
     * Extract command from cli
     *
     * @returns {string} 
     */
    extractCommand() {
        const inputCommand = process.argv.slice(2, 3)?.toString();
        if (commands.includes(inputCommand)) {
            return inputCommand;
        } else {
            throw "Command not found";
        }
    }
}

module.exports = Cli;
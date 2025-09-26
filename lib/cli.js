const process = require('node:process');

// todo: refactor all code after done;
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

    extractCommands() {
        const inputCommand = process.argv.slice(2, 3)?.toString();
        if (commands.includes(inputCommand)) {
            console.log(inputCommand)
        } else {
            throw "Command not found";
        }
    }
}

module.exports = Cli;
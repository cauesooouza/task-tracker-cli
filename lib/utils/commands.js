const commands = [
    'new',
    'list',
    'update',
    'delete',
    'version'
]

const aliases = {
    n: 'new',
    l: 'list',
    u: 'update',
    d: 'delete',
    v: 'version'
}

/**
 * Check if a command exists (case-insensitive).
 *
 * The input command is treated as case-insensitive.
 *
 * @param {string} c 
 * @returns {string|undefined} 
 */
const reference = (c) => {
    if (!c) {
        return undefined;
    }

    c = c.toLowerCase();

    if (commands.includes(c)) {
        return c;
    }

    if (aliases[c]) {
        return aliases[c];
    }

    return undefined;
}

module.exports = {
    commands,
    aliases,
    reference
}
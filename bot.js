const CommandoClient = require('./client');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '?',
    owner: 'VOTRE_USER_ID',
    disableMentions: 'everyone'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.login('VOTRE_TOKEN');
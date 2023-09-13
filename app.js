const { Client } = require('discord.js');

const client = global.client = new Client({ disableEveryone: true});
const keepAlive = require("./server");
const process = global.process;

require('./src/login');
require('./src/events');
require('./src/commands');

keepAlive();
client.login
 
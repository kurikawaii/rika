const Discord = require('discord.js');
const client = new Discord.Client();
const dev = require('./dev.json');
const config = require('./config.json');

// Bot's Script Zone

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // I work only with message in lower case, so it will be easier
  let message = msg.content.toLowerCase()
  if(message.startsWith(config.prefix + config.name)) {
      if(selectArg(message, 0) === config.commands.cookie) {
          msg.reply(':cookie:')
      }
  }
});

// Functions Zone
function selectArg(str, slice) {
    let args = str.split(' ');
    // The first element will always be the trigger, so don't care
    let useless = args.shift();
    return args[slice];
}

client.login(dev.token);
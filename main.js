const Discord = require('discord.js');
const client = new Discord.Client();
const dev = require('./dev.json');
const config = require('./config.json');

// Bot's Script Zone

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.content.toLowerCase() === config.prefix + config.commands.hello) {
      msg.channel.send('Hello');
  }
  if(msg.content.toLowerCase().startsWith(config.prefix + config.name)) {
      msg.reply(selectArg(msg.content, 0))
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
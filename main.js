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
});

client.login(dev.token);
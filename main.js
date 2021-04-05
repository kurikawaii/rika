const Discord = require('discord.js');
const client = new Discord.Client();
const dev = require('./dev.json');
const config = require('./config.json');
// Moderations -> Mod
const mod = require('./mod.js');

// Bot's Script Zone

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let servers = await client.guilds.cache.size
  client.user.setActivity(`in ${servers} servers`, {type: 'PLAYING',}
);
  
client.on('message', msg => {
  // I work only with message in lower case, so it will be easier
  let message = msg.content.toLowerCase()
  if(message.startsWith(config.prefix + config.name)) {
    let arg1 = selectArg(message, 0)
      if(arg1 in config.commands) {
          switch(arg1) {
            case config.commands.cookie:
              msg.channel.send(':cookie:')
            case config.commands.status:
              msg.channel.send(status)
      }}
      else {
        msg.channel.send(`${arg1} is not in the command list`)
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

// Embeds Zone
const status = new Discord.MessageEmbed()
.setColor('#2185A9')
.setTitle('Status')
.setThumbnail('https://github.com/kurikawaii/rika/rika.png')
.setDescription('Status of Rika')
.addField('Servers', `${servers}`)
.addField('Version', config.version)
});

client.login(dev.token);
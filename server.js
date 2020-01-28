const Discord = require("discord.js")
const dotenv = require('dotenv')
const Message = require('./class/Message')
client = new Discord.Client({
    disableEveryone: true
})
dotenv.config()
client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    // client.user.setAvatar('./assets/Avatar.png').catch(console.error)
    client.user.setActivity('ClientXBot').catch(console.error)
  });
client.on('message', (message) => {
  new Message(message)
})
// Login to Discord API
client.login(process.env.TOKEN)
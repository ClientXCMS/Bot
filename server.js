const Discord = require("discord.js")
const dotenv = require('dotenv')
const MySQL = require('mysql')
const Replay = require('./functions/Replay')
client = new Discord.Client({
    disableEveryone: true
})
dotenv.config()
var Connection = MySQL.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DATABASE,
  charset: process.env.CHARSET
});
Connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + Connection.threadId);
});
client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    // client.user.setAvatar('./assets/Avatar.png').catch(console.error)
    client.user.setActivity('ClientXBot').catch(console.error)
  });
client.on('message', (message) => {
  if(message.author.bot) return
  var parts = message.content.split('')
  var letterUpercase = 0
  var current
  for (let i = 0; i < parts.length; i++) {
    current = parts[i]
    if(current == current.toUpperCase()){
      letterUpercase++
    }
  }
  console.log(letterUpercase)
  if(message == message.content.toUpperCase() || letterUpercase == process.env.CHARACTERS){
    Replay(message, 'error', 'Votre message ne doit pas contenir autant de majuscule.')
    return message.delete()
  }
})
client.login(process.env.TOKEN)
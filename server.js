const Discord = require("discord.js")
const dotenv = require('dotenv')
const MySQL = require('mysql')

client = new Discord.Client({
    disableEveryone: true
})
dotenv.config()
var Connection = MySQL.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  charset: process.env.CHARSET
});
client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    // client.user.setAvatar('./assets/Avatar.png').catch(console.error)
    client.user.setActivity('ClientXBot').catch(console.error)
  });
client.on('message', (message) => {
  console.log(message)
  if(message == message.toUpperCase()){
    console.log("Message en majuscule.");
  }
})
client.login(process.env.TOKEN)
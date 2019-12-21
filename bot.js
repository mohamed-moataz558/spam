const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657262233520177174")
setInterval(function() {
channel.send(`spam is here 3shan mexx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
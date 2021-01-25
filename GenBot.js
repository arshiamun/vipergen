const http = require('http');
const express = require('express');
const app = express();
var server = require('http').createServer(app);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
 
 
 
const Discord = require('discord.js');
const { Client, Attachment, Collection, RichEmbed } = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const usedCommandRecently4 = new Set();
 
 
 
 
client.on("ready", () => {
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
     let activities = [ `${client.guilds.size} Server!`, `${client.channels.size} Channel!`, `${client.users.size} Member!`, `Dev Yourname!` ], i = 0;
    setInterval(() => client.user.setActivity(`yt!help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
 
 
 
})
 
client.on("message", message => {
 if (!message.author.bot) {
  // If the message is "how to embed"
  if (message.content.toLowerCase() === "yt!help") {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle("Help")
      // Set the color of the embed
      .setColor("#cc92f7")
 
      // Set the main content of the embed
      .addField(`Generators`, 'yt!example')
    .addField(`Prefix`, 'yt!')
    .addField(`Bot Developer`, 'Yourname#Yourtag')
    message.channel.send(embed);
    message.react("👍");
  }
 }
});
 
 
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === 'yt!example'){
  if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Sorry But You cant generate now you have left 10 minutes')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000000) 
    var string = `test1
test2
test3
test4`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
                   message.channel.send(`Advertisement`);
        message.channel.send(`Check DM 🥳💖`);
};
};
});
 
 
client.login('ODAyODEzNzczMzIwMDI4MjIx.YA0slw.H2u8w2EKBGaZN8goMaj3BIxczwU');

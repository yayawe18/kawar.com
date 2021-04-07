const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
    .setThumbnail(message.author.avatarURL())
    .setDescription(`
 ≪  __**Prefix Bot d!**__  ≫
 __**command-music**__
d!play - d!skip - d!skipto
d!stop - d!volume - d!nowplaying
d!shuffle - d!search - d!resume
d!remove - d!queue - d!filter
d!loop - d!lyrics - d!radio
    __**Filter Commands**__
 d!fi 8D -  d!fi tremolo
 d!fi vibrato -  d!fi pulsator
 d!fi clear   -  d!fi bassboost
      d!fi vaporwave 
       __**Others**__ 
       d!help - d!ping
     d!prefix  - d!uptime 
__**LINKS**__
__. [SUPPORT](https://discord.gg/Ncrb9sfh7n) -   [WEBSITE](https://discord-music-kurd.kurdmore.repl.co)    -    [INVITE](https://discord.com/api/oauth2/authorize?client_id=779464107739971646&permissions=8&scope=bot).__
`)

  
   .setColor("RANDOM");
   helpEmbed.setTimestamp();
   message.react(":emoji_26:")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

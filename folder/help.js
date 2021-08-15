const { Client, MessageEmbed } = require('discord.js')
client.on('message', message => {
  if(message.content.startsWith(prefix + "help")){
    const embed = new MessageEmbed()
      .setTitle('ALL COMMANDS:')
      .setColor('#72abd6')
      .setThumbnail('https://cdn.discordapp.com/attachments/770329860282253363/870694716495257610/SkoobyDoo.png')
      .setDescription('!youtube', '!twitch', '!reddit', '!author', '!socials', '!instagram', '!discord', '!question', '!meme', '!news', '!avatar');
    message.channel.send(embed);
  }
});


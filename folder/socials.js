const { Client, MessageEmbed } = require('discord.js')
    client.on('message', message => {
      if(message.content.startsWith(prefix + "socials")){
        const embed = new MessageEmbed()
          .setTitle('Hey, check all my social media pages:')
          .setColor('#72abd6')
          .setThumbnail('https://cdn.discordapp.com/attachments/770329860282253363/870694716495257610/SkoobyDoo.png')
          .setTimestamp()
          .addFields(
            { name: 'Youtube', value: 'https://www.youtube.com/channel/UCucm2LD3y2swz2poXcGswlA' }, 
            { name: '\u200B', value: '\u200B' },
            { name: 'Twitch', value: 'https://www.twitch.tv/skoedell', inline: true },
            { name: 'Reddit', value: 'https://www.reddit.com/u/Skoedell.', inline: true },
            { name: 'Discord', value: 'https://discord.gg/ESayf5fP' },
          )
          ;
          message.channel.send(embed);
      }
    });

const { Client, MessageEmbed } = require('discord.js')

const redditFetch = require('reddit-fetch');
client.on('message', message => {
  if(message.content.startsWith(prefix + "joke")){
    redditFetch({
      subreddit: 'Jokes', 
      sort: 'top',
      allowedNSFW: true,
      allowedModPost: false,
      allowCrossPost: false,
    }).then(post => {
        const embed = new MessageEmbed()
          .setTitle(`${post.title}`)
          .setURL(`${post.url}`)
          .setColor('#72abd6')
          .setDescription(`||${post.selftext}||`)
          .setFooter('Click on the ⬛⬛⬛ to read the rest of the joke')
          .setTimestamp()
          message.channel.send(embed);
      });
    }
  });
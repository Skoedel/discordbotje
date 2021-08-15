const { Client, MessageEmbed } = require('discord.js')
const redditFetch = require('reddit-fetch');
client.on('message', message => {
     if(message.content.startsWith(prefix + "news")){
       redditFetch({
         subreddit: 'news', 
         sort: 'hot',
         allowedNSFW: false,
         allowedModPost: false,
         allowCrossPost: false,
       }).then(post => {
           const embed = new MessageEmbed()
             .setTitle(`${post.title}`)
             .setURL(`${post.url}`)
             .setColor('#72abd6')
             .setTimestamp()
             .setFooter('Click on the title to read the article.')
             message.channel.send(embed);
         });
       }
     });


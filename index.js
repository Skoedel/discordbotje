const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
Date
const prefix = "!";


client.on('message', message => {
  if(message.content.startsWith(prefix + "avatar")){
    message.reply(message.author.displayAvatarURL());
  }
});






client.on('message', message => {
  if(message.content.startsWith(prefix + "meme")){
    redditFetch({
      subreddit: 'memes', 
      sort: 'top',
      allowedNSFW: false,
      allowedModPost: false,
      allowCrossPost: true,
      allowedVideo: true,
    }).then(post => {
        const embed = new MessageEmbed()
          .setTitle('Here is a meme for ya!')
          .setURL(`${post.url}`)
          .setColor('#72abd6')
          .setAuthor('Skoedel')
          .setTimestamp()
          .setImage(`${post.url}`);
          
          message.channel.send(embed);
      });
    }
  });

  client.on("message", (message) => {
  
    if (!message.content.startsWith(prefix)) return;
  
  
    if (message.content.startsWith(prefix + "youtube")) {
      message.channel.send("This is my YouTube channel: https://www.youtube.com/channel/UCucm2LD3y2swz2poXcGswlA ");
    }
    if (message.content.startsWith(prefix + "reddit")) {
      message.channel.send("This is my Reddit account: https://www.reddit.com/u/Skoedell ");
    }
    if (message.content.startsWith(prefix + "discord")) {
        message.channel.send("This is my discord server: https://www.twitch.tv/skoedell ");
    }
    if (message.content.startsWith(prefix + "twitch")) {
      message.channel.send("This is my Twitch Channel: https://www.twitch.tv/skoedell ");

      
   
    }
  });

 

  
    

      client.on('message', message => {
        if(message.content.startsWith(prefix + "question")){
          redditFetch({
            subreddit: 'AskReddit', 
            sort: 'top',
            allowedVideo: true, 
            allowedNSFW: false,
            allowedModPost: false,
            allowCrossPost: false,
          }).then(post => {
              const embed = new MessageEmbed()
                .setTitle(`${post.title}`)
                .setURL(`${post.url}`)
                .setColor('#72abd6')
                .setAuthor(`u/${post.author}`)
                .setTimestamp()
                
                message.channel.send(embed);
            });
          }
        });




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



        client.on('message', message => {
          if(message.content.startsWith(prefix + "help", "commands")){
            const embed = new MessageEmbed()
              .setTitle('Hey, here is a list of all the commands!')
              .setColor('#72abd6')
              .setThumbnail('https://cdn.discordapp.com/attachments/770329860282253363/870694716495257610/SkoobyDoo.png')
              .setTimestamp()
              .addFields(
      
                { name: '!Youtube', value: 'To check my Youtube channel!' }, 
                { name: '!Twitch', value: 'To check my Twitch channel!',  },
                { name: '!Reddit', value: 'To check my Reddit account!',  },
                { name: '!Discord', value: 'To check my Discord server!' },
                { name: '!joke', value: 'To get a random joke!' }, 
                { name: '!question', value: 'To get a random question!' }, 
                { name: '!news', value: 'To get a news article!' }, 
                { name: '!meme', value: 'To get a random meme' }, 
                { name: '!socials', value: 'To get a list of my socials' }, 
              )
              ;
              message.channel.send(embed);
          }
        });      




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


  client.on('message', message => {
    if(message.content.startsWith('[POLL]')){
      message.react('1️⃣');
      message.react('2️⃣');
          
    }
  });
  
  
  

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


 
     client.on('guildMemberRemove', guildMember => {
      guildMember.guild.channels.cache.get('869522844609044510').send(`<@${guildMember.id}> left the server.` )
    });





     client.on('guildMemberAdd', guildMember => {
      guildMember.guild.channels.cache.get('869522844609044510').send(`<@${guildMember.id}> joined the server.` )
    });
    

    const ms = require ('ms');
module.exports = {
  name: 'mute',
  description: "This mutes a member",
  execute(message, args) {
    const target = message.mentions.users.first();
    if (target) {

      let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'mute')
      
      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        return
      }
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muterole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

      setTimeout(function () {
        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted`);
      }, ms(args[1]));
    }else {
        message.channel.send('Cant find that member!');
    }
  }
}


client.login(process.env.token);

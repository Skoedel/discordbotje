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
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to kick the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
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
    




client.login(process.env.token);

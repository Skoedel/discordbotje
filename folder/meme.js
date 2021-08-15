const redditFetch = require('reddit-fetch');
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
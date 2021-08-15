const redditFetch = require('reddit-fetch');
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
client.on('message', message => {
    if(message.content.startsWith(prefix + "avatar")){
      message.reply(message.author.displayAvatarURL());
    }
  });
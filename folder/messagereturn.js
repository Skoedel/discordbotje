client.on("message", (message) => {
  
    if (!message.content.startsWith(prefix)) return;
  
  
    if (message.content.startsWith(prefix + "youtube")) {
      message.channel.send("This is my YouTube channel: https://www.youtube.com/channel/UCucm2LD3y2swz2poXcGswlA ");
    }
    if (message.content.startsWith(prefix + "reddit")) {
      message.channel.send("This is my Reddit account: https://www.reddit.com/u/Skoedell ");
    }
    if (message.content.startsWith(prefix + "twitch")) {
      message.channel.send("This is my Twitch Channel: https://www.twitch.tv/skoedell ");
   
    }
  });
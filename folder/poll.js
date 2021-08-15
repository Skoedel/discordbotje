//poll
client.on('message', message => {
	if(message.content.startsWith('[POLL]')){
		message.react('1️⃣');
		message.react('2️⃣');
				
	}
});
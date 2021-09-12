const { ticket } = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		//Start Log
		console.log(`Ready! Logged in as ${client.user.tag}`);

		//RPC
		setInterval(() => {
			let activity = `${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Members`;
			client.user.setActivity(activity,
				{ type: "PLAYING" }
			);
  		},15000);

		//Ticket Nachricht
		const channel = client.channels.cache.get(ticket);
		channel.messages.fetch().then((messages) => {
			if (messages.size === 0) {
			// Send a new message
			channel.send({ content: 'Reagiere hier um ein Ticket zu öffnen'}).then((message) => {
				message.react('📩')
			});
			} else {
				// Edit the existing message
				for (const message of messages) {
					message[1].edit({ content: 'Nachricht'}).then((message) => {
						message.react('📩')
					});
				}
			}
		})
	},
};
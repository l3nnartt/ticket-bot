const { categoryId, clientId, ticket } = require('../config.json');

module.exports = {
	name: 'messageReactionAdd',
	execute(interaction, reaction) {
        //if bot adds reaction
        if (reaction.id == clientId) {
            return
        }

        //Create Ticket
        if (interaction.message.channelId == ticket) {
            interaction.message.guild.channels
            .create('ticket', {
                type: 'text',
                parent: categoryId
            })
            .then((channel) => {
                channel.send({ content: 'Hallo <@'+ reaction.id +'>! \nSchreib bitte dein Anliegen hinein. Ein Teammitglied wird sich gleich um dich kümmern. \nDu kannst das Ticket mit 🔒 schließen'}).then((message) => {
                    message.react('🔒')
                })
            })
        }
	},
};
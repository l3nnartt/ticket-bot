const { categoryId, clientId, ticket } = require('../config.json');

module.exports = {
	name: 'messageReactionAdd',
	execute(interaction, reaction) {
        //if bot adds reaction
        if (reaction.id == clientId) {
            return
        }

        console.log(interaction)
        console.log('-----------------------------------------------------------------------')
        console.log(reaction)

        //Create Ticket
        if (interaction.message.channelId == ticket) {

            message.channel.fetchMessage(MessageID).then(m => {
                m.reactions.remove(UserID);
            });

            msg.reactions.resolve('📩').users.remove("ID OR OBJECT OF USER TO REMOVE");

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

        if (message.channelId)


        if (interaction._emoji.name == '🔒') {
            interaction.message.channelId
        }
	},
};
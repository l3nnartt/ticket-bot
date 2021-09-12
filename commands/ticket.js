const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ticket')
		.setDescription('Open up a ticket')
        .addUserOption(option => option.setName('target').setDescription('Describe your Problem')),
	async execute(interaction, client) {
        const user = interaction.options.getUser('target') || interaction.user;
		const embed = new MessageEmbed()
			.setTitle(`${client.user.username} • Ping`)
			.setDescription(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
			.setTimestamp(interaction.createdAt)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
		interaction.reply({embeds: [embed]});
	},
};
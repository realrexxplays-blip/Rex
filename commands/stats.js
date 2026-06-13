const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Show bot statistics'),
  async execute(interaction) {
    const guild = interaction.guild;
    const uptime = Math.floor(interaction.client.uptime / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;

    const embed = new EmbedBuilder()
      .setTitle('📊 Bot Statistics')
      .addFields(
        { name: 'Server Count', value: `${interaction.client.guilds.cache.size}`, inline: true },
        { name: 'User Count', value: `${interaction.client.users.cache.size}`, inline: true },
        { name: 'Commands Loaded', value: `${interaction.client.commands.size}`, inline: true },
        { name: 'Uptime', value: `${hours}h ${minutes}m ${seconds}s`, inline: true },
        { name: 'Ping', value: `${interaction.client.ws.ping}ms`, inline: true },
        { name: 'Memory Usage', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true }
      )
      .setColor('#0099ff')
      .setFooter({ text: 'Rex Bot v1.0', iconURL: interaction.client.user.displayAvatarURL() });

    await interaction.reply({ embeds: [embed] });
  },
};

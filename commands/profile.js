const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Get an extended profile of a user')
    .addUserOption(option =>
      option.setName('user').setDescription('User to profile').setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Profile`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 256 }))
      .addFields(
        { name: 'Username', value: user.username, inline: true },
        { name: 'Tag', value: `#${user.discriminator}`, inline: true },
        { name: 'Status', value: member.presence?.status || 'offline', inline: true },
        { name: 'Joined Discord', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
        { name: 'Joined Server', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
        { name: 'Highest Role', value: member.roles.highest.toString(), inline: true },
        { name: 'Roles', value: member.roles.cache.map(r => r.toString()).join(' ') || 'No roles', inline: false }
      )
      .setColor('#0099ff')
      .setFooter({ text: 'Rex Bot' });

    await interaction.reply({ embeds: [embed] });
  },
};

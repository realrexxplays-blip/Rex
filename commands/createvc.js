const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createvc')
    .setDescription('Create a temporary voice channel')
    .addStringOption(option =>
      option.setName('name').setDescription('Name for the voice channel').setRequired(true)
    )
    .addIntegerOption(option =>
      option.setName('limit').setDescription('User limit (0 for unlimited)').setRequired(false)
    ),
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const limit = interaction.options.getInteger('limit') || 0;

    try {
      const channel = await interaction.guild.channels.create({
        name: name,
        type: ChannelType.GuildVoice,
        userLimit: limit,
      });

      await interaction.reply(`✅ Voice channel **${name}** created! <#${channel.id}>`);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: '❌ Failed to create voice channel.', ephemeral: true });
    }
  },
};
